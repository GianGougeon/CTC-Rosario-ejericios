let ejercicio8ValorInput = document.getElementById("ejercicio8Valor")
let ejercicio8ValorInput2 = document.getElementById("ejercicio8Valor2")
let ej8Resultado = document.getElementById("ej8Resultado")

const calcularEjercicio8 = () => {
    let valor = parseInt(ejercicio8ValorInput.value)
    let valor2 = parseInt(ejercicio8ValorInput2.value)

    if (valor == valor2) {
        ej8Resultado.innerHTML = "Ingrese otros valores"
    } else if (valor < valor2) {
        ej8Resultado.innerHTML = "La persona n1 es mas joven"
    } else {
        ej8Resultado.innerHTML = "La persona n2 es mas joven"
    }
}

export { calcularEjercicio8 }