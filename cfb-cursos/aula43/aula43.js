const cursos = ['JavaScript', 'HTML', 'CSS', 'Java', 'React', 'Redes', 'Banco de Dados']
const caixa_cursos = document.getElementById('caixa-cursos')
const botao_selecionar = document.getElementById('botao-selecionar')

cursos.map((elemento, indice) => {
    const caixa_curso = document.createElement('div')
    const botao_marcar = document.createElement('input')

    botao_marcar.setAttribute('type', 'radio')
    botao_marcar.setAttribute('id', 'cid' + (indice + 1))
    botao_marcar.setAttribute('name', 'cursos')

    caixa_curso.innerHTML = elemento
    caixa_curso.setAttribute('id', 'c' + (indice + 1))
    caixa_curso.setAttribute('class', 'cursos')

    caixa_curso.appendChild(botao_marcar)

    caixa_cursos.appendChild(caixa_curso)
})

const marcar = [...document.querySelectorAll('input[name="cursos"]')]

botao_selecionar.addEventListener('click', () => {
    let texto_selecionado = marcar.filter((elemento) => {   
        return elemento.checked
    })

    texto_selecionado = texto_selecionado[0] // Garantia de que estamos trabalhando com o elemento e não com o array!

    texto_selecionado = texto_selecionado.parentNode.textContent

    window.alert(`${texto_selecionado} foi selecionado!`)
})