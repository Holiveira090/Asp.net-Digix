using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Aula_4_Exercicio_Endpoint_JS.Models;
using Aula_4_Exercicio_Endpoint_JS.Database;

namespace Aula_4_Exercicio_Endpoint_JS.Controller
{
    [ApiController]
    [Route("[controller]")]
    public class UsuariosController : ControllerBase
    {
        private readonly AppDbContext _context;
        public UsuariosController(AppDbContext context) // Construtor que recebe o AppDbContext que é a classe que representa o banco de dados
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Usuarios>> Get()
        {
            return await _context.Usuarios.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Usuarios>> Post([FromBody] Usuarios usuarios)
        {
            _context.Usuarios.Add(usuarios);
            await _context.SaveChangesAsync();
            return usuarios;
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Usuarios>>Put(int id, [FromBody] Usuarios usuarios)
        {
            var existente = await _context.Usuarios.FindAsync(id);

            if (existente == null) return NotFound();
            existente.Password = usuarios.Password;
            existente.Nome_usuario = usuarios.Nome_usuario;
            existente.Ramal = usuarios.Ramal;
            existente.Especialidade = usuarios.Especialidade;

            await _context.SaveChangesAsync();
            return existente;
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var existente = await _context.Usuarios.FindAsync(id);

            if (existente == null) return NotFound();
            _context.Usuarios.Remove(existente);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}