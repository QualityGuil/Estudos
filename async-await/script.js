// // sintaxe
// function primeiraFuncao() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Esperou isso aqui');
//             resolve();
//         }, 1000)
//     })
// }

// async function segundaFuncao() {
//     console.log('Iniciou');

//     await primeiraFuncao(); // o async só funciona com a inserção do await

//     console.log('Finalizou');
// }

// segundaFuncao();



// Prático
function getUser(id) {
    return fetch(`https://reqres.in/api/users?id=${id}`)
        .then((data) => data.json())
        .then((data) => {
            console.log(data.first_name); // Realmente está com algum problema
        })
        .catch((err) => console.log(`Erro no fetch: ${err}`))
}

async function showUserName(id) {

    try {
        const user = await getUser(id);

        console.log(`O nome do usuário é: ${user.data.first_name}`); // Está bugando
    } catch(err) {
        console.log('Erro:' + err)
    }

}

showUserName(2);