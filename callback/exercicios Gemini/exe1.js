// Exercício 1: Nível Básico
// Crie uma função chamada saudar que recebe um nome e uma função de callback como argumentos. A função saudar deve chamar a função de callback, passando uma mensagem de saudação formatada.
// function saudar(nome, callback) {
//     callback(nome);
// }

// function mensagemSaudar(nome) {
//     console.log(`Olá, ${nome}! Bem-vindo(a)!`);
// }

// saudar('João', mensagemSaudar);


// Resposta
function saudar(nome, callback) {
  const mensagem = `Olá, ${nome}! Bem-vindo(a)!`;
  callback(mensagem);
}

// Uso da função com um callback anônimo
saudar('Maria', (mensagem) => {
  console.log(mensagem);
});

