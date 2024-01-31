const botoes = document.querySelectorAll('.curso')
const caixa = document.getElementById('caixa1')
const neto = document.querySelector('#c1_2')

// console.log(botoes)

// // Botao 1 possui filhos?
// console.log(botoes[0].hasChildNodes) // Child conta o texto
// console.log(botoes[0].children) // Botao 1 possui filhos que são elementos?

// // if(botoes[0].children.length == 0){
// //     console.log('Não possui filhos')
// // }else{
// //     console.log('Possui filhos')
// // }

// // Utilizando operador ternário
// console.log(botoes[0].children.length == 0? 'Não possui filhos' : 'Possui filhos')

// Alteração por meio das relações do DOM
// caixa.firstElementChild.innerHTML = 'Teste'

// Conseguindo elementos acima além do parent
console.log(neto.parentNode.parentNode.parentNode.children[4])