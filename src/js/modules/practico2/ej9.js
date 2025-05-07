export const calcularEjercicio9P2 = () => {
    const valor = document.getElementById("ejercicio9P2Valor")
    const valor2 = document.getElementById("ejercicio9P2Valor2")
    const resultado = document.getElementById("ej9P2Resultado")
    const ejercicio9P2ValorSelect = document.getElementById("ejercicio9P2ValorSelect").value
    const valorNum = parseInt(valor.value)
    const valorNum2 = parseInt(valor2.value)
    valor.style = ``
    valor2.style = ``

    if (!isNaN(valorNum) && !isNaN(valorNum2)) {
        let calculo
        switch (ejercicio9P2ValorSelect) {
            case "+":
                calculo = valorNum + valorNum2
                resultado.innerHTML = `El resultado es ${calculo}`
                break;
            case "-":
                calculo = valorNum - valorNum2
                resultado.innerHTML = `El resultado es ${calculo}`
                break;
            case "*":
                calculo = valorNum * valorNum2
                resultado.innerHTML = `El resultado es ${calculo}`
                break;
            case "/":
                calculo = valorNum / valorNum2
                resultado.innerHTML = `El resultado es ${calculo}`
                break;
        }
    } else {
        resultado.textContent = `Ingrese un valor valido 1`
    }
    if (isNaN(valorNum)) {
        valor.style = `background-color: red`
        resultado.textContent = `Ingrese un valor valido`
    }
    if (isNaN(valorNum2)) {
        valor2.style = `background-color: red`
        resultado.textContent = `Ingrese un valor valido`
    }

};