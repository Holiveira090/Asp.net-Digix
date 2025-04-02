// Criar um objeto em JavaScript é muito simples, basta criar uma variavel e atribuir a ela um objeto com chaves e valores. Veja o exemplo:
let carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2010,
    paisdeOrigem: { // Objeto dentro de objeto
        pais: "Brasil",
        cidade: "São Paulo"
    },
    // Contruindo uma função
    ligar: function(){
        console.log("Ligando o carro");
    }
}

console.log(carro);
carro.ligar();

// Modificar os valores dentro do objeto
carro.marca = "Ford";
carro.modelo = "Ka";
console.log(carro);

// Deletando propriedades do objeto
delete carro.ano;
console.log(carro);

// Alguns operadores do objeto
console.log('marca' in carro);