// callback = a function that is passed as an argument to another function.
// chamada depois de uma determinada ação ocorrer

// utilizada normalmente quando é necessário esperar algo

hello(goodbye);
// goodbye();

// function hello() {
//     setTimeout(() => {
//         console.log('Hello!');
//     }, 3000);
// }

function hello(callback) {
    console.log('Hello!');
    callback();
}

function leave() {
    console.log('Leave!');
}

function waite() {
    console.log('waite!');
}

function goodbye() {
    console.log("Goodbye!");
}



// callback = a function that is passed as an argument to another function.

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log(result)
}

sum(displayConsole, 1 , 4);

function displayPage(result) {
    document.getElementById('myH1').textContent = result;
}

sum(displayPage, 1 , 4);