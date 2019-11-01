// documentacao da api do github  https://developer.github.com/v3/
// requisição na api pela url https://api.github.com
// fazer GET na rota /users com seu user ex: get em https://api.github.com/users/reprograma

const url = 'https://api.github.com/users/anarsantos'

async function buscarApi(url) {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const json = await response.json();
            criarImagem(json.avatar_url);

        } else {
            const err = `${response.status}: ${response.statusText}`
            criaErro(err);
        }
    } catch (error) {
        criaErro('Falha na requisição da API')
    }
}

function criarImagem(src) {
    document.body.innerHTML = `
        <img src=${src} >
        `
    // if (array.lengh) {
    // } else {
    //     console.warn('não foi possível carregar a imagem')
    // }
}

criaErro = (erro) => {
    document.body.innerHTML = `<h1 style="color: red">${erro}</h1>`
}

    // const response = await fetch(url);


    // console.log(response.statusText);

    // // console.error('não foi possível receber o resultado da api');
    // document.body.innerHTML = `<h1 style="color: red">${response.status}: ${response.statusText}</h1>`


    // .then(response => response.json())
    // .then(json => criarImagem(json.data))
    // .catch(erro => console.error(erro))


// buscarApi(url).catch(err => console.error(err))

buscarApi(url)

