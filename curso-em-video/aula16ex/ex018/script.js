var A = []
var tab = document.querySelector('select#seltab')
var analise = document.querySelector('div#ans')
tab.innerHTML= ' '

function inserir_elemento(){
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
            analise.innerHTML = ''
        }
       txtnum.value = ''
       txtnum.focus()
    }
}

function valor_repetido(A, valor){
    if(A.indexOf(valor) == -1){
        return true // Número não encontrado!
    }else{
        return false // Número encontrado!
    }
}

function finalizar(){
    if(A.length != 0){
        analise.innerHTML += `<p>Ao todo, temos ${A.length} números cadastrados.</p>`

        var soma = 0
        var maior_num = A[0]
        var menor_num = A[0]

        for(var i in A){
            soma += A[i]

            if(maior_num < A[i]){
                maior_num = A[i]
            }

            if(menor_num > A[i]){
                menor_num = A[i]
            }
        }

        analise.innerHTML += `<p>O maior valor informado foi ${maior_num}.</p>`

        analise.innerHTML += `<p>O menor valor informado foi ${menor_num}.</p>`

        analise.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`

        analise.innerHTML += `<p>A média de todos os valores digitados é ${soma/A.length}.</p>`
    }else{
        window.alert('Por favor, insira pelo menos um número.')
    }
}