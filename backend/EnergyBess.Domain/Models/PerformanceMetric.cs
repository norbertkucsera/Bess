using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EnergyBess.Domain.Models;

public class PerformanceMetric
{
    [Key]
    public int Id { get; set; }

    [Required]
    public int BatteryId { get; set; }

    [ForeignKey(nameof(BatteryId))]
    public Battery? Battery { get; set; }

    public DateTime MetricDate { get; set; }

    public double AvailabilityPercentage { get; set; }

    public double UtilizationRate { get; set; }

    public double CycleCount { get; set; }

    public double RevenueDollars { get; set; }

    public double OperatingCostDollars { get; set; }

    public double NetProfitDollars { get; set; }

    public double RoundTripEfficiency { get; set; }

    public double ResponseTime { get; set; }

    [MaxLength(500)]
    public string? Notes { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
