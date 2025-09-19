// MAP
const numbers = [1, 2, 3, 4, 5];

// O map executa cada elemento dessa lista e executa um determinado comando. Retornando depois em uma nova lista.
const numbersMultiplieByTwo = numbers.map(function(number) { // function recebe o elemento dentro do array numbers

    numberMutiplied = number * 2;

    return numberMutiplied // É nucessário retornar algo quando utilizamos o map

})

console.log(numbersMultiplieByTwo);

const sectionNumber = document.querySelector('.number');

numbers.map((num) => {
    sectionNumber.innerHTML += `
    <h1 id="${num}">${num}</h1>
    `;
})