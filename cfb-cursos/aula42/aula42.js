const idades = [10, 15, 12, 24, 23, 29, 30, 45]
// Assim como o método MAP, o filter pode receber os parâmetros valor, índice e array
const maiorIdade = idades.filter((valor) => {
    if(valor >= 18){
        return valor
    }
})

console.log(idades)
console.log(maiorIdade)