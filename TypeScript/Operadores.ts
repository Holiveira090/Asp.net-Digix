// Instalando o TypeScript
// npm install -g typescript
// tsc --version
// Comando para atualizar o TypeScript
// npm update -g typescript

// Operadores em TypeScript
// Operadores Aritméticos
let a: number = 10; // São os tipos primitivos do TypeScript é igual ao do JavaScript
let b: number = 5;
let totalSoma: number = a + b; // soma
let totalSubtracao: number = a - b; // subtração
let totalMultiplicacao: number = a * b; // multiplicação
let totalDivisao: number = a / b; // divisão
let totalResto: number = a % b; // Resto

console.log(`Soma: ${totalSoma}, subtração ${totalSubtracao}, multiplicação ${totalMultiplicacao}, divisão ${totalDivisao}, resto ${totalResto}`);

// para rodar: tsc {nome do arquivo}, depois rodas o .Js

// Operadores de texto
let nome: string = "Lucas";
let Sobrenome: string = "Silva";
let textoConcatenado: string = nome + Sobrenome; // Concatenação de strings
console.log(`Nome completo ${textoConcatenado}`);
let textoRepetido: string = nome.repeat(3); // vai repetir 3 vezes
console.log(`nome repetido ${textoRepetido}`);

// Operadores de comparação
let comparação1: boolean = a == b; // comparação de igualdade
let comparação2: boolean = a != b; // comparação de desigualdade
let comparação3: boolean = a === b; // comparação de igualdade estrita
let comparação4: boolean = a !== b; // comparação de desigualdade estrita
console.log(`comparação 1: ${comparação1}, comparação 2: ${comparação2}, comparação 3: ${comparação3}, comparação 4: ${comparação4}`);

// Operadores de comparação com logicos
let comparacao5: boolean = a > 0 && b > 0; // comparação de maior que
let comparacao6: boolean = a < 0 || b < 0; // comparação de menor que
let comparacao7: boolean = !(a > 0); // comparação de negação
console.log(`Comparação 5: ${comparacao5} + Comparação 6: ${comparacao6} + Comparação 7: ${comparacao7}`);

// Operadores ternarios
let resultado: string = (a > b) ? "A é maior que B" : "B é maior que A"; // operador ternario
console.log(`Resultado: ${resultado}`);

// Operador de atribuição
let valor: number = 10; // atribuição simples
valor += 5; // atribuição de soma
valor -= 5; // atribuição de subtração
valor *= 5; // atribuição de multiplicação
valor /= 5; // atribuição de divisão
valor %= 5; // atribuição de resto da divisão
console.log(`Valor: ${valor}`);


// Operador de incremento e decremento
let contador: number = 0; // contador
contador++; // contador de incremento
contador--; // contador de decremento
console.log(`Contador: ${contador}`);

// Operador de Nullish coalescing
let valorNulo: number | null = null; // valor nulo
let valorDefault: number = valorNulo ?? 10; // Operador de nullish coalescing
console.log(`Valor nulo: ${valorNulo} + valor default: ${valorDefault}`);

// Operador de spread
let numeros: number[] = [1, 2, 3, 4, 5]; // array de numeros
let novosNumeros: number[] = [...numeros, 6, 7, 8]; // operador de spread
console.log(`Numeros: ${numeros} + novos numeros ${novosNumeros}`);

// Operador de destructuring
let pessoa: { nome: string, idade: number } = { nome: "Lucas", idade: 25 }; // objeto pessoa
let { nome: nomePessoa, idade: idadePessoa } = pessoa // Operador de destructuring
console.log(`Nome: ${nomePessoa}, idade: ${idadePessoa}`);

//vamos criar um objeto e como ele pode ser chamado
let objeto: { nome: string; idade: number | string | boolean } = { nome: "Lucas", idade: 25 }; // objeto pessoa
let resultados: { [key: string]: number } = {
    soma: totalSoma,
    subtracao: totalSubtracao,
    multiplicacao: totalMultiplicacao,
    divisao: totalDivisao,
    resto: totalResto
}
let resultado2: { [key: string]: any } = { // any é um tipo que pode ser qualquer coisa
    nome: "Lucas",
    idade: 25,
    ativo: true,
    endereco: {
        rua: "Rua 1",
        numero: 123,
    },
}

// Agora eu posso chamar o objeto por essa seguinte forma
console.log(resultados["soma"]); // 15







// Comando para poder executar o codigo em TypeScript direto sem precisar criar o arquivo .Js, é usando o ts-node
// npm install -g ts-node
// npx tsc --init
// ts-node Operadores.ts

// Diferença de tsc e ts-node
// tsc - compila o arquivo TypeScript para JavaScript
// ts-node - executa o arquivo diretemente, sem precisar compilar para JavaScript