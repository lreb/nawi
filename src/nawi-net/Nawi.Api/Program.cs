


using Microsoft.EntityFrameworkCore;
using Nawi.Api.Core.Domain.Data;
using Nawi.Api.Core.Domain.Data.Repository.DemoService;
using Nawi.Api.Core.Domain.Repository.Common;
using Nawi.Api.Core.Infrastructure.Extensions;

Console.WriteLine("Starting application...");

// Load environment-specific configuration
var builder = WebApplication.CreateBuilder(args);
  builder.Configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
  .AddJsonFile($"appsettings.{builder.Environment.EnvironmentName}.json", optional: true, reloadOnChange: true)
  .AddEnvironmentVariables();
Console.WriteLine($"Current environment: {builder.Environment.EnvironmentName}");
// Configure PostgreSQL database context
builder.Services.AddDbContext<NawiDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));
// Register repository services
builder.Services.AddControllers();
// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
// Custom service registrations
builder.Services.AddScoped(typeof(IRepositoryRead<>), typeof(GenericRepository<>));
builder.Services.AddScoped<IDemoRepository, DemoRepository>();


//---------------------------------------------------------------

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsLocal())
{
  app.UseSwagger();
  app.UseSwaggerUI();
  app.UseDeveloperExceptionPage();
  // Apply migrations and seed the database
  Console.WriteLine("Applying migrations and seeding the database...");
  Console.WriteLine($"Environment: {app.Environment.EnvironmentName}");
  using (var scope = app.Services.CreateScope())
  {
    var services = scope.ServiceProvider;
    var context = services.GetRequiredService<NawiDbContext>();
    context.Database.Migrate();
    await Nawi.Api.Core.Domain.Data.Seeds.DemoSeed.Seed(context);
  }
  Console.WriteLine("Database migration and seeding completed.");
}
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
  
}

app.UseHttpsRedirection();

// var summaries = new[]
// {
//     "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
// };

// app.MapGet("/weatherforecast", () =>
// {
//   var forecast = Enumerable.Range(1, 5).Select(index =>
//       new WeatherForecast
//       (
//           DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
//           Random.Shared.Next(-20, 55),
//           summaries[Random.Shared.Next(summaries.Length)]
//       ))
//       .ToArray();
//   return forecast;
// })
// .WithName("GetWeatherForecast")
// .WithOpenApi();

app.MapControllers();

app.Run();

// record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
// {
//     public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
// }
