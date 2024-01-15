// Parâmetro REST permite que uma função receba n parâmetros

function soma(...valores){
    const tam = valores.length
    let soma = 0

    for(let i of valores){
        soma += i
    }

    return soma
}

let res = soma(2, 3, 5, 2, 9)

console.log(res)