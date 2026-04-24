using EnergyBess.Domain.DTOs;

namespace EnergyBess.Services.Interfaces;

/// <summary>
/// Service interface for weather forecast data integration.
/// This is a placeholder for future implementation of weather data providers.
/// </summary>
public interface IWeatherForecastService
{
    /// <summary>
    /// Gets weather forecast for a specific location and date range.
    /// </summary>
    Task<IEnumerable<WeatherForecast>> GetForecastAsync(string location, DateTime startDate, DateTime endDate);

    /// <summary>
    /// Gets current weather conditions for a location.
    /// </summary>
    Task<WeatherForecast?> GetCurrentWeatherAsync(string location);
}
