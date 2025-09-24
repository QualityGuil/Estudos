// Exercício 3: Nível Avançado (Encadeando Promises)
// Crie duas funções que retornam Promises:

// buscarUsuario(id): Que, após 1 segundo, retorna um objeto de usuário { id: id, nome: 'Usuário ' + id }.

// buscarPosts(id): Que, após 1 segundo, retorna um array de posts { id_post: 1, titulo: 'Post ' + id + ' A' }, { id_post: 2, titulo: 'Post ' + id + ' B' }.

// Encadeie as Promises para primeiro buscar um usuário com id=123 e, em seguida, usar o id do usuário para buscar seus posts. Imprima os dados do usuário e seus posts no console.

// O encadeamento de Promises deve resultar na seguinte saída após 2 segundos:
// "Usuário: Usuário 123"
// "Posts:"
// [ { id_post: 1, titulo: 'Post 123 A' }, { id_post: 2, titulo: 'Post 123 B' } ]

// function buscarUsuario(id) {
//     setTimeout(() => {
//         return new Promise((resolve, reject) => {
//             if (id === 123) {
//                 const usuario = { id: id, nome: 'Usuário ' + id };
//                 resolve(usuario);
//             } else {
//                 reject(`Usuário ${id} não encontrado!`);
//             }
//         })
//     }, 1000);
// }

// function buscarPosts(id) {
//     buscarUsuario(id)
//         .then((resolve) => {
//             let id = resolve.id;
//             const post = [
//                 { id_post: 1, titulo: 'Post ' + id + ' A' },
//                 { id_post: 2, titulo: 'Post ' + id + ' B' }
//             ];
//             console.log(`Usuário: Usuaário ${id}`);
//             post.forEach((publi) => {
//                 console.log(` Posts:\n {id_post: ${publi.id_post}, titulo: ${publi.titulo}}`);
//             });
//         })
//         .catch(err => console.log(`Ocorreu um erro: ${err}`));
// }

// buscarPosts(123);

function buscarUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 123) {
                const usuario = { id: id, nome: 'Usuário ' + id };
                resolve(usuario);
            } else {
                reject(`Usuário ${id} não encontrado!`);
            }
        }, 1000);
    });
}

function buscarPosts(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 123) {
                const posts = [
                    { id_post: 1, titulo: 'Post ' + id + ' A' },
                    { id_post: 2, titulo: 'Post ' + id + ' B' }
                ];
                resolve(posts);
            } else {
                reject(`Usuário ${id} não encontrado`);
            }
        }, 1000);
    });
}

buscarUsuario(123)
    .then((data) => {
        console.log(`Usuário: ${data.id}`);
        buscarPosts(data.id)
            .then((posts) => {
                console.log('Posts: ')
                posts.forEach((post) => {
                    console.log(` id_post: ${post.id_post}, titulo: ${post.titulo}`);
                });
            });
    });


