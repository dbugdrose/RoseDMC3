using API.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<RPSLSServices>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("RPSLS", policy =>
    {
        policy.WithOrigins("http://localhost:5500", "http://localhost:5254", "http://127.0.0.1:5500", "http://rpsls2526dr-e6gggpduhsdmg3d8.westus3-01.azurewebsites.net/")
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("RPSLS");
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
