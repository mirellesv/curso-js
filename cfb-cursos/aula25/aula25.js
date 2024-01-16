//const g = function(v1, v2){return v1 + v2}

// Utilizando Arrow Function

const g = (v1, v2) => {return v1 + v2}
/*  Se a função possuir apenas 1 parâmetro, os parênteses não são necessários:
    const nome = (n) => {return n} OU const nome = n => {return n}

    Se a função possuir apenas uma linha de código, o retur não é necessário:
    const g = (v1, v2) => {return v1 + v2} OU const g = (v1, v2) => v1 + v2
*/

console.log(g(10, 2))