const container_teclas = document.querySelector('#container-teclas')
const sons = [
    {id: "1", som: "boom.wav"},
    {id: "2", som: "clap.wav"},
    {id: "3", som: "hihat.wav"},
    {id: "4", som: "kick.wav"},
    {id: "5", som: "openhat.wav"},
    {id: "6", som: "ride.wav"},
    {id: "7", som: "snare.wav"},
    {id: "8", som: "tink.wav"},
    {id: "9", som: "tom.wav"},
]
const teclas = ["A", "S", "D", "F", "G", "H", "I", "J", "K", "L"]

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

function tocar_som(evt){
    const tecla_pressionada = evt.target.outerText
    const indice_associado = teclas.indexOf(tecla_pressionada)

    // sons[indice_associado].som.play()
}

container_teclas.addEventListener('click', tocar_som)
