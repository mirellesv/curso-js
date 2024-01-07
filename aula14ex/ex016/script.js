function contar(){
    var txtinicio = window.document.querySelector('input#txtinicio')
    var txtfim = window.document.querySelector('input#txtfim')
    var txtpasso = window.document.querySelector('input#txtpasso')
    var res = window.document.querySelector('div#res')

    var inicio = Number(txtinicio.value)
    var fim = Number(txtfim.value)
    var passo = Number(txtpasso.value)

    if(txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0){
        res.innerHTML = 'Impossível contar!'
    }else{
        res.innerHTML = ''
        
        if(passo == 0){
            window.alert('Passo inválido! Considerado PASSO 1')
            passo = 1
        }
        
        if(inicio < fim){
            for (var i = inicio; i <= fim; i = i + passo){
                res.innerHTML += i + '&#x1F449;'
            }
        }else{
            for (var i = inicio; i >= fim; i = i - passo){
                res.innerHTML += i + '&#x1F449;'
            }
        }
        
        res.innerHTML +=  `\u{1F3C1}`
    }
}