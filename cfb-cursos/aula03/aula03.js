// Diferença entre var e let

function imprimir(){
    if(true){
        let nome = "Mirelle"
        console.log('Dentro da função, dentro do IF: ' + nome)
    }
    console.log('Dentro da função, fora do IF: ' + nome)
}

imprimir()
console.log('Fora da função, fora do IF: ' + nome)