// Comando para colocar os migrations no banco de dados
// dotnet ef migrations add InitialCreate
// dotnet ef database update
// using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using FluentValidation.AspNetCore;
using System.Text;
using SistemaEscolarAPI.DB;
using SistemaEscolarAPI.Models;
using SistemaEscolarAPI.DTO;
using Microsoft.OpenApi.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Security.Cryptography;

var builder = WebApplication.CreateBuilder(args);

// Configurar o DbContext com PostgreSQL (usando appsettings.json)
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("PostgresConnection")));

// Adicionar serviços ao contêiner
builder.Services.AddControllers(); // Adiciona suporte a controladores
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c => // para gerar a documentação lá em baixar, que é o Schemas
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Sistema Escolar API", Version = "v1" }); // Define o título e a versão da API na documentação do Swagger
});

// JWT Autenticação (na qual temos o TokenService)
// AddJwtBearer é um método que configura a autenticação JWT para o aplicativo ASP.NET Core. Ele permite que o aplicativo valide o JWT recebido nas solicitações HTTP
// JwtBearerDefaults é um sistema de autenticação padrão de tokens
// AuthenticationScheme é um parâmetro que especifica o esquema de autenticação usado. Neste caso, estamos usando o do JWT
var jwtKey = builder.Configuration["JwtSettings:Secret"]; // Corrigido para ler o segredo do arquivo de configuração (appsettings.json)

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(jwtKey)),
            ValidateIssuerSigningKey = true,
            ValidateIssuer = false,
            ValidateAudience = false
        };
    });

var app = builder.Build();

// Configurar middlewares
app.UseSwagger();
app.UseSwaggerUI();

// Redirecionamento para o front end
app.UseAuthentication(); // Ativa a autenticação, que valida os tokens JWT nas solicitações recebidas. Isso garante que apenas os usuários autenticados tenham acesso à API
app.UseAuthorization();

// Para servir os arquivos estáticos
app.UseStaticFiles(); // Permite que os arquivos estáticos sejam servidos diretamente para o cliente
app.UseRouting(); // Roteamento que permite que o ASP.NET direcione a solicitação para os controladores apropriados com base nas rotas definidas
app.UseHttpsRedirection();

// Redireciona para a página inicial (index.html)
app.MapGet("/", context =>
{
    context.Response.Redirect("/index.html");
    return Task.CompletedTask;
});

app.MapControllers(); // Mapeia os controladores
app.Run();
