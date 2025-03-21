const visor = document.getElementById("texto-visor")
const botoes = document.querySelectorAll(".botao")
let operador1 = null, operador2 = null, operacao = "", resultado = 0
let cliques = 0, calculou = false

botoes.forEach((botao) => {
    botao.addEventListener('click', clicou_botao)
})

// Função que apaga o visor sempre que for feita uma conta
function apaga_visor(texto){
    if(calculou == true){
        calculou = false
        cliques = 0;

        if(texto !== operacao){
            visor.innerHTML = ``
        }else{
            visor.innerHTML = `${operador1}`
        }
    }
}

// Função que faz o tratamento de números decimais (troca a vírgula pelo ponto para que as operações sejam realizadas)
function trata_decimal(textoOperador){
    let operador

    textoOperador = textoOperador.toString(textoOperador)

    if(textoOperador.includes(",")){
        operador = Number(textoOperador.replace(",", "."))
    }else{
        operador = Number(textoOperador)
    }

    return operador
}

// Função que realiza as operações aritméticas (adição, subtração, multiplicação e divisão)
function faz_operacao_aritmetica(){
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

    resultado = resultado.toFixed(2)
    
    return resultado
}

// Função que realiza a operação CE da calculadora
function faz_operacao_ce(){
    if(operador1 !== 0){
        if(operador2 !== null){
            operador2 = 0
            visor.innerHTML = visor.innerHTML.replace(visor.innerHTML.split(" ")[2], "")
        }else{
            operador1 = 0
            visor.innerHTML = ``
        }
    }
}

// Função que realiza a função de apagar o último dígito inserido na calculadora
function faz_operacao_a(){
    const novoTexto = visor.innerHTML.slice(0, -1)
    visor.innerHTML = novoTexto
}

// Função que realiza a função de apaga todos os dígitos inseridos na calculadora
function faz_operacao_c(){
    visor.innerHTML = ``
    operador1 = 0
    operador2 = 0
    cliques = 0
}

// Função que realiza a função de inverter o sinal de um operador na calculadora
function faz_operacao_inverter_sinal(){
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
}

// Função que realiza a função de adicionar vírgula a um operador na calculadora
function faz_operacao_adicionar_virgula(){
    if(operador2 === null){
        if(operador1 !== null){
            visor.innerHTML = `${operador1},`
        }
    }else {
        visor.innerHTML = `${operador1} ${operacao} ${operador2},`
    }
}

/* Função que realiza o tratamento do resultado 
    - Converte de '.' para ',', visando uma melhor visualização
    - Mostra resultado inválido para uma operação errada
*/
function trata_resultado(){
    if(isFinite(resultado)){
        let texto_resultado = resultado.toString()

        // O número terá como separador decimal a ","
        if(texto_resultado.includes(".")){
            texto_resultado = texto_resultado.replace(".", ",")
            resultado = texto_resultado
        }

        visor.innerHTML = `${resultado}`
    }else{
        visor.innerHTML = `Resultado inválido!`
    }
}

function obtem_operador1(texto){
    if(visor.innerHTML.charAt(0) !== '0'){
        visor.innerHTML += `${texto}`
    }else{
        visor.innerHTML = texto
    }

    textoOperador1 = visor.innerHTML

    operador1 = trata_decimal(textoOperador1)
}

function obtem_operador2(texto){
    // A string do visor é dividida em três e é obtido o segundo operador

    if(visor.innerHTML.split(" ")[2].charAt(0) !== '0'){
        visor.innerHTML += `${texto}`
    }else{
        visor.innerHTML = `${visor.innerHTML.split(" ")[0]} ${visor.innerHTML.split(" ")[1]} ${texto}`
    }

    let textoOperador2 = visor.innerHTML.split(" ")[2]
    operacao = visor.innerHTML.split(" ")[1]

    operador2 = trata_decimal(textoOperador2)
}

function clicou_botao(e){
    // É extraído da string, a substring que caracteriza o botão
    let texto = e.srcElement.id.substring(5)

    let operador_unario = texto == "CE" || texto == "C" || texto == "A" || texto == "±" || texto == "," ? true : false

    apaga_visor(calculou, texto)

    // Se o usuário apertar algum operador antes de digitar o operador 1, o valor do operador 1 será assumido como 0
    if(['+', '-', '*', '/'].includes(texto) && !operador1){
        operador1 = 0
    }

    if (operador_unario == false){
        if(!isNaN(texto) && (cliques == 0 || cliques == 1)){
            if(cliques == 0){
                obtem_operador1(texto)
            }else if(cliques == 1 && texto !== operacao){
                obtem_operador2(texto)
            }
        }else {
            // A calculadora realiza operações de 2 em 2
            cliques++

            if(texto !== "="){
                 visor.innerHTML = `${operador1} ${texto} `

                 cliques = 1
            }else{  
                resultado = faz_operacao_aritmetica()
                console.log('Operador 1: ', operador1)
                console.log('Operador 2: ', operador2)

                trata_resultado()

                calculou = true

                operador1 = trata_decimal(resultado)
                operador2 = 0
            }
        }
    }else{
        switch(texto){
            case 'CE':
                faz_operacao_ce()

                break
            case 'A':
                faz_operacao_a()

                break
            case 'C':
                faz_operacao_c()

                break
            case '±':
                faz_operacao_inverter_sinal()

                break
            case ',':
                faz_operacao_adicionar_virgula()

                break
            default:
                resultado = 0
        }
    } 
}