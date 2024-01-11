/*
let valores = [1, 2, 3]
let valores2 = [...valores] // Mesma coisa que usar valores2 = valores
                            // Operador spread realiza cópias

console.log(valores)
console.log(valores2)
------------------------------------------------

let valores1 = [1, 2, 3]
let valores2 = [4, 5, 6]
let valores3 = [...valores1, ...valores2] // Spread realiza o espalhamento dos elementos dos vetores e pode ser usado para "juntar" os elementos de dois ou mais vetores

console.log(valores3)
------------------------------------------------
const usuario={
    nome: 'Mirelle',
    idade: 23,
    curso: 'Computação'
}

const usuario2={
    nome: 'Juliano',
    idade: 30
}

const usuario3 = {...usuario, ...usuario2}

console.log(usuario3) // Operador spread pode ser utilizado para pegar todos os atributos diferentes de um objeto e seus valores mais "recentes"
------------------------------------------------

const soma = (v1, v2, v3)=>{
    return v1 + v2 + v3
}

let valores = [1, 2, 3]

let res = soma(...valores)

console.log(res) 
------------------------------------------------*/

const obj1 = document.getElementsByTagName("div")
const obj2 = [...document.getElementsByTagName("div")]

obj2.forEach(element =>{
    element.innerHTML = 'Alô, mundo!'
})

console.log(obj1)
console.log(obj2)

// obj1 é uma coleção HTML, enquanto que obj2 é um array de elementos HTML. A coleção HTML recebe apenas elementos HTML, já ao array podemos adicionar outros tipos de elemento (que não são HTML). Também temos mais funções disponíveis com o array.