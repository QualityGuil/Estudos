// Filter
const ages = [8, 13, 27, 30, 22, 40, 'teste'];

// filter tem a função de criar uma nova array com base no filtro feito na array base.
const evenAges = ages.filter(function(age) {
    return age % 2 === 0; // Caso essa condição se torne verdadeira o valor irá ser adicionado a lista evenAges
});

console.log(evenAges);

const inputSearch = document.querySelector('.input__search');
const sectionNumber = document.querySelector('.number');

function pesquisarNumeros(termoPesquisado) {
    const numerosFiltrados = ages.filter(num =>
        String(num) === termoPesquisado
    );

    sectionNumber.innerHTML = '';

    numerosFiltrados.map((num) => {
        sectionNumber.innerHTML += `
        <h1>${num}</h1>
        `;
    });

}

inputSearch.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        pesquisarNumeros(inputSearch.value);
    }
})