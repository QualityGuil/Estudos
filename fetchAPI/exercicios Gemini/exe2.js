// Exercício 2: Nível Intermediário (Tratar Múltiplos Casos de Erro)
// Crie uma função async chamada obterUsuarioGithub que recebe um nome de usuário do GitHub.

// Use a API pública do GitHub: https://api.github.com/users/[username].

// Implemente o tratamento de erro com try...catch.

// Se a resposta da API for um status 404 (usuário não encontrado), lance um erro com a mensagem "Usuário não encontrado!".

// Se a requisição falhar por outros motivos (erro de rede, etc.), lance um erro com a mensagem "Erro na requisição: [status]".

// Se a requisição for bem-sucedida, imprima o nome e o número de seguidores do usuário.

// async function obterUsuarioGithub(userName) {
//     await fetch(`https://api.github.com/users/${userName}`)
//             .then((data) => data.json())
//             .then((data) => {
//                 console.log(`Nome: ${data.name}`);
//                 console.log(`Seguidores: ${data.followers}`);
//             })
//             .catch((err) => console.log(`Usuário ${userName}, não encontrado!`));
// }

async function obterUsuarioGithub(userName) {
    try {
        const url = `https://api.github.com/users/${userName}`;
        const response = await fetch(url);

        if (response.status === 404) {
            throw new Error('Usuário não encontrado!');
        }

        if (!response.ok) {
            throw new Error('Erro ao buscar username ou username inválido!');
        }

        const data = await response.json();

        if (data.erro) {
            throw new Error('Username inválido!');
        }

        console.log(`Nome: ${data.name}`);
        console.log(`Seguidores: ${data.followers}`);

    } catch (erro) {
        console.log(erro.message);
    }
}

obterUsuarioGithub('octocat');
// Saída esperada:
// Nome: The Octocat
// Seguidores: 14755

obterUsuarioGithub('usuarioquenaoexiste123');
// Saída esperada: Erro: Usuário não encontrado!

