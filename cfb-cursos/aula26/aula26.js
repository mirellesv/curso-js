// Funções Aninhadas: Funções dentro de outras funções

const somar = val =>{
    let soma = 0

    for(let i of val){
        soma += i
    }

    return soma
}

const soma = (...valores) => {
    return somar(valores)
}

console.log(soma(10, 5, 15))