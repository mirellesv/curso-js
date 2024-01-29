// const cursos = [...document.querySelectorAll('.curso')]
// const copiar = document.getElementById('botao')
// const cursosDireita = document.getElementById('dir')

// cursos.map((elemento) => {
//     elemento.addEventListener('click', (evt) => {
//         const el = evt.target
//         el.classList.add('destaque')
//     })
// })

// const copiarCursos = () => {
//     cursos.map((elemento => {
//         if(elemento.classList.contains('destaque') == true){
//             cursosDireita.appendChild(elemento)
//         }
//     }))
// }

// copiar.addEventListener('click', copiarCursos)

const caixa1 = document.querySelector("#caixaesq")
const caixa2 = document.querySelector('#caixadir')
const botao = document.getElementById('botao')
const cursos = [...document.querySelectorAll('.curso')]
var cursosNaoSelecionados = []

cursos.map((elemento) => {
    elemento.addEventListener('click', (evt) => {
        const curso = evt.target
        curso.classList.toggle('destaque')
    })
})

botao.addEventListener('click', () => {
    const cursosSelecionados = [...document.querySelectorAll('.destaque')]
    
    cursosSelecionados.map((elemento) => {
        caixa2.appendChild(elemento)
    })

    cursos.map((elemento) => {
        if(elemento.classList.contains('destaque') == false){
            cursosNaoSelecionados.push(elemento)
            caixa1.appendChild(elemento)
        }
    })
})


console.log('Cursos não selecionados: ' + cursosNaoSelecionados)