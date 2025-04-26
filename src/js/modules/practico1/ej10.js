let ejercicio10ValorInput = document.getElementById("ejercicio10Valor");
let ej10Resultado = document.getElementById("ej10Resultado");

const paisesSudamericanos = [
    "argentina",
    "bolivia",
    "brasil",
    "chile",
    "colombia",
    "ecuador",
    "guyana",
    "paraguay",
    "peru",
    "perú",
    "surinam",
    "uruguay",
    "venezuela"
];

const calcularEjercicio10 = () => {
    let valor = ejercicio10ValorInput.value.toLowerCase()
    if (paisesSudamericanos.includes(valor)) {
        ej10Resultado.innerHTML = "Es un país Sudamericano"
    } else {
        ej10Resultado.innerHTML = "No es un país Sudamericano"

    }

}

export { calcularEjercicio10 };