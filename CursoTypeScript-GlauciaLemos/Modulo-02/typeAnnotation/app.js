"use strict";
// Transpilação do arquivo: Ctrl + SHIFT + B -> tsc: build/watch
// Tipos de variáveis do TSC
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Váriaveis [Type Annotations]
let nome = 'Guilherme França Fernandes';
console.log(nome);
// ==> Arrays [Type Annotations]
let animais = ['Elefante', 'Cachorro', 'Gato', 'Panda', 'Girafa'];
console.log(animais);
// ==> Objetos [Type Annotations]
let carro;
carro = {
    nome: 'Toyota Yaris Sedan XS',
    ano: 2019,
    preco: 80000
};
console.log(carro);
// ==> Functions [Type Annotations]
function multiplicarNumero(num1, num2) {
    return num1 * num2;
}
console.log(multiplicarNumero(2, 5));
//# sourceMappingURL=app.js.map