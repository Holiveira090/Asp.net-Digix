export class Pessoa {
    // Encapsulamento
    private nome: string; // propriedade privada
    private idade: number; // propriedade privada

    // Construtor que inicializa as propriedades
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    // Getters e Setters para ter o acesso às propriesdades privadas
    public getNome(): string {
        return this.nome;
    }
    public setNome(nome: string): void {
        if (nome.length < 3) {
            throw new Error("Nome deve ter mais de 3 caracteres.");
        }
        this.nome = nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public setIdade(idade: number): void {
        if (idade < 0) {
            throw new Error("Idade não pode ser negativa");
        }
        this.idade = idade;
    }

    // Método para exibir informações da pessoa
    public exibirDados(): string {
        return `Nome ${this.nome}, idade: ${this.idade}`
    }

}