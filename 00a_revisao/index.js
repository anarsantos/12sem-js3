// 1.
// [x] adicionar a tag <script> no html
// [x] verificar se está lendo index.js
// [x] alterar cor de <body>
// [x] escutar o clique do botão
// [x] criar função de alterar a cor usando rgb()
// [x] usar Math.random() e Math.floor() ou parseInt()

// console.log('olar');
// Ctrl + X para eliminar a linha em qualquer parte, não há necessidade de selecionar

// const body = document.querySelector('body');

// const body = document.getElementsByTagName('body');


const body = document.body
// o "document" é um objeto que tem um body como filha
// console.log(body);

body.style.backgroundColor = 'purple';

const btn = document.getElementById('trocaCor');
// console.log(botao)

body.style.backgroundColor = 'purple';
// 'rgb(  ,  ,  )'

// const n = Math.random();
// const n2 = n * 255;
// const int = parseInt(n2);

// console.log('número:', n);
// console.log('número2:', n2);
// console.log('int:', int);


// console.log(intRandom)

btn.addEventListener('click', mudarCor);

function geraInteiro() {
    const n = parseInt(Math.random() * 255);
    console.log('chamou geraInteiro', n);
    return n;
}

// F2 - muda o nome da const


function mudarCor() {
    geraInteiro = num => parseInt(Math.random() * num);
    const r = geraInteiro(255);
    const g = geraInteiro(255);
    const b = geraInteiro(255);

    // console.log('entrei na função');
    // body.style.backgroundColor = 'rgb('+intRandom+','+intRandom+','+intRandom+')'
    // body.style.backgroundColor = 'rgb(' + r +',' + g +',' + b +')'
    body.style.backgroundColor = `rgb( ${r}, ${g}, ${b})`;
    // console.log(' + r +',' + g +',' + b +');
    // console.log(r, g, b)
}







