using EnergyBess.Domain.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace EnergyBess.Data;

public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<Battery> Batteries { get; set; }
    public DbSet<EnergyData> EnergyData { get; set; }
    public DbSet<PerformanceMetric> PerformanceMetrics { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        // Configure ApplicationUser
        builder.Entity<ApplicationUser>(entity =>
        {
            entity.Property(e => e.FirstName).HasMaxLength(100);
            entity.Property(e => e.LastName).HasMaxLength(100);
            entity.Property(e => e.CreatedAt).HasDefaultValueSql("GETUTCDATE()");
        });

        // Configure Battery
        builder.Entity<Battery>(entity =>
        {
            entity.Property(e => e.CreatedAt).HasDefaultValueSql("GETUTCDATE()");
            entity.HasMany(b => b.EnergyDataRecords)
                .WithOne(e => e.Battery)
                .HasForeignKey(e => e.BatteryId)
                .OnDelete(DeleteBehavior.Cascade);
            entity.HasMany(b => b.PerformanceMetrics)
                .WithOne(p => p.Battery)
                .HasForeignKey(p => p.BatteryId)
                .OnDelete(DeleteBehavior.Cascade);
        });

        // Configure EnergyData
        builder.Entity<EnergyData>(entity =>
        {
            entity.Property(e => e.CreatedAt).HasDefaultValueSql("GETUTCDATE()");
            entity.HasIndex(e => new { e.BatteryId, e.Timestamp });
        });

        // Configure PerformanceMetric
        builder.Entity<PerformanceMetric>(entity =>
        {
            entity.Property(e => e.CreatedAt).HasDefaultValueSql("GETUTCDATE()");
            entity.HasIndex(e => new { e.BatteryId, e.MetricDate });
        });
    }
}
