var A = []
var tab = document.querySelector('select#seltab')
tab.innerHTML= ' '

function inserir_elemento(A, tab){
    var txtnum = document.querySelector('input#txtnum')
    
    if (txtnum.value.length == 0 || (Number(txtnum.value < 0) || Number(txtnum.value > 100)) || valor_repetido(A, Number(txtnum.value)) == false){
        window.alert('Valor inválido ou já encontrado na lista!')
    }else{
        var num = Number(txtnum.value)

        if(A.length <= 100){
            A.push(num)

            var item = document.createElement('option')

            item.text= `Valor ${txtnum.value} adicionado`
            tab.appendChild(item)
        }
    }
}

function valor_repetido(A, valor){
    if(A.indexOf(valor) == -1){
        return true // Número não encontrado!
    }else{
        return false // Número encontrado!
    }
}

function finalizar(A){
    var analise = document.querySelector('div#res')

    analise.innerHTML += `<br> Ao todo, temos ${A.length} números cadastrados. <br>`

    
    var soma = 0
    var maior_num = 0
    var menor_num = A[0]

    for(var i in A){
        soma += A[i]

        if(maior_num < A[i]){
            maior_num = A[i]
        }

        if(menor_num < A[i]){
            menor_num = A[i]
        }
    }

    analise.innerHTML += `O maior valor informado foi ${maior_num}. <br>`

    analise.innerHTML += `O menor valor informado foi ${A[0]}. <br>`


    analise.innerHTML += `Somando todos os valores, temos ${soma}. <br>`

    analise.innerHTML += `A média de todos os valores digitados é ${soma/A.length}. <br>`
}