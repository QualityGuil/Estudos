// Exercício 2: Nível Intermediário
// Crie uma função chamada executarOperacao que recebe dois números e uma função de callback como argumentos. A função executarOperacao deve aplicar a operação definida pelo callback nos dois números e retornar o resultado.

// Callbacks: Crie duas funções de callback separadas:

// somar: para somar os dois números.

// multiplicar: para multiplicar os dois números.

function executarOperacao(x, y, callback) {
    return callback(x, y);
}

function somar(x, y) {
    return x + y
}

function multiplicar(x, y) {
    return x * y
}

const resultadoSoma = executarOperacao(5, 3, somar);
console.log(resultadoSoma); // Saída esperada: 8

const resultadoMultiplicacao = executarOperacao(5, 3, multiplicar);
console.log(resultadoMultiplicacao); // Saída esperada: 15

