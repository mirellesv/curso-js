function carregar(){
    var mensagem = window.document.getElementById("msg")
    var imagem = window.document.getElementById("foto")
    var agora = new Date()
    var horas = agora.getHours()

    horas = 19

    mensagem.innerHTML = `Agora são ${horas} horas. `

    if(horas >= 0 && horas < 12){
        mensagem.innerHTML += ('Bom dia!')
        imagem.src = 'manha.jpg'
        document.body.style.background = '#fde781'
    }else if(horas < 18){
        mensagem.innerHTML += ('Boa tarde!')
        imagem.src = 'tarde.jpg'
        document.body.style.background = '#909fb2'
    }else{
        mensagem.innerHTML += ('Boa noite!')
        imagem.src = 'noite.jpg'
        document.body.style.background = '#05142b'
    }
}