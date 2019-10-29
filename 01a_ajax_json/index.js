// [] instanciar(chamar) XMLHttpRequest() 
// [] o que fazer depois que receber a resposta
// [] fazer a requisição com open() e send()
// [] tratar response

const div = document.querySelector('#root');
const img = document.createElement('img');

const request = new XMLHttpRequest();

// request.onreadystatechange = algumaFuncao;

// function algumaFuncao() {
//     // fazer algo com a response
//     console.log('olar');
//     const response = request.response;
//     // console.log(response);
//     console.log(typeof response);

//     img.src = json.data[0].imagem;
//     div.appendChild(img)

//     const json = JSON.parse(request.response);
//     console.log(json.data[0].imagem);
// }

request.onreadystatechange = getDados;


function getDados() {
    if (request.readyState === 4 && request.status === 200) {
        const response = request.response;
        const json = JSON.parse(request.response);
        const data = json.data;
        const obj = data[0]

        const imgSrc = obj.imagem
        img.src = imgSrc;
        div.appendChild(img)

    } else {
        console.log(request.readyState, request.status);
    }

}


const url = './data/dados.json'
request.open('GET', url);
request.send();
