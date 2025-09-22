// Criação de promessa
const myPromise =  new Promise((resolve, reject) => {

    const nome = 'Mathues';

    if (nome === 'Mathues') {
        resolve('Usuário Mathues encontrado!');
    } else {
        reject('O usuário Mathues não foi encontrado!');
    }

});

// Resposta do resolve ou do reject
myPromise.then((data) => {
    console.log(data);
})


// Exemplo 2
const myPromise2 =  new Promise((resolve, reject) => {

    const nome = 'Mathues';

    if (nome === 'Mathues') {
        resolve('Usuário Mathues encontrado!');
    } else {
        reject('O usuário Mathues não foi encontrado!');
    }

});

// Encadeamento de then's
myPromise2
    .then((data) => {
        return data.toUpperCase();
    })
    .then((stringModificado) => {
        console.log(stringModificado)
    })


// Como tratar melhor as requisições
// Exemplo 3
const myPromise3 =  new Promise((resolve, reject) => {

    const nome = 'Mathues';

    if (nome === 'Mathues') {
        resolve('Usuário Mathues encontrado!');
    } else {
        reject('O usuário Mathues não foi encontrado!');
    }

});

// Encadeamento de then's
myPromise3
    .then((data) => {
        return data.toUpperCase();
    })
    .then((stringModificado) => {
        console.log(stringModificado)
    })
    .catch((error) => { // Retorna um erro 
        console.log("Ocorreu um erro " + error);
    })


// Resolver várias promessas com All
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => { // delimita um tempo para o código ser executado
        resolve('p1 ok!');
    }, 2000) // Declara o tempo que irá demorar a ser executado
});

const p2 = new Promise((resolve, reject) => {
   resolve('p2 ok!'); 
});

const p3 = new Promise((resolve, reject) => {
   resolve('p3 ok!'); 
});

// Retorna o resolve de todas as promisses dentro do array.
// Executa de forma assincrona, não respeita o fluxo do código.
// Por exemplo, temos requisições que demoram mais tempo.
// All.
const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data);
});

console.log('console.log() --> depois do resolveAll')



// Várias promessas com race.
// Nesse caso há uma corrida de promise, ou seja, elas seram mostradas na ordem em que forem concluídas.
const p1Race = new Promise((resolve, reject) => { // Pela demora será a ultima na corrida
    setTimeout(() => { // delimita um tempo para o código ser executado
        resolve('p1Race ok!');
    }, 2000) // Declara o tempo que irá demorar a ser executado
});

const p2Race = new Promise((resolve, reject) => { // Pela ordem a p2Race vai terminar primeiro
   resolve('p2Race ok!'); 
});

const p3Race = new Promise((resolve, reject) => {
   resolve('p3Race ok!'); 
});

// Retorna a primeira promise que for concluída
const resolveRace = Promise.race([p1Race, p2Race, p3Race]).then((data) => {
    console.log(data);
});



// Exemplo com Fetch
// Fetch request na API do GitHub
// Fetch API

const userName = 'QualityGuil';

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
}).then((response) => {
    console.log(typeof response);
    console.log(response);
    return response.json()
}).then((data) => {
    console.log(data);
    console.log(`Nome do usuário é ${data.name}`);
}).catch((err) => {
    console.log('Houve um erro: ' + err);
})