const objeto = [...document.querySelectorAll('.curso')]

objeto.map((elemento) => {
    elemento.addEventListener('click', (evt) => {
        const el = evt.target
        el.classList.add('destaque')
        console.log(el.innerHTML + ' foi clicado')
    })
})
