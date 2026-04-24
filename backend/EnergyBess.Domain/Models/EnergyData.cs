using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EnergyBess.Domain.Models;

public class EnergyData
{
    [Key]
    public int Id { get; set; }

    [Required]
    public int BatteryId { get; set; }

    [ForeignKey(nameof(BatteryId))]
    public Battery? Battery { get; set; }

    public DateTime Timestamp { get; set; }

    public double StateOfCharge { get; set; }

    public double PowerOutputMW { get; set; }

    public double EnergyChargedMWh { get; set; }

    public double EnergyDischargedMWh { get; set; }

    public double Temperature { get; set; }

    public double Efficiency { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
