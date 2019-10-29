// XMLHttprEQUEST do gif

const request = new XMLHttpRequest();

const quero = 'cachoeira'

const urlRequest = `http://api.giphy.com/v1/gifs/search?q=${quero}&api_key=dc6zaTOxFJmzC&limit=3&offset=0`

// api.giphy.com/ - domnínio
// v1/gifs/search? - recursos
// q=funny+cat&api_key=dc6zaTOxFJmzC&limit=1&offset=0 - parametros


const gif = document.getElementById('imagem')

request.onreadystatechange = mostraGif;
request.open('GET', urlRequest);
request.send();


function mostraGif() {
    if (request.status === 200 && request.readyState === 4) {
        const response = request.response;
        // console.log(typeof response);

        const json = JSON.parse(response);
        // console.log(json.data.images.original.url);
        // console.log(json);

        // const imgSrc = json.data[2].images.original.url

        // document.querySelector('#images').src = imgSrc;

        const data = (json.data[0].images.original.url)

        const  body = document.body;
        gif.src = data;

        body.innerHTML = `
        <img src=${json.data[0].images.original.url}>
        <img src=${json.data[1].images.original.url}>
        <img src=${json.data[2].images.original.url}>
        `
        
    } else {

    }
    
}

