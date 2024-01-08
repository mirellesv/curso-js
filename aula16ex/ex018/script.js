function analisar(){
    var txtnum = document.querySelector('input#txtnum')

    if (txtnum.value.length == 0 || (Number(txtnum.value < 0) || Number(txtnum.value > 100))){
        window.alert('Valor inválido ou já encontrado na lista!')
    }else{
        var A = []
        var res = document.querySelector('select#seltab')
        A.push(Number(txtnum.value))

        res.innerHTML = ''

        var item = document.createElement('option')

        item.text = `Valor ${txtnum.value} adicionado`
        res.appendChild(item)
    }

}

function finalizar(){

}