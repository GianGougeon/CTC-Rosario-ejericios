const diaSeleccionado = (variable, dia) => {
    variable.textContent = `${dia}`
}
export const calcularEjercicio10P2 = () => {
    const valor = document.getElementById("ejercicio10P2Valor")
    const valorNum = parseInt(valor.value)
    const resultado = document.getElementById("ej10P2Resultado")

    valor.style = ``
    if (valorNum > 0 && valorNum <= 7) {
        switch (valorNum) {
            case 1:
                diaSeleccionado(resultado, "Lunes")
                break;
            case 2:
                diaSeleccionado(resultado, "Martes")
                break;
            case 3:
                diaSeleccionado(resultado, "Miércoles ")
                break;
            case 4:
                diaSeleccionado(resultado, "Jueves")
                break;
            case 5:
                diaSeleccionado(resultado, "Viernes")
                break;
            case 6:
                diaSeleccionado(resultado, "Sábado")
                break;
            case 7:
                diaSeleccionado(resultado, "Domingo")
                break;
            default:
                break;
        }
    } else {
        valor.style = `background-color: red`
        resultado.innerHTML = `Ingrese un valor válido`
    }

};