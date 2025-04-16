using Microsoft.EntityFrameworkCore;
using BDB_Backend.Models;
using System.Configuration;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
//System.Configuration.ConfigurationManager.ConnectionStrings["PostgreSQLConnection"].ConnectionString)
builder.Services.AddDbContext<DatabaseContext>(options => options.UseNpgsql("Host=localhost:6000;Database=ECommerceBDB;Username=postgres;Password=P@ssw0rd!"));
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors(builder =>
{
    builder
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader();
});

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
