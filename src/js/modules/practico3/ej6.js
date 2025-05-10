const styles = (input, key) => {
    switch (key) {
        case 1:
            return input.style = ``
        case 2:
            return input.style = `background-color:red`
    }
}
const contadorEspacios = (inputValue) => {
    let hayEspacio = false
    for (let index = 0; index < inputValue.length; index++) {
        if (inputValue[index] === " ") {
            hayEspacio = true
        }
    }
    return hayEspacio
}
export const calcularEjercicio6P3 = () => {
    const input = document.getElementById("ejercicio6P3Valor")
    const input2 = document.getElementById("ejercicio6P3Valor2")
    const input3 = document.getElementById("ejercicio6P3Valor3")
    const resultado = document.getElementById("ej6P3Resultado")
    let inputValue = input.value.trim()
    let inputValue2 = input2.value.trim()
    let inputValue3 = input3.value.trim()
    let hayError = false;
    resultado.innerHTML = "";

    styles(input, 1)
    styles(input2, 1)
    styles(input3, 1)

    // validar que no tenga espacios
    if (inputValue === "" || contadorEspacios(inputValue)) {
        resultado.innerHTML += "Ingrese nuevamente la frase n1, no puede estar vacía ni contener espacios<br>";
        styles(input, 2);
        hayError = true;
    }

    if (inputValue2 === "" || contadorEspacios(inputValue2)) {
        resultado.innerHTML += "Ingrese nuevamente la frase n2, no puede estar vacía ni contener espacios<br>";
        styles(input2, 2);
        hayError = true;
    }

    if (inputValue3 === "" || contadorEspacios(inputValue3)) {
        resultado.innerHTML += "Ingrese nuevamente la frase n3, no puede estar vacía ni contener espacios<br>";
        styles(input3, 2);
        hayError = true;
    }

    if (!hayError) {
        resultado.innerHTML = inputValue + " " + inputValue2 + " " + inputValue3;
    }

}