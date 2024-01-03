function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var ano_nasc = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if(ano_nasc.value.length == 0 || Number(ano_nasc.value) > ano){
        window.alert('Dados inválidos! Tente novamente.')
    }else{
        var sexo = document.getElementsByName('sexfm')
        var idade = ano - Number(ano_nasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sexo[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade < 12){
                // MENINO
                img.setAttribute('src', 'foto_crianca_menino_250.jpg')
            }else if(idade < 18){
                // ADOLESCENTE MENINO
                img.setAttribute('src', 'foto_adolescente_homem_250.jpg')
            }else if(idade < 60){
                // ADULTO
                img.setAttribute('src', 'foto_adulto_homem_250.jpg')
            }else{
                // IDOSO
                img.setAttribute('src', 'foto_idoso_homem_250.jpg')
            }
        }else if(sexo[1].checked){
            genero = 'Mulher'

            if(idade >= 0 && idade < 12){
                // MENINA
                img.setAttribute('src', 'foto_crianca_menina_250.jpg')
            }else if(idade < 18){
                // ADOLESCENTE MENINA
                img.setAttribute('src', 'foto_adolescente_mulher_250.jpg')
            }else if(idade < 60){
                // ADULTA
                img.setAttribute('src', 'foto_adulto_mulher_250.jpg')
            }else{
                // IDOSA
                img.setAttribute('src', 'foto_idoso_mulher_250.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML=(`Detectamos ${genero} com ${idade} anos.`)
        res.appendChild(img)
    }
}