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
                .Select(d => new DisciplinaAlunoCursoDTO
                {
                    AlunoId = d.alunoId,
                    CursoId = d.CursoId,
                    DisciplinaId = d.DisciplinaId
                })
                .ToListAsync();

            return Ok(registros);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] DisciplinaAlunoCursoDTO disciplinaAlunoCursoDTO)
        {
            var entidade = new DisciplinaAlunoCurso
            {
                alunoId = disciplinaAlunoCursoDTO.AlunoId,
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

    }
}