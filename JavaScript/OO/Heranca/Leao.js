// import Animal from '/.Animal.js';
import { Animal } from './Animal.js';

export class Leao extends Animal {
    static bravo = true; // static é um atributo de classe que não pode ser alterado na classe filha
    constructor(nome, peso, idade, cor) {
        super(nome, peso, idade); // chama o construtor da classe pai
        this.cor = cor;
    }

    // sobrescrever o método procriar da classe pai
    procriar() {
        console.log("Leão acasalou");
    }
}