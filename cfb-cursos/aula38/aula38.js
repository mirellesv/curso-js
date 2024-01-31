const caixa = document.getElementById('caixa1')
const botao_1 = document.getElementById('c1')

console.log(botao_1.parentNode)
console.log(caixa.getRootNode())
console.log(caixa.ownerDocument)
console.log(caixa.children[caixa.children.length - 1])
console.log(caixa.firstElementChild)
console.log(caixa.lastElementChild)