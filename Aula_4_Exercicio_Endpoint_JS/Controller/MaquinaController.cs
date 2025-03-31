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
    public class MaquinaController : ControllerBase
    {
        private readonly AppDbContext _context;
        public MaquinaController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Maquina>> Get()
        {
            return await _context.Maquina.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Maquina>> GetById(int id)
        {
            var maquina = await _context.Maquina.FindAsync(id);
            if (maquina == null) return NotFound();
            return maquina;
        }


        [HttpPost]
        public async Task<ActionResult<Maquina>> Post([FromBody] Maquina maquina)
        {
            _context.Maquina.Add(maquina);
            await _context.SaveChangesAsync();
            return maquina;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Maquina maquina)
        {
            var existente = await _context.Maquina.FindAsync(id);
            if (existente == null) return NotFound();

            existente.Tipo = maquina.Tipo;
            existente.Velocidade = maquina.Velocidade;
            existente.Harddisk = maquina.Harddisk;
            existente.Placa_rede = maquina.Placa_rede;
            existente.Memoria_ram = maquina.Memoria_ram;
            existente.Fk_usuario = maquina.Fk_usuario;

            await _context.SaveChangesAsync();
            return NoContent(); // Não retorna JSON, evita erro
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var existente = await _context.Maquina.FindAsync(id);

            if (existente == null) return NotFound();
            _context.Maquina.Remove(existente);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}