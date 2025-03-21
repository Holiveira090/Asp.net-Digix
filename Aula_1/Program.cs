using System;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

// dotnet add package Microsoft.AspnetCore.Hosting
// dotnet add package Microsoft.Extensions.Hosting
// dotnet add package Microsoft.Aspnetcore.App

namespace Exemplo
{
    class Program
    {
        static void Main(string[] args)
        {
            var Builder = WebApplication.CreateBuilder(args); // criar a aplicação
            var app = Builder.Build(); // configurar

            app.UseStaticFiles(); // para poder habilitar arquivos estaticos
            app.UseRouting();

            // para definir as rotas
            app.UseEndpoints(endpoins =>
            {
                endpoins.MapGet("/", async context =>
                {
                    context.Response.Redirect("/index.html");
                });
            });

            app.Run();

        }
        // public static IHostBuilder CreateHostBuilder(string[] args) => { // Define o metodo que é responsavel para criar o host de aplicação
        //     Host.CreateDefaultBuilder(args) // cria um host com configuração padrão do ambiente
        //     .ConfigureWebHostDefaults(webBuilder)

        // }
    }
}