function saudar() {
    var input = document.getElementById("nome");
    if (input && input instanceof HTMLInputElement) {
        var nome = input.value.trim();
        if (nome === "") {
            alert("Por favor, digite seu nome.");
        }
        else {
            alert("Ol\u00E1, ".concat(nome, ", bem-vindo \u00E0 p\u00E1gina com Deno!"));
        }
    }
    else {
        alert("Campo de nome não encontrado.");
    }
}