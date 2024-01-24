const cursos = [...document.getElementsByClassName('curso')]
const cursos1 = [...document.getElementsByClassName('c1')]
const cursos2 = [...document.getElementsByClassName('c2')]
const cursoEspecial = document.getElementsByClassName('curso')[6]

console.log(cursoEspecial)

cursos1.map((elemento) => {
    elemento.classList.add("destaque")
})