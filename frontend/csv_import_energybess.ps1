$ErrorActionPreference='Stop'
$root='C:\hackathon-april-2026\Container\Container'
$appSettings='C:\hackathon-april-2026\src\energy-bess\backend\EnergyBess.API\appsettings.json'

$connString = ((Get-Content -LiteralPath $appSettings -Raw | ConvertFrom-Json).ConnectionStrings.DefaultConnection)
if([string]::IsNullOrWhiteSpace($connString)){ throw 'Connection string not found.' }

Add-Type -AssemblyName Microsoft.VisualBasic
Add-Type -AssemblyName System.Data

function Get-BaseName([string]$fileName){
  $n=[System.IO.Path]::GetFileNameWithoutExtension($fileName)
  return ($n -replace '_(\d+)$','')
}

function Normalize-TableName([string]$base){
  $t=$base
  $t=$t -replace '\[Confidential\]\s*',''
  $t=$t -replace '-',''
  $t=$t -replace '\s+',''
  $t=$t -replace '[^A-Za-z0-9_]',''
  if([string]::IsNullOrWhiteSpace($t)){ $t='ImportedTable' }
  return $t
}

function Normalize-ColumnName([string]$name){
  $c=$name.Trim() -replace '"',''
  $parts=@($c -split '\s+' | Where-Object { $_ -ne '' })
  if($parts.Count -gt 1){
    $c=(($parts | ForEach-Object { if($_.Length -gt 1){ $_.Substring(0,1).ToUpper()+$_.Substring(1).ToLower() } else { $_.ToUpper() } }) -join '')
  } elseif($parts.Count -eq 1){
    $c=$parts[0]
  }
  $c=$c -replace '[^A-Za-z0-9_]',''
  if([string]::IsNullOrWhiteSpace($c)){ $c='Column' }
  return $c
}

function New-UniqueName([string]$candidate, [System.Collections.Generic.HashSet[string]]$existing){
  $base=$candidate
  $i=2
  $name=$base
  while($existing.Contains($name.ToLowerInvariant())){
    $name="${base}_$i"
    $i++
  }
  [void]$existing.Add($name.ToLowerInvariant())
  return $name
}

function Get-CsvHeader([string]$path){
  $parser = New-Object Microsoft.VisualBasic.FileIO.TextFieldParser($path)
  $parser.TextFieldType = [Microsoft.VisualBasic.FileIO.FieldType]::Delimited
  $parser.SetDelimiters(',')
  $parser.HasFieldsEnclosedInQuotes = $true
  try {
    if($parser.EndOfData){ return @() }
    return @($parser.ReadFields())
  }
  finally {
    $parser.Close()
  }
}

$files = Get-ChildItem -Path $root -Recurse -File -Filter '*.csv'
if(-not $files){ throw "No CSV files found under $root" }

$groups=@{}
foreach($f in $files){
  $table = Normalize-TableName (Get-BaseName $f.Name)
  if(-not $groups.ContainsKey($table)){
    $groups[$table]=[ordered]@{
      Table=$table
      Files=New-Object System.Collections.Generic.List[object]
      Columns=New-Object System.Collections.Generic.List[string]
      ColumnSet=New-Object 'System.Collections.Generic.HashSet[string]' ([System.StringComparer]::OrdinalIgnoreCase)
    }
  }

  $rawHeaders = Get-CsvHeader $f.FullName
  $existingForFile = New-Object 'System.Collections.Generic.HashSet[string]' ([System.StringComparer]::OrdinalIgnoreCase)
  $resolvedHeaders = New-Object System.Collections.Generic.List[string]

  foreach($h in $rawHeaders){
    $norm = Normalize-ColumnName $h
    $uniqueForFile = New-UniqueName $norm $existingForFile
    [void]$resolvedHeaders.Add($uniqueForFile)
    if(-not $groups[$table].ColumnSet.Contains($uniqueForFile)){
      [void]$groups[$table].ColumnSet.Add($uniqueForFile)
      [void]$groups[$table].Columns.Add($uniqueForFile)
    }
  }

  $groups[$table].Files.Add([pscustomobject]@{ Path=$f.FullName; Headers=@($resolvedHeaders) }) | Out-Null
}

$sqlConn = New-Object System.Data.SqlClient.SqlConnection($connString)
$sqlConn.Open()
$results = New-Object System.Collections.Generic.List[object]

try {
  foreach($tableName in ($groups.Keys | Sort-Object)){
    $group=$groups[$tableName]
    $safeTableName = $tableName -replace ']',']]'
    $colDefs = ($group.Columns | ForEach-Object { '[' + ($_ -replace ']',']]') + '] NVARCHAR(MAX) NULL' }) -join ', '
    $createSql = "IF OBJECT_ID('dbo.$safeTableName','U') IS NULL BEGIN CREATE TABLE dbo.[$safeTableName] ($colDefs); END"

    $createCmd = $sqlConn.CreateCommand()
    $createCmd.CommandText = $createSql
    [void]$createCmd.ExecuteNonQuery()

    $tableInserted = 0

    foreach($fileInfo in $group.Files){
      $dt = New-Object System.Data.DataTable
      foreach($c in $group.Columns){ [void]$dt.Columns.Add($c, [string]) }

      $parser = New-Object Microsoft.VisualBasic.FileIO.TextFieldParser($fileInfo.Path)
      $parser.TextFieldType = [Microsoft.VisualBasic.FileIO.FieldType]::Delimited
      $parser.SetDelimiters(',')
      $parser.HasFieldsEnclosedInQuotes = $true

      try {
        if(-not $parser.EndOfData){ [void]$parser.ReadFields() }
        while(-not $parser.EndOfData){
          $fields=@($parser.ReadFields())
          $row=$dt.NewRow()
          for($i=0; $i -lt $fileInfo.Headers.Count; $i++){
            $colName=$fileInfo.Headers[$i]
            $val = if($i -lt $fields.Count){ $fields[$i] } else { $null }
            if([string]::IsNullOrWhiteSpace($val)){ $row[$colName]=[DBNull]::Value } else { $row[$colName]=$val }
          }
          $dt.Rows.Add($row)
        }
      }
      finally {
        $parser.Close()
      }

      if($dt.Rows.Count -gt 0){
        $bulk = New-Object System.Data.SqlClient.SqlBulkCopy($sqlConn)
        $bulk.DestinationTableName = "dbo.[$safeTableName]"
        foreach($c in $group.Columns){ [void]$bulk.ColumnMappings.Add($c,$c) }
        $bulk.WriteToServer($dt)
        $tableInserted += $dt.Rows.Count
        $bulk.Close()
      }
    }

    $results.Add([pscustomobject]@{ Table=$tableName; Files=$group.Files.Count; InsertedRows=$tableInserted; Columns=$group.Columns.Count }) | Out-Null
  }
}
finally {
  $sqlConn.Close()
}

$results | Sort-Object Table | ConvertTo-Json -Depth 5
