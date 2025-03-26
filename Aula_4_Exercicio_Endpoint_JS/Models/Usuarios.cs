using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Aula_4_Exercicio_Endpoint_JS.Models
{
    [Table("usuarios")]
    public class Usuarios
    {
        [Key]
        [Column("id_usuario")]
        public int Id_usuario { get; set; }

        [Column("password")]
        public string Password { get; set; } = string.Empty;

        [Column("nome_usuario")]
        public string Nome_usuario { get; set; } = string.Empty;

        [Column("ramal")]
        public int Ramal { get; set; }

        [Column("especialidade")]
        public string Especialidade { get; set; } = string.Empty;
    }
}