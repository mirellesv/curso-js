const visor = document.getElementById("texto-visor")
const botoes = document.querySelectorAll(".botao")
let operador1 = 0, operador2 = 0, operacao = "", resultado = 0
let cliques = 0

botoes.forEach((botao) => {
    botao.addEventListener('click', clicou_botao)
})

function clicou_botao(e){
    // É extraído da string, a substring que caracteriza o botão
    const texto = e.srcElement.id.substring(5)

    if(!isNaN(texto) && (cliques == 0 || cliques == 1)){
        visor.innerHTML += `${texto}`
        if(cliques == 0){
            operador1 = Number(visor.innerHTML)
        }else if(cliques == 1){
            // A string do visor é dividida em três e é obtido o segundo operador
            const textoOperador2 = visor.innerHTML.split(" ")[2]
            operacao = visor.innerHTML.split(" ")[1]
    
            operador2 = Number(textoOperador2)
        }
        
        console.log("Operador 1: ", operador1)
        console.log("Operador 2: ", operador2)
    }else {
        // A calculadora realiza operações de 2 em 2
        cliques++ 

        if(texto != "="){
            visor.innerHTML += ` ${texto} `
        }else{
            switch(operacao){
                case '+':
                    resultado = operador1 + operador2
                    break
                case '-':
                    resultado = operador1 - operador2
                    break
                case '*':
                    resultado = operador1 * operador2
                    break
                case '/':
                    resultado = operador1 / operador2
                    break
                default:
                    resultado = 0
            }

            visor.innerHTML = `${resultado}`
        }
    }
}