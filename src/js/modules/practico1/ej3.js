// Ejercicio 3: Escribir un script que permita introducir un nombre y que en el caso de que sea "Ramón" muestre un mensaje felicitándolo por su regreso en caso contrario sólo saludarlo.
let ejercicio3ValorInput = document.getElementById("ejercicio3Valor")
let resultado = document.getElementById("ej3Resultado")

const calcularEjercicio3 = () => {
    const valor = ejercicio3ValorInput.value.toLowerCase()
    if (valor == "ramon") {
        resultado.innerHTML = "Felicidades por regresar Ramon!!"
    } else {
        resultado.innerHTML = "Buenas " + valor
    }

    if (!isNaN(valor)) {
        resultado.innerHTML = "Por favor ingresa un nombre nuevamente!"
    }
}

export { calcularEjercicio3 }