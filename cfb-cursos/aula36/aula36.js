const caixa = document.querySelector('section#caixa1')
const caixa_html = document.querySelector('div#c1')
const cursos = [...document.querySelectorAll('.curso')]

caixa.addEventListener('click', (evento) => {
    console.log('Clicou')
})

// Impede apenas um elemento
caixa_html.addEventListener('click', (evento) => {
    evento.stopPropagation()
})

// Impede todos os elementos
cursos.map((elemento) => {
    elemento.addEventListener('click', (evento) => {
        console.log(evento)
        evento.stopPropagation()
    })
})

// Supondo que o elemento B esteja dentro do elemento A, o método stopPropagation() em B impede a propagação de "gatilhos" do elemento A para o elemento B 