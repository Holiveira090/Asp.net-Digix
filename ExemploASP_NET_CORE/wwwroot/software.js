const API = "http://localhost:5000/Software";

document.getElementById("softwareform").addEventListener("submit", salvarSoftware);
carregarSoftware();

function carregarSoftware() {
    fetch(API)
        .then(res => res.json()) // res.json() é uma função que converte o conteúdo da resposta para JSON
        .then(data => {
            const tbody = document.querySelector("#tabelaSoftware tbody");
            tbody.innerHTML = ""; // innerHTML é uma propriedade que define ou retorna o conteúdo HTML de um elemento
            data.forEach(software => {
                tbody.innerHTML += `
                    <tr>
                        <td>${software.id_software}</td>
                        <td>${software.produto}</td>
                        <td>${software.harddisk}</td>
                        <td>${software.memoria_ram}</td>
                        <td>${software.fk_maquina}</td>
                        <td>
                            <button class="edit" onclick="editarSoftware(${software.id_software})">Editar</button>
                            <button class="delete" onclick='deletarSoftware(${software.id_software})'>Deletar</button>
                        </td>
                    </tr>
                `;
            }
            )
        })
}

function salvarSoftware(e) {
    e.preventDefault();

    const id = document.getElementById("id").value;
    const software = {
        produto: document.getElementById("produto").value,
        harddisk: document.getElementById("harddisk").value,
        memoria_ram: document.getElementById("memoria_ram").value,
        fk_maquina: document.getElementById("fk_maquina").value,
    };

    const method = id ? "PUT" : "POST";
    const url = id ? `${API}/${id}` : API;

    fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(software)
    })
        .then(res => {
            if (!res.ok) throw new Error("Erro ao salvar");
            return res.status === 204 ? null : res.json(); // Evita erro com `204 No Content`
        })
        .then(data => {
            console.log("Salvo:", data);
            document.getElementById("softwareform").reset();
            document.getElementById("id").value = ""; // Reseta o campo ID
            carregarSoftware();
        })
        .catch(error => console.error("Erro ao salvar:", error));
}

function editarSoftware(id) {
    fetch(`${API}/${id}`)
        .then(res => res.json())
        .then(software => {
            document.getElementById("id").value = id; // ESSENCIAL para o PUT funcionar
            document.getElementById("produto").value = software.produto || "";
            document.getElementById("harddisk").value = software.harddisk || 0;
            document.getElementById("memoria_ram").value = software.memoria_ram || 0;
            document.getElementById("fk_maquina").value = software.fk_maquina || 0;
        })
        .catch(error => console.error("Erro ao carregar software:", error));
}


function deletarSoftware(id) {
    if (confirm("Deseja realmente excluir este software?")) {
        fetch(`${API}/${id}`, { method: "DELETE" })
            .then(res => {
                if (!res.ok) throw new Error("Erro ao deletar");
                return res.status === 204 ? null : res.json(); // Evita erro ao tentar ler resposta vazia
            })
            .then(() => carregarSoftware()) // Atualiza a lista após deletar
            .catch(error => console.error("Erro:", error));
    }
}