using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SistemaEscolarAPI.Models;

namespace SistemaEscolarAPI.DB
{
    public class AppDbContext : DbContext
    {
        public DbSet<Aluno> Alunos { get; set; }
        public DbSet<Curso> Cursos { get; set; }
        public DbSet<Disciplina> Disciplinas { get; set; }
        public DbSet<DisciplinaAlunoCurso> DisciplinaAlunoCursos { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DisciplinaAlunoCurso>()
                .HasKey(dc => new { dc.alunoId, dc.DisciplinaId, dc.CursoId });
            // HasKey é usado para definir a chave primaria composta da tabela de junção
        }
    }
}