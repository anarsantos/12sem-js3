// fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] usar o endpoint de busca
// [] usar o método fetch() para a url da API Giphy
// [] transformar o dado recebido
// [] apresentar <img>

const input = document.querySelector('#gifInput');
const botao = document.querySelector('#gifButton');
const div = document.querySelector('#root')

botao.addEventListener('click', (evento) => fazerFetch(evento));

function fazerFetch(evento) {
    evento.preventDefault();
    const valorDoInput = input.value;
    // console.log(valorDoInput);

    div.innerHTML = ''    
    const url = `http://api.giphy.com/v1/gifs/search?q=${valorDoInput}&api_key=dc6zaTOxFJmzC&limit=4offset=0`

    fetch(url)
        .then(resposta => {
            if (!resposta.ok) {
            console.error(resposta.statusText);
            mostrarErro(resposta.statusText);
        }
        return resposta.json()
    })

        .then(json => mostrarResultado(json))
        .catch(erro => console.error(erro))
}

function mostrarResultado(json) {
    const arr = json.data
    console.log(arr);
    arr.forEach(element => {
        const scrImg = element.images.original.url;
        div.innerHTML += `
        <img src=${scrImg}>
        `
    });
}

