// ---------------- PERCORRENDO ELEMENTOS DE UM ARRAY ----------------

cursos = ['HTML', 'CSS', 'JavaScript', 'React']

const percorrer = cursos.map((elemento, indice) =>{
    return "<div>" + elemento + "</div>"
})

console.log(percorrer)

// ---------------- DOBRAR ELEMENTOS DE UM ARRAY ----------------

let array1 = [1, 2, 3, 4]

let array2 = array1.map((elemento) => elemento * 2)

console.log(array2)

// ---------------- CONVERTER DE CELSIUS PARA FAHRENHEIT ----------------
let temperaturasF = [0, 32, 45, 50, 60, 100]

function converter(x){
    return Math.round(((x - 32) * (5/9)))
}

let temperaturasC = temperaturasF.map(converter)

console.log(temperaturasC)