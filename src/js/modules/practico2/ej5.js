let ej5P2Resultado = document.getElementById("ej5P2Resultado")
let contadorEj5 = 0
/* Rango de valores Acendente */
const rangoASC = (i, f) => {
    for (let index = i; index <= f; index++) {
        if (index % 2 === 0) {
            let contador = contadorEj5++
            ej5P2Resultado.innerHTML = contador + 1;
        }
    }
}
/* Rango de valores Decendete */
const rangoDES = (i, f) => {
    for (let index = i; index >= f; index--) {
        if (index % 2 === 0) {
            let contador = contadorEj5++
            ej5P2Resultado.innerHTML = contador + 1;
        }
    }
}
export const calcularEjercicio5P2 = () => {
    let valor = parseInt(document.getElementById("ejercicio5P2Valor").value)
    let valor2 = parseInt(document.getElementById("ejercicio5P2Valor2").value)
    contadorEj5 = 0
    if (valor < valor2) {
        rangoASC(valor, valor2)
    } else {
        rangoDES(valor, valor2)
    }
};