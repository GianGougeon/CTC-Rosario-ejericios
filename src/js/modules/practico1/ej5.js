let ejercicio5ValorInput = document.getElementById("ejercicio5Valor")
let ej5Resultado = document.getElementById("ej5Resultado")

const calcularEjercicio5 = () => {
    let valor = parseFloat(ejercicio5ValorInput.value)
    let test = valor % 3
    console.log(test);
    if (valor % 3 === 0) {
        ej5Resultado.innerHTML = "Es multiplo de 3"

    } else {
        ej5Resultado.innerHTML = "No es multiplo de 3"

    }

}
export { calcularEjercicio5 }