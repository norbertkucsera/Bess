using EnergyBess.Domain.Models;

namespace EnergyBess.Services.Interfaces;

/// <summary>
/// Service interface for external BESS data integration.
/// This is a placeholder for future implementation of data providers (IoT, SCADA, etc.).
/// </summary>
public interface IBessDataService
{
    /// <summary>
    /// Imports real-time energy data from external sources.
    /// </summary>
    Task<bool> ImportEnergyDataAsync(int batteryId);

    /// <summary>
    /// Gets battery status from external monitoring systems.
    /// </summary>
    Task<Battery?> GetBatteryStatusAsync(int batteryId);

    /// <summary>
    /// Synchronizes performance metrics from external systems.
    /// </summary>
    Task<bool> SyncPerformanceMetricsAsync(int batteryId, DateTime startDate, DateTime endDate);
}
