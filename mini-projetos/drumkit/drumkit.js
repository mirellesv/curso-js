const container_teclas = document.querySelector('#container-teclas')
const sons = [
    { id: "0", som: "boom.wav" },
    { id: "1", som: "clap.wav" },
    { id: "2", som: "hihat.wav" },
    { id: "3", som: "kick.wav" },
    { id: "4", som: "openhat.wav" },
    { id: "5", som: "ride.wav" },
    { id: "6", som: "snare.wav" },
    { id: "7", som: "tink.wav" },
    { id: "8", som: "tom.wav" },
]
const teclas = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]

const criar_teclas = () => {
    teclas.forEach((tecla) => {
        // Criação das divs para cada tecla
        const nova_div = document.createElement('div')
        nova_div.setAttribute('id', `tecla_${tecla}`)
        nova_div.innerHTML = `<p>${tecla}</p>`
        nova_div.classList.add('letras')
        // Adição das novas divs a container_teclas
        container_teclas.appendChild(nova_div)
    })
}

criar_teclas()

function tocar_som(tecla_escolhida) {
    // Encontrando o som associado a tecla escolhida
    const indice_associado = teclas.indexOf(tecla_escolhida)
    const div = document.querySelector(`#tecla_${tecla_escolhida}`)
    div.classList.add('click')
    window.setTimeout(function(){ // A classe click é adicionada e depois removida depois de 0.6 s
        div.classList.remove('click')
    }, 600)
    // div.classList.remove('click')
    console.log(div)
        if (Number(teclas.indexOf(tecla_escolhida)) !== -1) { // Garantia de que o som somente irá tocar quando uma tecla for escolhida (e não quando outro lugar na div_container for clicado)
            const som_escolhido = new Audio(`./sounds/${sons[indice_associado].som}`)

            som_escolhido.play()
        }
}

function tocar_som_click(evt) {
    const tecla_pressionada = evt.target.outerText

    tocar_som(tecla_pressionada)
}

function tocar_som_teclado(evt) {
    const tecla_digitada = evt.key.toUpperCase()

    tocar_som(tecla_digitada)
}

container_teclas.addEventListener('click', tocar_som_click)
window.addEventListener('keydown', tocar_som_teclado)