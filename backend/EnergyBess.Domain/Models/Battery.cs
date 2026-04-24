using System.ComponentModel.DataAnnotations;

namespace EnergyBess.Domain.Models;

public class Battery
{
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(100)]
    public required string Name { get; set; }

    [MaxLength(200)]
    public string? Location { get; set; }

    public double CapacityMWh { get; set; }

    public double PowerRatingMW { get; set; }

    [MaxLength(50)]
    public string? Status { get; set; }

    public DateTime InstallationDate { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime? UpdatedAt { get; set; }

    public ICollection<EnergyData> EnergyDataRecords { get; set; } = new List<EnergyData>();

    public ICollection<PerformanceMetric> PerformanceMetrics { get; set; } = new List<PerformanceMetric>();
}
