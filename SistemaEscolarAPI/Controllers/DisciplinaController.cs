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
    public class DisciplinaController : ControllerBase
    {
        private readonly AppDbContext _context;

        public DisciplinaController(AppDbContext context) // construtor que recebe o contexto do banco
        {
            _context = context; // inicializa o contexto do banco de dados
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<DisciplinaDTO>>> Get()
        {
            var disciplina = await _context.Disciplinas
                .Include(d => d.Curso)
                .Select(d => new DisciplinaDTO { Id = d.Id, Descricao = d.Descricao, Curso = d.Curso.Descricao })
                .ToListAsync();
            return Ok(disciplina);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] DisciplinaDTO disciplinaDTO)
        {
            var Curso = await _context.Cursos.FirstOrDefaultAsync(c => c.Descricao == disciplinaDTO.Curso);
            if (Curso == null) return BadRequest("Curso não encontrado");

            var disciplina = new Disciplina { Descricao = disciplinaDTO.Descricao, CursoId = Curso.Id };
            _context.Disciplinas.Add(disciplina);
            await _context.SaveChangesAsync();

            return Ok(new { mensagem = "Disciplina registrada com sucesso!" });
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, [FromBody] DisciplinaDTO disciplinaDTO)
        {
            var disciplina = await _context.Disciplinas.FindAsync(id);
            if (disciplina == null) return NotFound("Disciplina não encontrada");

            var Curso = await _context.Cursos.FirstOrDefaultAsync(c => c.Descricao == disciplinaDTO.Curso);
            if (Curso == null) return BadRequest("Aluno não encontrado");

            disciplina.Descricao = disciplinaDTO.Descricao;
            disciplina.CursoId = Curso.Id;

            _context.Disciplinas.Update(disciplina);
            await _context.SaveChangesAsync();

            return Ok(new { mensagem = "Disciplina atualizada com sucesso!" });
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var disciplina = await _context.Disciplinas.FindAsync(id);
            if (disciplina == null) return BadRequest("Curso não encontrado");

            _context.Disciplinas.Remove(disciplina);

            await _context.SaveChangesAsync();
            return Ok(new { mensagem = "Disciplina deletada com sucesso!" });
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<DisciplinaDTO>> GetById(int id)
        {
            var disciplinaDto = await _context.Disciplinas
                .Where(d => d.Id == id)
                .Select(d => new DisciplinaDTO
                {
                    Id = d.Id,
                    Descricao = d.Descricao,
                    Curso = d.Curso.Descricao
                })
                .FirstOrDefaultAsync();

            if (disciplinaDto == null)
            {
                return NotFound("Disciplina não encontrada");
            }

            return Ok(disciplinaDto);
        }

    }
}