function saudarTratado() {
    // Tentar oberter o elemento com id "saudacao"
    var input = document.getElementById("nome");
    // Verificar se o elemento exeite e é um input
    if (input && input instanceof HTMLInputElement) {
        // Obter o valor do input
        var nome = input.value.trim(); // Remover espaços em branco no início e no fim
        // Verificar se o elemento existe
        if (nome === "") {
            // Definir o conteúdo do elemento
            alert("Por favor, digite seu nome.");
        }
        else {
            alert(`Olá ${nome}, tudo bem?`);
        }
    } else {
        alert("Elemento não encontrado o id 'nome'");
    }
}