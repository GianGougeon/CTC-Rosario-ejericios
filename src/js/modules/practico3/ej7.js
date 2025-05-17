// validar q si hay espacios
const hayEspacios = (espacio) => {
    for (let index = 0; index < espacio.length; index++) {
        if (espacio[index] == " ") {
            return true
        }
    }
    return false
}
export const calcularEjercicio7P3 = () => {
    const input = document.getElementById("ejercicio7P3Valor")
    const value = input.value
    const result = document.getElementById("ej7P3Resultado")
    // reset style
    input.style = ``

    if (hayEspacios(value)) {
        input.style = `background-color:red`
        result.innerHTML = `Inserte un texto válido y sin espacios`

    } else {
        result.innerHTML = ``
        for (let index = 1; index <= 5; index++) {
            result.innerHTML += `Repeticion ${index}: ${value} <br>`
        }
    }
}