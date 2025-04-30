let counter = 1; // Variável para contar os itens adicionados

function addItem() { // Função para adicionar um novo item à lista
    const item = document.createElement('li'); // Cria um novo elemento <li>
    const list = document.querySelector('ol'); // Seleciona a lista ordenada <ol>

    item.textContent = `Item ${counter++}`; // Define o texto do novo item com o valor atual de counter e incrementa count
    
    list.appendChild(item); // Adiciona o novo item à lista
}

function removeItem() { // Função para remover o primeiro item da lista
    const list = document.querySelector('ol'); // Seleciona a lista ordenada <ol>
    const item = list.querySelector('li:first-child'); // li:first-child é para selecionar o primeiro filho <li> da lista
    list.removeChild(item); // Remove o primeiro item da lista
}

const buttonAdd = document.querySelector('#new-item'); // Seleciona o botão para adicionar um novo item 
const buttonRemove = document.querySelector('#remove-item'); // Seleciona o botão para remover um item

buttonAdd.addEventListener('click', addItem); // Adiciona um evento de clique ao botão para chamar a função addItem
buttonRemove.addEventListener('click', removeItem);     // Adiciona um evento de clique ao botão para chamar a função removeItem