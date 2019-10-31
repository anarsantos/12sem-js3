// [] instanciar XMLHttpRequest()
// const request = new XMLHttpRequest();

// [] o que fazer depois que receber a resposta
// [] fazer a requisição com open() e send()
// [] tratar response

const div = document.querySelector('#root');
const url = './data/dados.json';

const req = new XMLHttpRequest();
req.open('GET', url);
req.send();

// [] iterar sobre o array e mostrar as três imagens usando for()
// [] iterar sobre o array e mostrar as três imagens usando for...of
// [] iterar sobre o array e mostrar as três imagens usando forEach



const request = new XMLHttpRequest();
const url = './data/dados.json';


request.onreadystatechange=mostraImg;

request.open('GET', url); 
// passo o paramêtro dentro() e precisa ser com letra maiúscula e em forma de string


function mostraImg() {
    if (request.status === 200 && request.readyState === 4) {
        const response = request.response;
        const json = JSON.parse(response);
        
        const data = json.data;
        // console.log(data[0].nome);

        const div = document.querySelector('#root');

        const body = document.body;
        // vou entrar no body

        body.innerHTML += `
        <img src=${data[0].imagem}>
        <img src=${data[1].imagem}>
        <img src=${data[2].imagem}>
        `

    } else {
        
        
    }
}
request.send();
