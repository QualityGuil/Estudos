// Exercício 1: Nível Básico

// Crie uma função chamada `minhaPrimeiraPromise` que retorna uma nova Promise. Esta Promise deve ser resolvida (resolvida) com a string "Promessa cumprida!" após 1 segundo.

function minhaPrimeiraPromise() {
    return new Promise((resolve, reject) => { // resolve é retornado para função que retorna pro then
        setTimeout(() => {
            resolve('Promessa cumprida!');
        }, 1000);
    });
}

minhaPrimeiraPromise()
    .then(mensagem => {
        console.log(mensagem);
    });
// Saída esperada após 1 segundo: "Promessa cumprida!"D