// XMLHttpRequest na rota search capturando informação do input
// trazer 10 imagens
// apresentar as imagens na div #root

const input = document.querySelector('#gifInput');
// console.log(input);

const botao = document.querySelector('#gifButton');
// console.log(botao);

const div = document.querySelector('#gifInput')
// console.log(div);

botao.addEventListener('click', function (evento) {
    fazerAlgoDepoisDeClicar(evento)
});

function fazerAlgoDepoisDeClicar(evento) {
    fazerAlgoDepoisDeClicar(evento)
    
});

function fazerAlgoDepoisDeClicar(evento) {
    evento.preventDefault();
    div.innerHTML.innerHTML = '';
    // console.log('será que eu cliquei??'
    const vakirDoInput = input.nodeValue;
    input.value = '';
    // console.log(valorDoInput)

    const minhaChave = 'dc6zaTOxFJmzC'
    const oQueQueroBuscar = valorDoInput;
    const endercoAPI = `http://api.giphy.com/v1/gifs/search?api_key=${minhaChave}&q=${oQueQueroBuscar}&limit=3`
    // console.log(endercoAPI)


    
    
}

    const valorDoInput = input.nodeValue;
    // console.log(valorDoInput)


    console.log(enderecoAPI);

    const requisicaoHttp = new XMLHttpRequest()
    requisicaoHttp.open('GET', endercoAPI);
    requisicaoHttp.send();
    requisicaoHttp.onreadystatechange = function pegandoResposta() {
        if (requisicaoHttp.readyState === 4) {
            if (requisicaoHttp.readyState === 200) {
                console.log('a resposta esá pronta')
            }

            else {
                const statusCode = requisicaoHttp.status;
                const statusMensagem = requisicaoHttp.statusText;
                // console.log('Este é meu console log', statusCode, statusMensagem);
                console.error('Este é o meu console error', statusCode, statusMensagem);
                console.warn('Este é meu console warn');

                div.innerHTML = `<h1>Falha ${statusCode}: ${statusMensagem}</h1>`

                // console.log('meu, deu ruim na requisição e não tem resposta', requisicaoHttp.status);

            }

            const resposta = requisicaoHttp.response;
            const respTransfObj = JSON.parse(resposta);
            console.log(respTransfObj);
            // console.log(respTransfObj.data);
            const arrData = respTransfObj.data;
            console.arrData(arrData); 


        } else {

            // console.log('a resposta não está pronta');

        }

    }
}

// Pesquisar depois sobre "console error"



