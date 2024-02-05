const caixa1 = document.querySelector('#caixa1')
const cursos = ['JavaScript', 'PHP', 'MySQL', 'Python', 'HTML', 'CSS']

cursos.map((elemento, indice) => {
    const novaCaixinha = document.createElement('div')
    const botao_lixeira = document.createElement('img')

    novaCaixinha.setAttribute('id', 'c' + (indice + 1))
    novaCaixinha.setAttribute('class', 'cursos')
    novaCaixinha.innerHTML = elemento
    
    botao_lixeira.setAttribute('id', 'img')
    botao_lixeira.setAttribute('src', 'img/lixeira.png')
    botao_lixeira.setAttribute('class', 'imagens')

    novaCaixinha.appendChild(botao_lixeira)

    botao_lixeira.addEventListener('click', (evt) => {
        console.log(evt.target)
        caixa1.removeChild(evt.target.parentNode)
    })

    caixa1.appendChild(novaCaixinha)
})