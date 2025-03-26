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
    public class SoftwareController : ControllerBase
    {
        private readonly AppDbContext _context;
        public SoftwareController(AppDbContext context) // Construtor que recebe o AppDbContext que é a classe que representa o banco de dados
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Software>> Get()
        {
            return await _context.Software.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Software>> Post([FromBody] Software software)
        {
            _context.Software.Add(software);
            await _context.SaveChangesAsync();
            return software;
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Software>> Put(int id, [FromBody] Software software)
        {
            var existente = await _context.Software.FindAsync(id);

            if (existente == null) return NotFound();
            existente.Produto = software.Produto;
            existente.Harddisk = software.Harddisk;
            existente.Memoria_ram = software.Memoria_ram;
            existente.Fk_maquina = software.Fk_maquina;

            await _context.SaveChangesAsync();
            return existente;
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var existente = await _context.Software.FindAsync(id);

            if (existente == null) return NotFound();
            _context.Software.Remove(existente);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}