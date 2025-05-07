const PrimerLetraM = (string) => {
    const primerLetra = string.charAt(0)
    const resto = string.slice(1)
    /* Primera letra en mayus */
    const PrimerLetraM = primerLetra.toUpperCase()
    /* retorna todo */
    return PrimerLetraM + resto


}
export const calcularEjercicio2P3 = () => {
    const valor = document.getElementById("ejercicio2P2Valor")
    const valotToString = valor.value.toString()
    const resultado = document.getElementById("ej2P3Resultado")
    const resultado2 = document.getElementById("ej2P3Resultado2")
    const resultado3 = document.getElementById("ej2P3Resultado3")


    if (valotToString) {
        resultado.innerHTML = `Resultado Mayúsculas: <span>${valotToString.toLowerCase()}</span>`
        resultado2.innerHTML = `Resultado Minúsculas: <span>${valotToString.toUpperCase()}</span>`
        resultado3.innerHTML = `Resultado primer letra Mayúsculas: <span>${PrimerLetraM(valotToString)}</span>`

    } else {
        resultado.textContent = `Escriba algo válido`
    }

}