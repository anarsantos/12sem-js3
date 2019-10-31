// 1.
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] alterar cor de <body>
// [] escutar o clique do botão
// [] criar função de alterar a cor usando rgb()
// [] usar Math.random() e Math.floor() ou parseInt()

// ------------------------------------------------------------------------
// 2. melhorando o código
// [x] remover repetição de código
// [x] anonymous function
// [] arrow function
// [] template string

// const body = document.body
// // o "document" é um objeto que tem um body como filha
// // console.log(body);

// body.style.backgroundColor = 'purple';
// botao.addEventListener('click', function mudarCor() {
//     // () => no lugar de "function mudarCor()"
//     const r = geraInteiro();
//     const g = geraInteiro();
//     const b = geraInteiro();
//     body.style.backgroundColor = 'rgb(' + r +',' + g +',' + b +')'
// })

// `rgb(${r}, ${g}, ${b})`
// geraInteiro = num => parseInt(Math.random() * num);

// const botao = document.getElementById('trocaCor');
// // console.log(botao)

// body.style.backgroundColor = 'purple';
// // 'rgb(  ,  ,  )'

// // const n = Math.random();
// // const n2 = n * 255;
// // const int = parseInt(n2);

// // console.log('número:', n);
// // console.log('número2:', n2);
// // console.log('int:', int);


// // console.log(intRandom)

// // botao.addEventListener('click', mudarCor);

// // function geraInteiro() {
// //     const n = parseInt(Math.random() * 255);
// //     console.log('chamou geraInteiro',n);
// //     return n;    
// // }
// // na linha abaixo tem outra alternativa

// geraInteiro = (num) => 
//     return parseInt(Math.random() * num);

// // para uma única instrução a chave é opcional, da linha 55 a 56 é uma função


// // F2 - muda o nome da const


// function mudarCor() {
//     // const intRandom = parseInt(Math.random() * 255)
    

//     // console.log('entrei na função');
//     // body.style.backgroundColor = 'rgb('+intRandom+','+intRandom+','+intRandom+')'
    
//     console.log(' + r +',' + g +',' + b +');
//     console.log(r, g, b)
// }
  


    const body = document.body;
    const botao = document.getElementById('trocaCor');

    body.style.backgroundColor = 'purple';

    botao.addEventListener('click', mudaBody);

    function mudaBody() {
        const mudaC = new mudarCor()
        body.style.backgroundColor = new mudarCor().geraRGB();
    }




 
