using ExemploASP_NET_CORE.database;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args); // Criar a aplicação web

// Serviços de configuração
builder.Services.AddControllersWithViews(); // Adiciona o MVC com Views
builder.Services.AddEndpointsApiExplorer(); // Adiciona o Explorador de endpoints
builder.Services.AddSwaggerGen(); // Adiciona o Swagger para a documentação da API
builder.Services.AddDbContext<AppDbContext>(Options => // Configura o contexto do banco de dados
{
    Options.UseNpgsql(builder.Configuration.GetConnectionString("PostgresConnection")); // Usa o PostgreSQL com a string de conexão definida no appsettings.json
});

var app = builder.Build(); // Cria a aplicação a partir dos serviços configurados

if (app.Environment.IsDevelopment()) // Verifica se o ambiente é de desenvolvimento
{
    app.UseSwagger(); // Habilitar o Swagger
    app.UseSwaggerUI(); // Habilita a interface do Swagger
}
app.UseDefaultFiles(); // Habilita os arquivos padrão (index.html, default.html)
app.UseStaticFiles(); // Habilita os arquivos estáticos (CSS, JS, imagens, etc...)
app.UseHttpsRedirection(); // Redireciona requisições HTTP para HTTPS
app.MapControllers(); // Mapeia os controladores para as rotas

app.Run(); // Executa a aplicação