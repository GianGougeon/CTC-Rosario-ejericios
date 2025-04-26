// Ejercicio 4: Escribir un script que permita introducir la edad de una persona y me devuelva el año de su nacimiento.
let ejercicio4ValorInput = document.getElementById("ejercicio4Valor")
let ej4Resultado = document.getElementById("ej4Resultado")

const calcularEjercicio4 = () => {
    let fechaActual = new Date()
    let fechaYear = fechaActual.getFullYear()
    let valor = parseFloat(ejercicio4ValorInput.value);
    if (valor > fechaYear || valor === 0 || valor < 0) {
        ej4Resultado.innerHTML = "Ingrese una edad valida"
    } else {
        let valorYear = fechaYear - valor
        ej4Resultado.innerHTML = "Nacio en el año " + valorYear
    }
}
export { calcularEjercicio4 }