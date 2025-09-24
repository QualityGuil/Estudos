// Exercício 3: Nível Avançado (Requisições em Paralelo com Promise.all)
// Crie uma função async chamada buscarMultiplosUsuarios que recebe um array de nomes de usuário do GitHub.

// Para cada nome de usuário no array, crie uma Promise que busca os dados do usuário usando o Fetch API.

// Use Promise.all() para executar todas as requisições em paralelo.

// Se todas as Promises forem resolvidas, imprima um array contendo o nome e a bio de cada usuário.

// Se qualquer uma das Promises for rejeitada (por exemplo, um usuário não existir), capture o erro e imprima uma mensagem genérica de falha.

async function buscarMultiplosUsuarios(userNames) {
    try {
        const promises = userNames.map(userName => 
            fetch(`https://api.github.com/users/${userName}`)
                .then(response => {

                    if (!response.ok) {
                        throw new Error(`Falha na busca por ${userName}`);
                    }

                    // console.log(response.json());

                    return response.json();
                })
        );

        const results = await Promise.all(promises);

        // Mapeia os resultados para o formato desejado
        const users = results.map(user => ({
            nome: user.name,
            bio: user.bio
        }));

        console.log(users);
    } catch (erro) {
        console.log('Erro:', erro.message);
    }
}

buscarMultiplosUsuarios(['octocat', 'torvalds', 'gaearon']);
// Saída esperada:
// [
//   { nome: 'The Octocat', bio: '...' },
//   { nome: 'Linus Torvalds', bio: '...' },
//   { nome: 'Dan Abramov', bio: '...' }
// ]

buscarMultiplosUsuarios(['octocat', 'guilfranca', 'gaearon']);
// Saída esperada: Erro: Falha ao buscar um ou mais usuários.