// // Objeto literal
// const corredor1 = {
//     nome : 'Ayrton Sena',
//     equipe : 'McLaren',
//     idade : 29,
//     correr : function() { // Método
//         console.log('Vruuuuuuuuuum!');
//     },
// }

// console.log(corredor1.nome);
// corredor1.correr(); // Chamando método

// // Objeto literal
// const corredor2 = {
//     nome : 'Max Verstappen',
//     equipe : 'RedBull Racing',
//     idade : 27,
//     correr : () => {
//         console.log('Vruuuuuuuuuum!')
//     }
// }

// console.log(corredor2.nome);
// corredor2.correr(); // Chamando método



// -=-=-=-=-= Instanciando objetos =-=-=-=-=-

// Automatizando a criação do objeto

// 1º Função construtora
// class PilotoFormula1 { // Estrutura de class/forma
//     nome = '';
//     equipe = '';
//     idade = 0;

//     correr() {
//         console.log('Vruuuuuuuuuum!');
//     }
// }

// const corredor1 = new PilotoFormula1();

// corredor1.nome = 'Ayrton Senna';
// corredor1.equipe = 'McLaren';
// corredor1.idade = 30;
// corredor1.correr();

// console.log(corredor1);

class PilotoFormula1 { // Estrutura de class/forma
    constructor(nomePiloto, equipePiloto, idadePiloto) { // Função que inicializa um objeto
        this.nome = nomePiloto
        this.equipe = equipePiloto
        this.idade = idadePiloto
    }

    nome = '';
    equipe = '';
    idade = 0;

    correr() { // Método correr
        console.log('Vruuuuuuuuuum!');
    }
}

const corredor1 = new PilotoFormula1('Ayrton Senna', 'McLaren', 30);
const corredor2 = new PilotoFormula1('Max Verstappen', 'RedBull Racing', 27);

console.log(corredor1);
console.log(corredor2);

class Jogador extends PilotoFormula1 {

}

const jogador1 = new Jogador('Neymar', 'Santos', 33);
console.log(jogador1);