function calcular_imc(){
    let nome_txt = document.getElementById("nome_pessoa")
    let nome = nome_txt.value.toString()
    let altura_txt = document.getElementById("altura_pessoa")
    let altura = Number(altura_txt.value)
    let peso_txt = document.getElementById("peso_pessoa")
    let peso = Number(peso_txt.value)
    let res = document.getElementById("resposta")

    let imc = (peso/(altura*altura)).toFixed(2)
    let clas = analisar_peso(imc)

    res.innerHTML = `Olá ${nome}! Seu IMC é de ${imc} kg/m<sup>2</sup>. Sua classificação é "${clas}".`
}

function analisar_peso(imc){
    let classificacao

    if(imc < 16.9){
        classificacao = 'Muito abaixo do peso'
    }else if(imc < 18.4){
        classificacao = 'Abaixo do peso'
    }else if(imc < 25.4){
        classificacao = 'Peso normal'
    }else if(imc < 29.9){
        classificacao = 'Acima do peso'
    }else if(imc < 34.9){
        classificacao = 'Obesidade grau I'
    }else if(imc < 40){
        classificacao = 'Obesidade grau II'
    }else{
        classificacao = 'Obesidade grau III'
    }

    return classificacao
}