let arrEj4P3 = []
const ejercicio4P3Valor = document.getElementById("ejercicio4P3Valor")
const ej4P3Resultado = document.getElementById("ej4P3Resultado")
export const calcularEjercicio4P3 = () => {
    const valor = ejercicio4P3Valor.value
    ejercicio4P3Valor.style = ""

    if (valor == "") {
        ejercicio4P3Valor.style = "background-color:red"
        ej4P3Resultado.innerHTML = `Inserte un texto válido`
    } else {
        if (arrEj4P3.length < 4) {
            arrEj4P3.push(valor)
            ejercicio4P3Valor.value = ""
            if (arrEj4P3.length === 4) {
                ej4P3Resultado.innerHTML = `<p>Has ingresado 4 frases:</p>
                    <span>${arrEj4P3[0]}</span>
                    <span>${arrEj4P3[1]}</span>
                    <span>${arrEj4P3[2]}</span>
                    <span>${arrEj4P3[3]}</span>`
            } else {
                ej4P3Resultado.innerHTML = `Ingrese ${4 - arrEj4P3.length} frases más`
            }
        }
    }
    ejercicio4P3Valor.focus()
}
export const calcularEjercicio4P3BorrarArr = () => {
    ejercicio4P3Valor.value = ``
    arrEj4P3.length = 0
    ej4P3Resultado.innerHTML = ``
}
