const API = "http://localhost:5000/Maquina";

document.getElementById("maquinaform").addEventListener("submit", salvarMaquina);
carregarMaquina();

function carregarMaquina() {
    fetch(API)
        .then(res => res.json()) // res.json() é uma função que converte o conteúdo da resposta para JSON
        .then(data => {
            const tbody = document.querySelector("#tabelaMaquinas tbody");
            tbody.innerHTML = ""; // innerHTML é uma propriedade que define ou retorna o conteúdo HTML de um elemento
            data.forEach(maquina => {
                tbody.innerHTML += `
                    <tr>
                        <td>${maquina.id_maquina}</td>
                        <td>${maquina.tipo}</td>
                        <td>${maquina.velocidade}</td>
                        <td>${maquina.harddisk}</td>
                        <td>${maquina.placa_rede}</td>
                        <td>${maquina.memoria_ram}</td>
                        <td>${maquina.fk_usuario}</td>
                        <td>
                            <button class="edit" onclick="editarMaquina(${maquina.id_maquina})">Editar</button>
                            <button class="delete" onclick='deletarMaquina(${maquina.id_maquina})'>Deletar</button>
                        </td>
                    </tr>
                `;
            }
            )
        })
}

function salvarMaquina(e) {
    e.preventDefault();

    const id = document.getElementById("id").value;

    const maquina = {
        tipo: document.getElementById("tipo").value,
        velocidade: parseInt(document.getElementById("velocidade").value),
        harddisk: parseInt(document.getElementById("harddisk").value),
        placa_rede: parseInt(document.getElementById("placa_rede").value),
        memoria_ram: parseInt(document.getElementById("memoria_ram").value),
        fk_usuario: parseInt(document.getElementById("fk_usuario").value)
    };

    const method = id ? "PUT" : "POST";
    const url = id ? `${API}/${id}` : API;

    fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(maquina)
    })
        .then(res => res.json())
        .then(data => {
            console.log("Salvo:", data);
            document.getElementById("maquinaform").reset();
            carregarMaquina();
        })
        .catch(error => console.error("Erro ao salvar:", error));
}

function editarMaquina(id) {
    fetch(`${API}/${id}`)
        .then(res => res.json()) 
        .then(maquina => {
            document.getElementById("id").value = maquina.id_maquina;
            document.getElementById("tipo").value = maquina.tipo ? parseInt(maquina.tipo) : 0;
            document.getElementById("harddisk").value = maquina.harddisk ? parseInt(maquina.harddisk) : 0;
            document.getElementById("placa_rede").value = maquina.placa_rede ? parseInt(maquina.placa_rede) : 0;
            document.getElementById("memoria_ram").value = maquina.memoria_ram ? parseInt(maquina.memoria_ram) : 0;
            document.getElementById("fk_usuario").value = maquina.fk_usuario ? parseInt(maquina.fk_usuario) : 0;
        });
}