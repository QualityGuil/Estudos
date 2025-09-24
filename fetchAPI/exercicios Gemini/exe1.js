// Exercício 1: Nível Básico (Buscar Dados Simples)
// Crie uma função async chamada buscarCep que recebe um CEP como argumento.

// Use a API pública https://viacep.com.br/ws/[cep]/json/ para buscar os dados do CEP.

// Se a requisição for bem-sucedida, imprima o nome da rua (logradouro) no console.

// Se houver um erro de requisição (como um CEP inválido ou falha de rede), imprima uma mensagem de erro.

// function requisicaoCEP(cep) {
//     return fetch(`https://viacep.com.br/ws/${cep}/json/`)
//         .then((data) => data.json())
//         .then((data) => {

//             if (data == undefined) {
//                 throw new Error('CEP inválido!', cep);
//             }

//             return data;
//         })
//         .catch((err) => console.log('Ocorreu um erro: ', err));
// }

// async function buscarCep(cep) {
//     const dataCep = await requisicaoCEP(cep);
//     console.log(dataCep.logradouro);
// }

async function buscarCep(cep) {
    try {

        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Erro ao buscar CEP ou CEP inválido');
        }

        const dados = await response.json();

        if (dados.erro) {
            throw new Error('CEP não encontrado!');
        }

        console.log(dados.logradouro);

        return dados;

    } catch (erro) {
        console.log(erro.message);
    }
}

buscarCep('01001000');
// Saída esperada: Praça da Sé

buscarCep('99999999');
// Saída esperada: (Mensagem de erro)

const cepTeste = await buscarCep('01001000');

console.log(cepTeste);