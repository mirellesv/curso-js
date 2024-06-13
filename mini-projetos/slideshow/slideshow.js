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
let itens_imagens = document.querySelectorAll('.itens')

console.log(itens_imagens)

function voltar() {
    container_img.appendChild(itens_imagens[0])

    itens_imagens = document.querySelectorAll('.itens')

    console.log(itens_imagens)
}

function avancar() {
    const ultima_imagem = itens_imagens[itens_imagens.length - 1]

    container_img.insertBefore( ultima_imagem, itens_imagens[0] )

    itens_imagens = document.querySelectorAll('.itens')

    console.log(itens_imagens)
}