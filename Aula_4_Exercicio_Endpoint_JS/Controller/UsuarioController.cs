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
    public class UsuarioController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsuarioController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Usuarios>> Get()
        {
            return await _context.Usuarios.ToListAsync();
        }

        [HttpGet("{id}")] // Define que esse método é um GET
        public async Task<ActionResult<Usuarios>> GetById(int id) // Retorna uma lista de usuários
        {
            // await é uma palavra chave que só pode ser usada em métodos que são marcados com async
            var user = await _context.Usuarios.FindAsync(id); // Retorna todos os usuários do banco de dados
            if (user == null) return NotFound();
            return user;
        }

        [HttpPost]
        public async Task<ActionResult<Usuarios>> Post([FromBody] Usuarios usuario)
        {
            _context.Usuarios.Add(usuario);
            await _context.SaveChangesAsync();
            return usuario;
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Usuarios>> Put(int id, [FromBody] Usuarios usuario)
        {
            var existente = await _context.Usuarios.FindAsync(id);
            if (existente == null) return NotFound();

            existente.Password = usuario.Password;
            existente.Nome_usuario = usuario.Nome_usuario;
            existente.Ramal = usuario.Ramal;
            existente.Especialidade = usuario.Especialidade;

            await _context.SaveChangesAsync();
            return existente;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var existente = await _context.Usuarios.FindAsync(id);
            if (existente == null) return NotFound();

            _context.Usuarios.Remove(existente);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}