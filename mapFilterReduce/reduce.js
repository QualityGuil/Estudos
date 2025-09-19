// Reduce
// O reduce tem a função de reduzir todos os valores da array para somente um.
const ages = [8, 13, 27, 30, 22, 40]; // total 140

// Vai percorrendo os valores e somando o mesmo até sobrar um apenas
const sumOfAges = ages.reduce((age, accumulator) => {
    return accumulator + age;
// }, 0); // valor inicial do accumulator
}, 100); // valor inicial do accumulator

console.log(sumOfAges);