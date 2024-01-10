let pessoa = {nome: 'José', 
peso: 85.4, 
engordar(p){
    console.log('Engordou')
    this.peso += p
}}

pessoa.engordar(2)
console.log(`${pessoa.nome} pesa ${pessoa.peso} Kg`)