// Array para armazenar os elementos cadastrados
let meuArray = [];

// Adiciona um evento de escuta ao formulário para capturar o envio
document.getElementById("elementoform").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que a página recarregue ao enviar o formulário

    let elemento = document.getElementById("elemento").value; // Obtém o valor do input

    if (elemento.trim() === "") return; // Se o campo estiver vazio, não faz nada

    meuArray.push(elemento); // Adiciona o elemento ao array
    atualizarTabela(); // Atualiza a exibição da tabela

    document.getElementById("elemento").value = ""; // Limpa o campo após adicionar
});

// Atualiza a tabela com os elementos do array
function atualizarTabela() {
    let tbody = document.querySelector("#tabelaSoftware tbody");
    tbody.innerHTML = ""; // Limpa a tabela antes de adicionar os novos elementos

    // Percorre todos os elementos do array e os adiciona na tabela
    meuArray.forEach((item, index) => {
        let row = tbody.insertRow(); // Cria uma nova linha na tabela

        let cellElemento = row.insertCell(0); // Cria a célula da coluna "Elemento"
        cellElemento.textContent = item; // Define o texto da célula como o elemento do array

        let cellAcoes = row.insertCell(1); // Cria a célula da coluna "Ação"

        // Botão Editar
        let btnEditar = document.createElement("button"); // Cria um botão "Editar"
        btnEditar.textContent = "Editar"; // Define o texto do botão
        btnEditar.onclick = function () { // Define a ação do botão ao ser clicado
            editarElemento(index);
        };
        cellAcoes.appendChild(btnEditar); // Adiciona o botão à célula de ações

        // Botão Deletar
        let btnDeletar = document.createElement("button"); // Cria um botão "Deletar"
        btnDeletar.textContent = "Deletar"; // Define o texto do botão
        btnDeletar.onclick = function () { // Define a ação do botão ao ser clicado
            deletarElemento(index);
        };
        cellAcoes.appendChild(btnDeletar); // Adiciona o botão à célula de ações
    });
}

// Função para editar um elemento
function editarElemento(index) {
    document.getElementById("elemento").value = meuArray[index]; // Preenche o input com o valor do item selecionado
    meuArray.splice(index, 1); // Remove o item do array para que possa ser atualizado
    atualizarTabela(); // Atualiza a tabela para refletir a mudança
}

// Função para deletar um elemento
function deletarElemento(index) {
    meuArray.splice(index, 1); // Remove o item do array pelo índice
    atualizarTabela(); // Atualiza a tabela para remover o item da exibição
}
