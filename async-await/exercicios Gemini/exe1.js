// Exercício 1: Nível Básico
// Crie uma função async chamada obterNomeDeUsuario que simula uma chamada de API.

// Use setTimeout para simular uma demora de 1 segundo.

// A função deve retornar o nome "Gisele".

// Chame a função obterNomeDeUsuario e imprima o nome retornado no console.

// Dica: Use await dentro de uma função async para esperar o resultado da "API".

function simularChamadaAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Gisele');
        }, 1000);
    });
}

async function obterNomeDeUsuario() {
    const nomeUsuario = await simularChamadaAPI();
    console.log(nomeUsuario);
}

obterNomeDeUsuario();

