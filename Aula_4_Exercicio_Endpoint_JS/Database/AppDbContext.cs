using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Aula_4_Exercicio_Endpoint_JS.Database
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Models.Usuarios> Usuarios {get; set;}
        public DbSet<Models.Software> Software {get; set;}
        public DbSet<Models.Maquina> Maquina {get; set;}
    }
}