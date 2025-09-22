// Inserindo um botão no HTML pelo JS

function newButton(text, callback) {
    const $body = document.querySelector('body');

    // $ serve para mostrar que a variável tem um elemento DOM
    const $button = document.createElement('button');
    $button.textContent = text;

    // Envia o botão pelo callback
    callback($button); // Antes de inserir na tela

    // Inserindo o botão no body
    $body.insertAdjacentElement('beforeend', $button);

    return $button
}

// callback recebe o button
const login = newButton('Login', (button) => {
    // console.log('callback funcionando - login');
    button.style.cssText = `
        font-size: 100px;
    `;

    button.addEventListener('click', () => {
        console.log('btn clicado!');
    });
});
const singup = newButton('Singup', (button) => {
    // console.log('callback funcionando - singup');
    button.style.cssText = `
        font-size: 80px;
        color: red;
    `;
});
// console.log("login", login);
// console.log('singup', singup);

// btn login
// login.style.cssText = `
//     font-size: 40px;
// `;

// login.addEventListener('click', () => {
//     console.log('Fazendo login');
// })


// // btn singup
// singup.style.cssText = `
//     font-size: 40px;
//     color: red;
// `;

// singup.addEventListener('click', () => {
//     console.log('Fazendo singup');
// })