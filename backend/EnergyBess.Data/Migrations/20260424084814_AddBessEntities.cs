using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EnergyBess.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddBessEntities : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Batteries",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Location = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    CapacityMWh = table.Column<double>(type: "float", nullable: false),
                    PowerRatingMW = table.Column<double>(type: "float", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    InstallationDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETUTCDATE()"),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Batteries", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EnergyData",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BatteryId = table.Column<int>(type: "int", nullable: false),
                    Timestamp = table.Column<DateTime>(type: "datetime2", nullable: false),
                    StateOfCharge = table.Column<double>(type: "float", nullable: false),
                    PowerOutputMW = table.Column<double>(type: "float", nullable: false),
                    EnergyChargedMWh = table.Column<double>(type: "float", nullable: false),
                    EnergyDischargedMWh = table.Column<double>(type: "float", nullable: false),
                    Temperature = table.Column<double>(type: "float", nullable: false),
                    Efficiency = table.Column<double>(type: "float", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETUTCDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EnergyData", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EnergyData_Batteries_BatteryId",
                        column: x => x.BatteryId,
                        principalTable: "Batteries",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PerformanceMetrics",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BatteryId = table.Column<int>(type: "int", nullable: false),
                    MetricDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    AvailabilityPercentage = table.Column<double>(type: "float", nullable: false),
                    UtilizationRate = table.Column<double>(type: "float", nullable: false),
                    CycleCount = table.Column<double>(type: "float", nullable: false),
                    RevenueDollars = table.Column<double>(type: "float", nullable: false),
                    OperatingCostDollars = table.Column<double>(type: "float", nullable: false),
                    NetProfitDollars = table.Column<double>(type: "float", nullable: false),
                    RoundTripEfficiency = table.Column<double>(type: "float", nullable: false),
                    ResponseTime = table.Column<double>(type: "float", nullable: false),
                    Notes = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETUTCDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PerformanceMetrics", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PerformanceMetrics_Batteries_BatteryId",
                        column: x => x.BatteryId,
                        principalTable: "Batteries",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EnergyData_BatteryId_Timestamp",
                table: "EnergyData",
                columns: new[] { "BatteryId", "Timestamp" });

            migrationBuilder.CreateIndex(
                name: "IX_PerformanceMetrics_BatteryId_MetricDate",
                table: "PerformanceMetrics",
                columns: new[] { "BatteryId", "MetricDate" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EnergyData");

            migrationBuilder.DropTable(
                name: "PerformanceMetrics");

            migrationBuilder.DropTable(
                name: "Batteries");
        }
    }
}
