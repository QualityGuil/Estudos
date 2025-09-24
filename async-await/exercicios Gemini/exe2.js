// Exercício 2: Nível Intermediário

// Crie uma função `async` chamada `verificarSaldo` que recebe um saldo e um valor de compra.

// A função deve simular a verificação do saldo com um `setTimeout` de 1 segundo.
// Use `try...catch` para tratar possíveis erros.
// Se o saldo for suficiente, a função deve retornar uma mensagem de sucesso.
// Se o saldo for insuficiente, a função deve lançar (throw) um erro com a mensagem "Saldo insuficiente!".

function verificarSaldoAssincrono(saldoDisponivel, valorCompra) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (saldoDisponivel >= valorCompra) {
                resolve('Compra aprovada!');
            } else {
                reject('Erro: Saldo insuficiente!');
            }
        }, 1000);
    });
}

async function verificarSaldo(saldoDisponivel, valorCompra) {
    try {
        const message = await verificarSaldoAssincrono(saldoDisponivel, valorCompra);
        console.log(message);
    } catch(erro) {
        console.log(erro);
    }
}

verificarSaldo(50, 30);
// Saída esperada após 1 segundo: "Compra aprovada!"
verificarSaldo(20, 30);
// Saída esperada após 1 segundo: "Erro: Saldo insuficiente!"

