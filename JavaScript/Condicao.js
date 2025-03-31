// Todos os tipo de condição
// condição simples
let idade = 18;
if (idade >= 18) {
    console.log("Maior de idade")
}

// Condição composta
if (idade >= 18) {
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}

// Condição composta com else if
if (idade >= 18) {
    console.log("Maior de idade")
} else if (idade >= 12) {
    console.log("Adolescente")
} else {
    console.log("Criança")
}

// Condição Ternario
let podeVotar = (idade >= 18) ? "Pode votar" : "Não pode votar";
console.log(podeVotar);

// Ternario com mais de 2 condições
let podeVotar2 = (idade >= 18) ? "Pode votar" : (idade >= 12) ? "Adolescente" : "Criança";
console.log(podeVotar2);

// Ternario com operadores lógicos
let podeVotar3 = (idade >= 18 && idade <= 70) ? "Pode votar" : "Não pode votar";
console.log(podeVotar3);

// Ternario com ||
let podeVotar4 = (idade >= 18 || idade <= 70) ? "Pode votar" : "Não pode votar";
console.log(podeVotar4);

// Ternario com !=
let podeVotar5 = (idade >= 18 != idade <= 70) ? "Pode votar" : "Não pode votar";
console.log(podeVotar5);

let dia = 5;
switch (dia) {
    case 1:
        console.log("domingo");
        break;
    case 2:
        console.log("segunda");
        break;
    case 3:
        console.log("terça");
        break;
    case 4:
        console.log("quarta");
        break;
    case 5:
        console.log("quinta");
        break;
    case 6:
        console.log("sexta");
        break;
    case 7:
        console.log("sabado");
        break;
    default:
        console.log("Dia invalido");
        break;
}
