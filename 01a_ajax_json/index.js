// [] instanciar(chamar) XMLHttpRequest() 
// [] o que fazer depois que receber a resposta
// [] fazer a requisição com open() e send()
// [] tratar response

const div = document.querySelector('#root');
const img = document.createElement('img');

const request = new XMLHttpRequest();

request.onreadystatechange = algumaFuncao;

function algumaFuncao() {
    // fazer algo com a response
    console.log('olar');
    const response = request.response;
    // console.log(response);
    console.log(typeof response);
    
    img.src = json.data[0].imagem;
    div.appendChild(img)

    const json = JSON.parse(request.response);
    console.log(json.data[0].imagem);


}

const url = './data/dados.json'
request.open('GET', url);
request.send();
