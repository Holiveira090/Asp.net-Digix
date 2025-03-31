// Array

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ou um array instanciado
const array2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Assinando valores a um array
console.log(array[6]); // 7

// Alterando o valor
console.log(array[0]); // 1
array[0] = 10;

// Operando o array com funções
array.push(11) // adiciona um elemento no final do array
array.pop(); // remove o último elemento do array
array.shift(); // remove o primeiro elemento do array
array.unshift(0); // adiciona um elemento no inicio do array
array.splice(2, 0, 3) // adiciona um elemento na posição 2 do array