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
    }else if(txtpasso.value == 0){
        window.alert('Passo inválido! Considerado PASSO 1')

        passo = 1
        res.innerHTML = ''

        for (var i = inicio; i <= fim; i = i + passo){
            res.innerHTML += i + '&#x1F449;'
        }
        
        res.innerHTML += '&#x1F3F3;&#xFE0F;'
    }else{
        res.innerHTML = ''

        for (var i = inicio; i <= fim; i = i + passo){
            res.innerHTML += i + '&#x1F449;'
        }
        
        res.innerHTML += '&#x1F3F3;&#xFE0F;'
    }
}