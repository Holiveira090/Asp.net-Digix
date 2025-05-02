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
    public class AlunoController : ControllerBase
    {
        private readonly AppDbContext _context; // Injeção de dependencia do contexto do banco de dados

        public AlunoController(AppDbContext context) // construtor que recebe o contexto do banco
        {
            _context = context; // inicializa o contexto do banco de dados
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AlunoDTO>>> Get()
        {
            var alunos = await _context.Alunos
                .Include(a => a.Curso)
                .Select(a => new AlunoDTO { Id = a.Id, Nome = a.Nome, Curso = a.Curso.Descricao })
                .ToListAsync();
            return Ok(alunos);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] AlunoDTO alunoDTO)
        {
            var Curso = await _context.Cursos.FirstOrDefaultAsync(c => c.Descricao == alunoDTO.Curso);
            if (Curso == null) return BadRequest("Curso não encontrado");

            var aluno = new Aluno { Nome = alunoDTO.Nome, CursoId = Curso.Id };
            _context.Alunos.Add(aluno);
            await _context.SaveChangesAsync();

            return Ok(new { mensagem = "Aluno cadastrado com sucesso!" }); // Mensagem é um propriedade anonima que contém um valor atribuido a ela
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, [FromBody] AlunoDTO alunoDTO)
        {
            var aluno = await _context.Alunos.FindAsync(id); // Vai fazer a procura do aluno, ou seja da entidade pelo seu identificador
            if (aluno == null) return NotFound("Aluno não encontrado");
            var Curso = await _context.Cursos.FirstOrDefaultAsync(c => c.Descricao == alunoDTO.Curso);
            if (Curso == null) return BadRequest("Aluno não encontrado");

            aluno.Nome = alunoDTO.Nome;

            aluno.CursoId = Curso.Id;
            _context.Alunos.Update(aluno);
            await _context.SaveChangesAsync();

            return Ok(new { mensagem = "Aluno alterado com sucesso!" });
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var aluno = await _context.Alunos.FindAsync(id);
            if (aluno == null) return BadRequest("Curso não encontrado");

            _context.Alunos.Remove(aluno);

            await _context.SaveChangesAsync();

            return Ok(new { mensagem = "Aluno excluido com sucesso!" });
        }

        // Método para buscar aluno por Id
        [HttpGet("{id}")]
        public async Task<ActionResult<AlunoDTO>> GetById(int id)
        {
            var alunos = await _context.Alunos
                .Include(a => a.Curso)
                .FirstOrDefaultAsync(a => a.Id == id);

                // FirstOrDefaultAsync é um metodo async que retorna o primeiro elemento que atende a condição atribuida a ele, ou valor padrão se nenhum for encontrado, que é 500
                // Include é método que inclui entidades relacionadas na consulta, permitindo carregar dados relacionados (como o curso do aluno) junto com o aluno

            if (alunos == null)
            {
                return NotFound("Aluno não encontrado");
            }
            var alunoDto = new AlunoDTO
            {
                Id = alunos.Id,
                Nome = alunos.Nome,
                Curso = alunos.Curso.Descricao
            };

            return Ok(alunoDto);
        }
    }
}