const visor = document.getElementById("texto-visor")
const botoes = document.querySelectorAll(".botao")
let operador1 = null, operador2 = null, operacao = "", resultado = 0
let cliques = 0, calculou = false

botoes.forEach((botao) => {
    botao.addEventListener('click', clicou_botao)
})

function clicou_botao(e){
    // É extraído da string, a substring que caracteriza o botão
    const texto = e.srcElement.id.substring(5)

    console.log(operador1)
    console.log(operador2)

    let operador_unario = texto == "CE" || texto == "C" || texto == "A" || texto == "±" || texto == "," ? true : false

    // Apaga o visor sempre que for feita uma conta
    if(calculou == true){
        calculou = false
        cliques = 0;

        if(texto !== operacao){
            visor.innerHTML = ``
        }else{
            visor.innerHTML = `${operador1}`
        }
    }

    if (operador_unario == false){
        if(!isNaN(texto) && (cliques == 0 || cliques == 1)){
            if(cliques == 0){
                if(visor.innerHTML.charAt(0) !== '0'){
                    visor.innerHTML += `${texto}`
                }else{
                    visor.innerHTML = texto
                }

                if(visor.innerHTML.includes(",")){
                    operador1 = Number(visor.innerHTML.replace(",", "."))
                }else{
                    operador1 = Number(visor.innerHTML)
                }
                
            }else if(cliques == 1 && texto !== operacao){
                // A string do visor é dividida em três e é obtido o segundo operador
                
                if(visor.innerHTML.split(" ")[2].charAt(0) !== '0'){
                    visor.innerHTML += `${texto}`
                }else{
                    console.log(visor.innerHTML.split(" ")[1])

                    visor.innerHTML = `${visor.innerHTML.split(" ")[0]} ${visor.innerHTML.split(" ")[1]} ${texto}`

                    
                }

                let textoOperador2 = visor.innerHTML.split(" ")[2]
                operacao = visor.innerHTML.split(" ")[1]

                if(textoOperador2.includes(",")){
                    textoOperador2 = textoOperador2.replace(",", ".")
                }

                console.log(textoOperador2)

                operador2 = Number(textoOperador2)
            }
        }else {
            // A calculadora realiza operações de 2 em 2
            cliques++

            if(texto !== "="){
                 visor.innerHTML = `${operador1} ${texto} `

                 cliques = 1
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

                if(isFinite(resultado)){
                    let texto_resultado = resultado.toString()
            
                    // O número terá como separador decimal a ","
                    if(texto_resultado.includes(".")){
                        texto_resultado = texto_resultado.replace(".", ",")
                        resultado = texto_resultado
                    }
            
                    visor.innerHTML = `${resultado}`
                }else{
                    console.log(resultado)
                    visor.innerHTML = `Resultado inválido!`
                }

                calculou = true
                operador1 = resultado
                operador2 = 0
            }
        }
    }else{
        switch(texto){
            case 'CE':
                if(operador1 !== 0){
                    if(operador2 !== null){
                        operador2 = 0
                        visor.innerHTML = visor.innerHTML.replace(visor.innerHTML.split(" ")[2], "")
                    }else{
                        operador1 = 0
                        visor.innerHTML = ``
                    }
                }
                break
            case 'A':
                // Remove o último dígito inserido
                const novoTexto = visor.innerHTML.slice(0, -1)
                visor.innerHTML = novoTexto
                break
            case 'C':
                // Apaga todos os dígitos inseridos
                visor.innerHTML = ``
                operador1 = 0
                operador2 = 0
                cliques = 0
                break
            case '±':
                console.log(visor.innerHTML.length)
                if(operador1 !== 0 && visor.innerHTML.length !== 0){
                    if(operador2 !== null){
                        operador2 = operador2 * (-1)
                        if(operador2 < 0){
                            visor.innerHTML = visor.innerHTML.split(" ")[0] + visor.innerHTML.split(" ")[1] + " (-" + visor.innerHTML.split(" ")[2] + ")"
                        }
                    }else{
                        operador1 = operador1 * (-1)

                        visor.innerHTML = Math.sign(operador1) === -1 ? visor.innerHTML = "-" + visor.innerHTML : visor.innerHTML = `${operador1}`
                    }
                }
                break
            case ',':
                if(operador2 === null){
                    if(operador1 !== null){
                        visor.innerHTML = `${operador1},`
                    }
                }else {
                    visor.innerHTML = `${operador1} ${operacao} ${operador2},`
                }
                break
            default:
                resultado = 0
        }
    } 
}