using EndPoint.Context;
using EndPoint.Services;
using EndPoint.Services.Interfaces;
using EndPoint.Utilities;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

IConfiguration Configuration = builder.Configuration;

// Add services to the container.
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlServer(Configuration.GetConnectionString("TodoAppDbConntection"));
});

builder.Services.AddScoped<IAppDbContext,AppDbContext>();
builder.Services.AddTransient<ITodoServices, TodoServices>();
builder.Services.AddAutoMapper(config=> config.AddProfile<MappingProfile>());
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(setup =>
{
    setup.AddPolicy("react-app", config =>
    {
        config.WithOrigins(Configuration.GetValue("Origins", "http://localhost:3000/")).AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseDeveloperExceptionPage();

app.UseCors("react-app");

app.UseAuthorization();

app.MapControllers();

app.Run();

public partial class Program
{

}
