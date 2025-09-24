// Exercício 2: Nível Intermediário
// Crie uma função chamada verificarNumeroPar que recebe um número como argumento e retorna uma Promise.

// Se o número for par, a Promise deve ser resolved (resolvida) com a mensagem "O número [número] é par.".

// Se o número for ímpar, a Promise deve ser rejected (rejeitada) com a mensagem "Erro: O número [número] é ímpar.".

function verificarNumeroPar(num) {
    return new Promise((resolve, reject) => {

        if (num % 2 === 0) {
            resolve(`O número ${num} é par!`);
        } else {
            reject(`O número ${num} é ímpar!`);
        }

    })
}

verificarNumeroPar(4)
    .then(mensagem => console.log(mensagem))
    .catch(erro => console.error(erro));
// Saída esperada: "O número 4 é par."
verificarNumeroPar(7)
    .then(mensagem => console.log(mensagem))
    .catch(erro => console.error(erro));
// Saída esperada: "Erro: O número 7 é ímpar."