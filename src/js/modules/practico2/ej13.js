export const calcularEjercicio13P2 = () => {
    const valor = document.getElementById("ejercicio13P2Valor")
    const valorNum = parseInt(valor.value)
    const resultado = document.getElementById("ej13P2Resultado")
    valor.style = ``

    if (valorNum >= 0 && valorNum <= 100) {
        if (valorNum >= 0 && valorNum <= 69) {
            resultado.textContent = `Lamentablemente, en esta evaluación no has alcanzado el puntaje mínimo requerido para aprobar el curso. Te animamos a revisar los contenidos y prepararte para futuras instancias`
        } else if (valorNum >= 70 && valorNum <= 85) {
            resultado.textContent = `¡Bien! Has alcanzado el puntaje necesario para salvar el curso. Sin embargo, para aprobarlo definitivamente, deberás rendir un examen. ¡Sigue esforzándote!`
        } else if (valorNum >= 86 && valorNum <= 100) {
            resultado.textContent = `¡Felicitaciones! Has obtenido un excelente resultado y has aprobado el curso de forma directa (exoneración). Tu dedicación y esfuerzo han dado frutos.`
        }
    } else {
        resultado.textContent = `Ingrese un valor válido`
        valor.style = `background-color: red`
    }
};