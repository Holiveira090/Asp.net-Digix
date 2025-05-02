using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SistemaEscolarAPI.Models;
using SistemaEscolarAPI.DTO;
using Microsoft.AspNetCore.Mvc;
using SistemaEscolarAPI.DB;

namespace SistemaEscolarAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DisciplinaAlunoCursoController : ControllerBase
    {
        private readonly AppDbContext _context; // Injeção de dependencia do contexto do banco de dados

        public DisciplinaAlunoCursoController(AppDbContext context) // construtor que recebe o contexto do banco
        {
            _context = context; // inicializa o contexto do banco de dados
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DisciplinaAlunoCursoDTO>>> Get()
        {
            var registros = await _context.DisciplinaAlunoCursos
                .Include(d => d.Disciplina)
                .Include(d => d.Aluno)
                .Include(d => d.Curso)

                .Select(d => new DisciplinaAlunoCursoDTO
                {
                    Id = d.AlunoId + d.CursoId + d.DisciplinaId,
                    AlunoId = d.AlunoId,
                    AlunoNome = d.Aluno.Nome,
                    CursoId = d.CursoId,
                    CursoDescricao = d.Curso.Descricao,
                    DisciplinaId = d.DisciplinaId,
                    DisciplinaDescricao = d.Disciplina.Descricao
                })
                .ToListAsync();

            return Ok(registros);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] DisciplinaAlunoCursoDTO disciplinaAlunoCursoDTO)
        {
            var entidade = new DisciplinaAlunoCurso
            {
                AlunoId = disciplinaAlunoCursoDTO.AlunoId,
                CursoId = disciplinaAlunoCursoDTO.CursoId,
                DisciplinaId = disciplinaAlunoCursoDTO.DisciplinaId
            };
            _context.DisciplinaAlunoCursos.Add(entidade);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, [FromBody] DisciplinaAlunoCursoDTO disciplinaAlunoCursoDTO)
        {
            var entidade = await _context.DisciplinaAlunoCursos.FindAsync(id);
            if (entidade == null) return NotFound("não encontrado");

            _context.DisciplinaAlunoCursos.Remove(entidade);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<DisciplinaAlunoCursoDTO>> GetById(int id)
        {
            var relacoes = await _context.DisciplinaAlunoCursos
                .Include(d => d.Aluno)
                .Include(d => d.Curso)
                .Include(d => d.Disciplina)
                .ToListAsync();

            var relacao = relacoes.FirstOrDefault(r => r.AlunoId + r.CursoId + r.DisciplinaId == id);

            if (relacao == null) return NotFound("Relação não encontrada");

            var dto = new DisciplinaAlunoCursoDTO
            {
                AlunoId = relacao.AlunoId,
                CursoId = relacao.CursoId,
                DisciplinaId = relacao.DisciplinaId,
                AlunoNome = relacao.Aluno.Nome,
                CursoDescricao = relacao.Curso.Descricao,
                DisciplinaDescricao = relacao.Disciplina.Descricao
            };

            return Ok(dto);
        }


    }
}