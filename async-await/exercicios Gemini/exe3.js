// Exercício 3: Nível Avançado (Chamadas em Paralelo)
// Crie duas funções async:

// buscarDadosA(): Retorna a string "Dados A" após 2 segundos.

// buscarDadosB(): Retorna a string "Dados B" após 1 segundo.

// Crie uma terceira função async chamada executarChamadasParalelas que deve:

// Executar buscarDadosA e buscarDadosB simultaneamente (em paralelo).

// Armazenar os resultados em variáveis separadas usando await.

// Imprimir ambos os resultados no console.

// Dica: Use Promise.all() para aguardar a resolução de múltiplas Promises em paralelo, garantindo que a execução não espere uma terminar para iniciar a outra.

function buscarDadosA() {
    return new Promise((resolve) => {
        resolve('Dados A');
    }, 2000);
}

function buscarDadosB() {
    return new Promise((resolve) => {
        resolve('Dados B');
    }, 1000);
}

async function executarChamadasParalelas() {
    const [dadosA, dadosB] = await Promise.all([buscarDadosA(),buscarDadosB()]);

    console.log(`
        Resultado de A: ${dadosA}
        Resultado de B: ${dadosB}
        Ambas as buscas concluídas!
        `);
}

executarChamadasParalelas();

