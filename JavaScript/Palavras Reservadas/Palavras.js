let pessoa = {
    nome: "Lucas"
}

let pessoa2 = {

}

// palavras reservadas no Js
console.log(Object.getOwnPropertyDescriptor(pessoa)); // mostra os atributos e métodos do objeto

// Assign, ele faz uma cópia do objeto
Object.assign(pessoa2, pessoa) // copia o objeto pessoa para pessoa2

// Agora desestruturar um objeto, criando as variáveis
let config = {
    ip: '127.0.0.1',
    port: 80,
    block: true
}
let { ip, port, block } = config; // desestrutura o objeto
console.log(ip, port, block);

// Desestruturar um array
let lista = ['Lucas', 'Maria', 'João'];
let [nome1, nome2, nome3] = lista; // desestrutura o array

console.log(nome1, nome2, nome3); // imprime os valores das variáveis

// Desestrutura um array com o rest operator
let lista2 = ['Lucas', 'Maria', 'João', 'José'];
let [nome4, ...resto] = lista2

console.log(nome4) // imprime o nome

console.log(resto); // imprime o array