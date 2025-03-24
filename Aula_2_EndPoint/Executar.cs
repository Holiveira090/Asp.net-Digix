using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Aula_2_EndPoint.Controller;

// para executar os comandos eu preciso instalar os pacotes ASP.NET core com o comando: dotnet add package Microsoft.AspNetCore

// Vamos usar a ferramenta Swagger para documentar a API, que já esta incluida no ASP.NET Core, mas precisa de um pacote para funcionar, e nisso precisamos executar o comando: dotnet add package Swashbuckle.AspNetCore

// Chamar as bibliotecas do ASP.NET Core
using Microsoft.AspNetCore.Builder; // Isso serve para configurar a aplicação e interfaces e classes para configurar a aplicação
using Microsoft.Extensions.Hosting; // Isso serve para configurar a aplicação e interfaces e classes para configurar a aplicação
using Microsoft.Extensions.DependencyInjection; // Isso serve para configurar a aplicação e interfaces

namespace Aula_2_EndPoint
{
    public class Executar
    {
        public static void Main(string[] args)
        {
            // Vou chamar uma classe selead com o nome WebAplication, que é uma classe que representa uma aplicação web ASP.NET Core
            var builder = WebApplication.CreateBuilder(args); // vai criar uma aplicação web
            // O args porque ele é um array de string que representa os argumentos da linha de comando

            // Agora vou adicionar os serviços de controller do WebApplication
            builder.Services.AddControllers(); // Vai adicionar os serviços de controller do WebApplication

            // Habilitar o Swagger para documentação da API
            builder.Services.AddEndpointsApiExplorer(); // Vai adicionar o Swagger para a documentação da API
            builder.Services.AddSwaggerGen(); // vai adicionar o Swagger para documentação API

            var app = builder.Build(); // vai construir a aplicação

            app.UseSwagger(); // Vai usar o Swagger
            app.UseSwaggerUI(); // Vai usar o Swagger

            app.UseHttpsRedirection(); // vai usar o HTTPS, adiciona o middleware de redirecionamento HTTPS (que é um protocolo de comunicação de segurança sobre uma rede de computadores), exemplo: http://localhost:5000 para https://localhost:5001

            app.UseAuthorization(); // vai usar a autorização, adiciona o middleware de autorização que permite a autenticação do usuário

            app.MapControllers(); // vai mapear os controllers, adiciona o middleware de roteamento que corresponde a solicitações HTTP a um controlador

            app.Run(); // Vai rodar a aplicação

            // caminho do Swagger vai ser http://localhost:5000/swagger
        }
    }
}