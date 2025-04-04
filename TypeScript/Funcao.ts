// Criar função type
type Funcao = (a: number, b: number) => number;

function soma(a: number, b: number): number {
    return a + b;
}

// Arrow function é uma função anônima atribuida a uma variável
// Arrow function
const somaArrow: Funcao = (a, b) => a + b;

// Funça anônima
const somaAnonima: Funcao = function (a, b) {
    return a + b;
}

// Função com retorno implícito
const somaRetornoImplicito: Funcao = (a, b) => a + b;
// Função com parâmetros opcionais
function somaComParametrosOpcionais(a: number, b?: number): number {
    if (b) {
        return a + b;
    }
    return a;
}

// Vamos executar esse arquivo usando a ferramenta deno, que é uma ferramenta de execução de código TypeScript
// Instalar o deno: irm https://deno.land/install.ps1 | iex
// Executar: deno run Funcao.ts
// Executar com permissões: deno run --allow-read Funcao.ts