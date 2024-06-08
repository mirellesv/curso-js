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
let indice = 0 // Variável que analisa a ordem das imagens

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

function voltar() {
    window.alert('Voltou!')
}

function avancar() {
    imagens[0] = imagens[1]
    console.log(imagens);
    atualiza_imagens();
    window.alert('Trocou!')
}

function atualiza_imagens (){
    imagens.forEach((elemento) => {
        itens_imagens[indice].innerHTML = `<img src='${elemento.url}' class="imagens">`
        indice = indice + 1
    })
}