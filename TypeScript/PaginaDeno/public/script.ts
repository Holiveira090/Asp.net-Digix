function saudar(): void {
    const input = document.getElementById("nome");
  
    if (input && input instanceof HTMLInputElement) {
      const nome = input.value.trim();
      if (nome === "") {
        alert("Por favor, digite seu nome.");
      } else {
        alert(`Olá, ${nome}, bem-vindo à página com Deno!`);
      }
    } else {
      alert("Campo de nome não encontrado.");
    }
  }
  