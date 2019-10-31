// 1.
// [x] adicionar a tag <script> no html
// [x] verificar se está lendo index.js
// [x] alterar cor de <body>
// [x] escutar o clique do botão
// [x] criar função de alterar a cor usando rgb()
// [x] usar Math.random() e Math.floor() ou parseInt()

const body = document.body;
const botao = document.getElementById('trocaCor');

body.style.backgroundColor = 'purple';
// 'rgb(____,_____,____)'
botao.addEventListener('click', mudaCor);

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







