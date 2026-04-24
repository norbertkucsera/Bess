using EnergyBess.Domain.Models;

namespace EnergyBess.Services.Interfaces;

/// <summary>
/// Service interface for battery optimization and intelligence algorithms.
/// This is a placeholder for future AI/ML-based optimization features.
/// </summary>
public interface IOptimizationService
{
    /// <summary>
    /// Calculates optimal charge/discharge schedule based on forecasts and market data.
    /// </summary>
    Task<object> GetOptimalScheduleAsync(int batteryId, DateTime startDate, DateTime endDate);

    /// <summary>
    /// Provides optimization recommendations for battery operations.
    /// </summary>
    Task<IEnumerable<string>> GetRecommendationsAsync(int batteryId);

    /// <summary>
    /// Predicts future performance metrics based on historical data.
    /// </summary>
    Task<PerformanceMetric?> PredictPerformanceAsync(int batteryId, DateTime targetDate);
}
