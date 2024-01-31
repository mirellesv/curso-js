const caixa = document.getElementById("caixa1")
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "Native"]

// Criando novos elementos dinamicamente
// const novaDiv = document.createElement("div")
// caixa.appendChild(novaDiv)
// novaDiv.innerHTML = 'ReactNative'
// novaDiv.setAttribute('id', 'c7')
// novaDiv.setAttribute('class', 'curso c1')

cursos.map((elemento, chave) => {
    const novaDiv = document.createElement("div")
    caixa.appendChild(novaDiv)
    novaDiv.setAttribute("id", "c" + (chave+1))
    novaDiv.setAttribute("class", "curso c1")
    novaDiv.innerHTML = elemento
})

