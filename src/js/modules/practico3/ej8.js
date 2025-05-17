// validar q si hay espacios
const hayEspacios = (espacio) => {
    for (let index = 0; index < espacio.length; index++) {
        if (espacio[index] == " ") {
            return true
        }
    }
    return false
}
// validar q si hay letras
const hayLetras = (letra) => {
    let contador = 0
    // mas de una letra
    for (let index = 0; index < letra.length; index++) {
        contador++
        if (contador > 1) {
            return true

        }
    }
    // Solo hay una letra
    return false

}
export const calcularEjercicio8P3 = () => {
    const input = document.getElementById("ejercicio8P3Valor")
    const input2 = document.getElementById("ejercicio8P3Valor2")
    const resultado = document.getElementById("ej8P3Resultado")

    const value = input.value.trim()
    const value2 = input2.value.trim()

    input.style = ``
    input2.style = ``

    resultado.innerHTML = ``

    let valorValido = true;
    let valor2Valido = true;

    if (hayEspacios(!value) || !value) {
        input.style = `background-color:red`
        resultado.innerHTML = `Ingrese una frase que contenga espacios <br>`
        valorValido = false;
        input.focus()
    }
    if (hayEspacios(value2 || !value2) || value2 == "" || hayLetras(value2)) {
        input2.style = `background-color:red`
        resultado.innerHTML += `Ingrese una frase que contenga una letra`
        valor2Valido = false;
        input2.focus()
    }
    // if (valorValido && valor2Valido) {
    //     let valueSlice = value.split(" ")
    //     let join = valueSlice.join(value2)
    //     resultado.innerHTML = `Resultado de la frase <br> <span style="color:red">${join}</span>`
    // }
    if (valorValido && valor2Valido) {
        let valueSlice = value.split(" ");
        let coloredJoin = "";
        for (let i = 0; i < valueSlice.length; i++) {
            coloredJoin += valueSlice[i];
            if (i < valueSlice.length - 1) {
                coloredJoin += `<span style="color:red">${value2}</span>`;
            }
        }
        resultado.innerHTML = `Resultado de la frase <br> <span>${coloredJoin}</span>`;
    }
}