const img = document.getElementById('img')
const botao_l = document.getElementById('lig')
const botao_d = document.getElementById('des')

img.addEventListener("mouseover", ligar)
img.addEventListener("mouseout", desligar)
img.addEventListener("dblclick", quebrar)
botao_l.addEventListener("click", ligar)
botao_d.addEventListener("click", desligar)

function ligar(){
    if(estaQuebrada() == false){
        img.setAttribute('src', 'imagens/ligada.jpg')
    }   
}

function desligar(){
    if(estaQuebrada() == false){
        img.setAttribute('src', 'imagens/desligada.jpg')
    }
}

function quebrar(){
    img.setAttribute('src', 'imagens/quebrada.jpg')
}

function estaQuebrada(){
    if(img.getAttribute("src") == 'imagens/quebrada.jpg'){
        return true
    }else{
        return false
    }
}