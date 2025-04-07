function saudarTratadoa(): void {
    // Tentar oberter o elemento com id "saudacao"
    const input = document.getElementById("nome");

    // Verificar se o elemento exeite e é um input
    if (input && input instanceof HTMLInputElement) {
        // Obter o valor do input
        const nome = input.value.trim(); // Remover espaços em branco no início e no fim

        // Verificar se o elemento existe
        if (nome === "") {
            // Definir o conteúdo do elemento
            alert("Por favor, digite seu nome.");
        } else {
            console.error("Elemento com id 'saudacao' não encontrado.");
        }

    }
}