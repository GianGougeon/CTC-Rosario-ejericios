let ejercicio7ValorInput = document.getElementById("ejercicio7Valor")
let ejercicio7ValorInput2 = document.getElementById("ejercicio7Valor2")
let ej7Resultado = document.getElementById("ej7Resultado")

const calcularEjercicio7 = () => {
    let valor = parseInt(ejercicio7ValorInput.value)
    let valor2 = parseInt(ejercicio7ValorInput2.value)

    if (valor == valor2) {
        ej7Resultado.innerHTML = "Ingrese otros valores"
    } else if (valor < valor2) {
        ej7Resultado.innerHTML = "El primer valor " + valor + " es menor que el segundo valor " + valor2
    } else {
        ej7Resultado.innerHTML = "El segundo valor " + valor2 + " es menor que el primer valor " + valor
    }
}

export { calcularEjercicio7 }