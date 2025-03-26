using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Aula_4_Exercicio_Endpoint_JS.Models
{
    [Table("software")]
    public class Software
    {
        [Key]
        [Column("id_software")]
        public int Id_software { get; set; }

        [Column("produto")]
        public string Produto { get; set; } = string.Empty;

        [Column("harddisk")]
        public int Harddisk { get; set; }

        [Column("memoria_ram")]
        public int Memoria_ram { get; set; }

        [ForeignKey("maquina")]
        [Column("fk_maquina")]
        public int Fk_maquina { get; set; }
    }
}