const visor = document.getElementById("texto-visor")
const botoes = document.querySelectorAll(".botao")

botoes.forEach((botao) => {
    botao.addEventListener('click', clicou_numero)
})

function clicou_numero(e){
    // A expressão regular irá extrair o número do ID. Por exemplo,
    // de botao4, será pego apenas o 4. O match retorna uma matriz,
    // cujo elemento de interesse está na posição inicial 
    const texto = e.srcElement.id.match(/\d+/)[0]

    visor.innerHTML += `${texto}`
}