const img = document.getElementById('img')
const botao_l = document.getElementById('lig')
const botao_d = document.getElementById('des')

img.addEventListener("mouseover", ligar)
img.addEventListener("mouseout", desligar)
img.addEventListener("dblclick", quebrar)
botao_l.addEventListener("click", ligar)
botao_d.addEventListener("click", desligar)

function ligar(){
    // if(img.hasAttribute('src', 'imagens/quebrada.jpg')){
    //     img.setAttribute('src', 'imagens/quebrada.jpg')
    // }else{
    //     img.setAttribute('src', 'imagens/ligada.jpg')
    // }
    img.setAttribute('src', 'imagens/ligada.jpg')
}

function desligar(){
    img.setAttribute('src', 'imagens/desligada.jpg')
}

function quebrar(){
    img.setAttribute('src', 'imagens/quebrada.jpg')
}