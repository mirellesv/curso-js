const imagens = [
    {'id': '1', 'url': 'img/chrono.jpg'},
    {'id': '2', 'url': 'img/inuyasha.jpg'},
    {'id': '3', 'url': 'img/ippo.png'},
    {'id': '4', 'url': 'img/tenchi.jpg'},
    {'id': '5', 'url': 'img/tenjhotenge.jpg'},
    {'id': '6', 'url': 'img/yuyuhakusho.jpg'}
]
const container_img = document.querySelector('#container-img')
const botao_voltar = document.querySelector('#seta-esq')
const botao_avancar = document.querySelector('#seta-dir')
let auxiliar // Variável que irá ajudar na troca das imagens

const carregar_imagens = ( imagens ) => {
    imagens.forEach((elemento) => {
        container_img.innerHTML += 
         `<div class="itens">
             <img src='${elemento.url}' class='imagens'>
          </div>
        `
    })
}

carregar_imagens ( imagens );

botao_voltar.addEventListener("click", voltar)
botao_avancar.addEventListener("click", avancar)
const itens_imagens = document.querySelectorAll('.itens')
const itens_imagens_Arr = Array.from(itens_imagens)

function voltar() {
    let indice = 1

    while(indice < 6){
        volta_imagens( imagens, indice )

        indice++
    }

    atualiza_imagens( imagens, itens_imagens_Arr )
}

function volta_imagens ( imagens, indice ){
    [imagens[indice - 1], imagens[indice]] = [imagens[indice], imagens[indice - 1]]
}

function avancar() {
    let indice = 0

    while(indice < 5){
        avanca_imagens( imagens, indice)

        console.log(imagens)

        indice++
    }
    
    atualiza_imagens(imagens, itens_imagens_Arr)
}

function avanca_imagens ( imagens, indice ){
    [imagens[indice], imagens[indice + 1]] = [imagens[indice + 1], imagens[indice]]
}

function atualiza_imagens ( imagens, itens_imagens_Arr ){
    let indice = 0
    itens_imagens_Arr.forEach( () => {
        itens_imagens_Arr[indice].innerHTML = `<img src='${imagens[indice].url}' class='imagens'>`
        indice = indice + 1
    })
}

console.log(itens_imagens_Arr)