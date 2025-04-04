import { Pessoa } from "./Pessoa";
import { Corrente, Poupanca } from "./Conta";

function main(){
    try {
        // Criando uma nova pessoa
        const cliente1 = new Pessoa("Jão", 30);
        const cliente2 = new Pessoa("Maria", 25);;

        // Criando uma conta corrente
        const contaCorrente = new Corrente(cliente1, 1000, 500)
        const contaPoupanca = new Poupanca(cliente2, 1000, 500)

        // Operações financieras
        contaCorrente.depositar(500);
        contaCorrente.sacar(1500);
        console.log(contaCorrente.exibirDados());
        

        contaPoupanca.aplicarRendimento();
        contaPoupanca.sacar(300);
        console.log(contaPoupanca.exibirDados());
        
    } catch (error: any) {
        console.error("Error", error.message);
    }
}

main(); // chama a função principal para executar o código