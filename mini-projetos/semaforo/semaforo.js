const img = document.querySelector('img#semaforo')
const botoes = document.getElementById('botoes')
let indiceCor = 0
let idIntervalo = null

const ligaSemaforo = (evento) => {
    pararAutomatico()
    ligaSinal[evento.target.id]()
}

const atualizaIndice = () => {
    indiceCor = indiceCor < 2 ? ++indiceCor : 0
}

const mudaCor = () => {
    const cores = ['vermelho', 'amarelo', 'verde']
    let cor = cores[indiceCor]
    
    ligaSinal[cor]()
    atualizaIndice()
}

const pararAutomatico = () => {
    clearInterval(idIntervalo)
}

const ligaSinal = {
    'vermelho': () => {img.src = './imagens/vermelho.png'},
    'amarelo': () => {img.src = './imagens/amarelo.png'},
    'verde': () => {img.src = './imagens/verde.png'},
    'automatico': () => idIntervalo = setInterval(mudaCor, 1000)
}

botoes.addEventListener('click', ligaSemaforo)