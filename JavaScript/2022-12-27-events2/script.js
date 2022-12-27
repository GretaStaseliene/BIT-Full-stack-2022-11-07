// const callbackFunction = () => {
//     console.log('veikia');
// }

// document.querySelector('.submit-button').addEventListener('click', callbackFunction);

document.querySelector('.submit-button').addEventListener('click', (event) => {
    // window kintamasis yra objektas kuriame registuojami su narsykles langu susije ivykiai ir kita informacija
    console.log(window);
});

// puslapio slinkimo zemyn ivykis

window.addEventListener('scroll', () => {
    console.log('veikia');
});