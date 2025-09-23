// Exercício 3: Nível Avançado (Simulando uma operação assíncrona)
// Imagine que você precisa buscar dados em um servidor. Crie uma função chamada buscarDadosDoUsuario que simula essa operação assíncrona usando setTimeout.

// A função deve receber um ID de usuário e uma função de callback.

// Simulação:

// Se o ID for 123, a função deve, após 2 segundos, chamar o callback com um objeto de dados { nome: 'Ana', idade: 30 }.

// Se o ID for diferente, a função deve, após 2 segundos, chamar o callback com um objeto de erro { erro: 'Usuário não encontrado' }.

function buscarDadosDoUsuario(id, callback) {

    setTimeout(() => {

        if (id === 123) {
            const dados = { nome: 'Ana', idade: 30}
            return callback(null, dados);
        } else {
            const erro = { erro: 'Usuário não encontrado' }
            return callback(erro, null)
        }

    }, 2000)

}


buscarDadosDoUsuario(123, (erro, dados) => {
  if (erro) {
    console.log(erro.erro);
  } else {
    console.log(`Nome: ${dados.nome}, Idade: ${dados.idade}`);
  }
}); // Saída esperada após 2 segundos: "Nome: Ana, Idade: 30"

