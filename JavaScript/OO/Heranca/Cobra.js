// import Animal from '/.Animal.js';
import { Animal } from './Animal.js';

export class Cobra extends Animal {
    static venenosa = true; // static é um atributo de classe que não pode ser alterado na classe filha
    constructor(nome, raca, peso, idade, cor) {
        super(nome, raca, peso, idade); // chama o construtor da classe pai
        this.cor = cor;
    }

    // sobrescrever o método procriar da classe pai
    procriar()
    {
        console.log("Cobro botou ovos")
    }
}