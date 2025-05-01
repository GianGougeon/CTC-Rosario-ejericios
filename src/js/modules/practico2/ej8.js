/* Primer vamor es negativo = Suma de valor2 y valor3 */
/* Primer vamor es positivo = multi de valor2 y valor3 */
/* Primer vamor es 0 = resta de valor2 y valor3 */

export const calcularEjercicio8P2 = () => {
    const valor = parseInt(document.getElementById("ejercicio8P2Valor").value)
    const valor2 = parseInt(document.getElementById("ejercicio8P2Valor2").value)
    const valor3 = parseInt(document.getElementById("ejercicio8P2Valor3").value)
    const resultado = document.getElementById("ej8P2Resultado")
    /* si es negativo */
    if (valor < 0) {
        let suma = valor2 + valor3
        resultado.innerHTML = `${suma}`
    }
    /* si es 0 */
    if (valor === 0) {
        let resta = valor2 - valor3
        resultado.innerHTML = `${resta}`
    }
    /* si es positivo */
    if (valor > 0) {
        let multi = valor2 * valor3
        resultado.innerHTML = `${multi}`
    }
};