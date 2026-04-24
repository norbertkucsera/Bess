using EnergyBess.Domain.Models;

namespace EnergyBess.Services.Interfaces;

public interface ITokenService
{
    string GenerateJwtToken(ApplicationUser user);
}
