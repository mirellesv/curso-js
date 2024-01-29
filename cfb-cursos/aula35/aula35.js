// Minha resolução antes do desafio de transferir os cursos de volta
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

// Minha resolução depois do desafio de transferir os cursos de volta
const caixa1 = document.querySelector("#caixaesq")
const caixa2 = document.querySelector('#caixadir')
const botao = document.getElementById('botao')
const cursos = [...document.querySelectorAll('.curso')]

cursos.map((elemento) => {
    elemento.addEventListener('click', (evt) => {
        const curso = evt.target
        curso.classList.toggle('destaque')
    })
})

botao.addEventListener('click', () => {
    const cursosSelecionados = [...document.querySelectorAll('.destaque')]
    const cursosNaoSelecionados = []
    
    cursosSelecionados.map((elemento) => {
        caixa2.appendChild(elemento)
    })

    // const cursosNaoSelecionados = [...document.querySelectorAll(".curso:not(.destaque)")] Selecionando apenas aqueles elementos que são da classe curso E que não pertencem a classe destaque
    cursos.map((elemento) => {
        if(elemento.classList.contains('destaque') == false){
            cursosNaoSelecionados.push(elemento)
            caixa1.appendChild(elemento)
        }
    })
})