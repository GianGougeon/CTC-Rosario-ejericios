export const calcularEjercicio7P2 = () => {
    let ej7P2Resultado = document.getElementById("ej7P2Resultado")
    let ejercicio7P2Valor = document.getElementById("ejercicio7P2Valor")
    let ejercicio7P2Valor2 = document.getElementById("ejercicio7P2Valor2")

    let valor = parseInt(ejercicio7P2Valor.value)
    let valor2 = parseInt(ejercicio7P2Valor2.value)

    /* Reinicio de valores */
    ej7P2Resultado.innerHTML = ``
    ejercicio7P2Valor.style = ``
    ejercicio7P2Valor2.style = ``


    if (valor2 > 0 && valor2 < 100 && valor > 0) {
        let recargo = valor * valor2 / 100
        let importeFinal = valor + recargo
        ej7P2Resultado.innerHTML = `El nuevo importe seria ${importeFinal}`
    } else {
        ej7P2Resultado.innerHTML = `<b>Por favor ingrese valores validos</b>`
        if (valor <= 0 || isNaN(valor)) {
            ejercicio7P2Valor.style = `background-color: red`
        }
        if (valor2 <= 0 || valor2 >= 100 || isNaN(valor2)) {
            console.log("esilo");
            ejercicio7P2Valor2.style = `background-color: red`
        }
    }
};
