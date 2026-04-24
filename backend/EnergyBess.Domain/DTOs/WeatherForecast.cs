namespace EnergyBess.Domain.DTOs;

public class WeatherForecast
{
    public DateTime Date { get; set; }
    public double TemperatureCelsius { get; set; }
    public double TemperatureFahrenheit { get; set; }
    public double Humidity { get; set; }
    public double WindSpeed { get; set; }
    public string? Conditions { get; set; }
    public string? Location { get; set; }
}
