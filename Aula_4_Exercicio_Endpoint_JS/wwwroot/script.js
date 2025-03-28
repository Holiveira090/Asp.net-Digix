// Vou criar uma variavel que vai receber o endereço da aplicação ASP.Net
const API = "http://localhost:5000/Usuario";

// A gente vai atribuir os valores dos campos do formulário para um objeto
// document é um objeto que representa a página HTML
// getElementById é um método que retorna um elemento HTML com base no ID
document.getElementById("usuarioform").addEventListener("submit", salvarUsuario);
carregarUsuarios(); // Carregar os usuários que é uma função que vamos criar

function carregarUsuarios() {
    // fetch é uma função que faz uma requisição HTTP
    fetch(API)
        .then(res => res.json()) // res.json() é uma função que converte o conteúdo da resposta para JSON
        .then(data => {
            const tbody = document.querySelector("#tabelaUsuarios tbody");
            tbody.innerHTML = ""; // innerHTML é uma propriedade que define ou retorna o conteúdo HTML em um elemento
            data.array.forEach(usuario => {
                tbody.innerHTML += `
                <tr>
                    <td>${usuario.id}</td>
                    <td>${usuario.nome}</td>
                    <td>${usuario.ramal}</td>
                    <td>${usuario.especialidade}</td>
                    <td>
                        <button class"edit" onclick="editarUsuario(${usuario.id})"></button>
                        <button class="delete" onclick='deletarUsuario(${usuario.id})'>Deletar</button>
                    </td>
                <tr>
                `;
            });
        })
}

function salvarUsuario(event) {
    event.preventDefault(); // previne o comportamento padrão do formulário (que é enviar os dados e recarregar a pagina)
    const id = document.getElementById("id").value;
    const usuario = {
        id: parseInt(id || 0),
        nome: document.getElementById("nome").value,
        password: document.getElementById("password").value,
        ramal: document.getElementById("ramal").value,
        especialidade: document.getElementById("especialidade").value
    }

    // Aqui ele vai tratar das operações de criar e atualizar o usuário
    const metodo = id ? "PUT" : "POST"; // se id existir, o método PUT (atualizar), senão é POST (criar)
    // agora tratar a url para essas operações
    const url = id ? `${API}/${id}` : API; // se id existir, a url é a API + id, senão é só a API
    // Exemplo: http://localhost:5000/Usuario/1 ou senão a gente Post com esse caminho http://localhost:5000/Usuario

    // Vamos a função fetch para fazer a requisição HTTP
    fetch(url, {
        method: metodo, // operação que vai ser feita (POST ou PUT)
        headers: { // cabeçalho da requisição, que é um objeto que contém informações sobre a requisição
            "Content-Type": "application/json" // tipo de conteúdo que estamos enviando (JSON)
        },
        body: JSON.stringify(usuario) // corpo da requisição, que é o objeto convertido para JSON
    })
        .then(res => res.json()) // converte a resposta para JSON
        .then(() => {
            document.getElementById("usuarioform").reset(); // reseta o formulário
            carregarUsuarios(); // chama a função para carregar a lista de usuários
        });
}

function editarUsuario(id) {
    fetch(`${API}/${id}`)
        .then(res => res.json()) // converte a resposta para JSON
        .then(usuario => {
            document.getElementById("id").value = usuario.id;
            document.getElementById("nome").value = usuario.nome;
            document.getElementById("password").value = usuario.password;
            document.getElementById("ramal").value = usuario.ramal;
            document.getElementById("especialidade").value = usuario.especialidade;
        })
}
function deletarUsuario(id) {
    fetch(`${API}/${id}`, { method: "DELETE" })
        .then(res => res.json())
        .then(() => carregarUsuarios());
}