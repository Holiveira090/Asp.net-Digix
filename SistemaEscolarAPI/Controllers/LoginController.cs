using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SistemaEscolarAPI.DTO;
using SistemaEscolarAPI.Models;
using SistemaEscolarAPI.Services;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;

namespace SistemaEscolarAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        [HttpPost]
        public IActionResult Login([FromBody] LoginDTO loginDTO) // IActionResult é uma interface que representa o resultado de uma ação em controlador no AspNet
        {
            if (string.IsNullOrWhiteSpace(loginDTO.UserName) || string.IsNullOrWhiteSpace(loginDTO.Password)) // IsNullOrWhiteSpace verifica se a string é nula ou contem apenas espaço em branco
            {
                return BadRequest("Usuário e senha obrigatórios!"); // Aqui também retorna 400 com a mensagem incluida
            }

            var users = new List<Usuario>
            {
                new Usuario{UserName = "admin", Password = "123",Role = "Administrador"},
                new Usuario{UserName = "func", Password = "123",Role = "Funcionario"}
            };

            var user = users.FirstOrDefault(u =>
            u.UserName == loginDTO.UserName &&
            u.Password == loginDTO.Password
            );

            if (user == null)
            {
                return Unauthorized(new { message = "Usuario ou senha invalidos" }); // Unauthorized retorna 401 com a mensagem informando que a validação não é correta
            }
                var token = TokenService.GenerateToken(user);
                return Ok(new {token});
        }
    }
}