import { Pessoa } from "./Pessoa";

export class Conta {
    protected titular: Pessoa; // propriedade protegida
    protected saldo: number; // propriedade protegida

    // Construtor que inicializa as propriedades
    constructor(titular: Pessoa, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    // Metodo para deposito
    public depositar(valor: number): void {
        if (valor <= 0) throw new Error("Valor de depósito deve ser positivo.");
        this.saldo += valor;
    }

    // Metodo para saque
    public sacar(valor: number): void {
        if (valor <= 0) throw new Error("Valor de saque deve ser positivo");
        if (valor > this.saldo) throw new Error("Saldo insuficiente.");
        this.saldo -= valor;
    }

    // Metodo de polimorfismo para exibir dados
    public exibirDados(): string {
        return `Titular ${this.titular.getNome()}, Saldo: ${this.saldo}`;
    }
}

// Classe Poupanca que herda de Conta
export class Poupanca extends Conta {
    private taxaRendimento: number;

    // Construtor que inicializa as propriedades
    constructor(titular: Pessoa, saldo: number, taxaRendimento: number) {
        super(titular, saldo);
        this.taxaRendimento = taxaRendimento;
    }

    // Aplica rendimento ao saldo
    public aplicarRendimento(): void {
        this.saldo += this.saldo * (this.taxaRendimento / 100);
    }

    // Polimorfismo de subscrever o método
    public override exibirDados(): string { // override é opcional, mas é uma boa prática
        // chama o método da classe pai
        return `Titular: ${this.titular.getNome()}, Saldo: ${this.saldo}, Rendimento: ${this.taxaRendimento}%`;

    }
}

export class Corrente extends Conta {
    private limiteChequeEspecial: number;

    // Construtor que inicializa as propriedades
    constructor(titular: Pessoa, saldo: number, limiteChequeEspecial: number) {
        super(titular, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    public override depositar(valor: number): void {
        if (valor <= 0) throw new Error("Valor de depósito deve ser positivo.");
        this.saldo += valor;
    }

    public override sacar(valor: number): void {
        if (valor <= 0) throw new Error("Valor de saque deve ser positivo");
        if (valor > this.saldo) throw new Error("Saldo insuficiente.");
        this.saldo -= valor;
    }

    public override exibirDados(): string {
        return `Titular ${this.titular.getNome()}, Saldo: ${this.saldo}, limite de cheque: ${this.limiteChequeEspecial}`;
    }

    public setLimiteCheque(valor: number): void {
        if (valor <= 0) throw new Error("Valor de depósito deve ser positivo.");
        this.limiteChequeEspecial = valor;
    }
}