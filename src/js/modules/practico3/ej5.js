const cadena = (texto, indice, resultado, input2) => {
    const string = texto.charAt(indice + -1)
    if (string == "") {
        resultado.innerHTML = `Ingrese un número válido, el indice es incorrecto`;
        input2.style = `background-color:red`;
        input2.focus()
    } else {
        if (string == " ") {
            resultado.innerHTML = `El carácter en el índice, <span>${indice}</span>, Es un espacio`
        } else {
            resultado.innerHTML = `El carácter en el índice <span>${indice}</span> es <span>${string}</span>`
        }
    }
}
export const calcularEjercicio5P3 = () => {
    const input = document.getElementById("ejercicio5P3Valor")
    const input2 = document.getElementById("ejercicio5P3Valorv2")
    const resultado = document.getElementById("ej5P3Resultado")

    const valor = input.value
    const valor2 = parseInt(input2.value)


    input.style = ``
    input2.style = ``

    let valorValido = true;
    let valor2Valido = true;

    if (valor == "") {
        input.style.backgroundColor = 'red';
        resultado.innerHTML = 'Ingrese una cadena de caracteres';
        console.log(valor);
        input.focus()
        valorValido = false;
    }
    if (isNaN(valor2)) {
        input2.style.backgroundColor = 'red';
        resultado.innerHTML = 'Ingrese un número válido';
        input2.focus()
        valor2Valido = false;
    }
    if (valorValido && valor2Valido) {
        cadena(valor, valor2, resultado, input2);
    }
}