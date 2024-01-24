const img = document.getElementById('img')
const botao = document.getElementById('lig')

img.addEventListener("mouseover", ligar)
img.addEventListener("mouseout", desligar)
img.addEventListener("dblclick", quebrar)
botao.addEventListener("click", trocar_botao)

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

function trocar_botao(){
    if(estaQuebrada() == false){
        if(botao.value == 'Ligar'){
            botao.value = 'Desligar'
            ligar()
        }else if(botao.value == 'Desligar'){
            botao.value = 'Ligar'
            desligar()
        }
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