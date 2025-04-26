// Ejercicio 2 : Hacer un script que permita ingresar un número. Si ese número es negativo mostrar el duplo del mismo, si ese número es positivo mostrar la mitad de dicho número, de otra manera mostrar mensaje
let ejercicio2ValorInput = document.getElementById("ejercicio2Valor");
let resultado = document.getElementById("ej2Resultado");
let ejv2Res;

const calcularEjercicio2 = () => {
    // Paso valor a numerico
    const valor = parseFloat(ejercicio2ValorInput.value);

    // Verificamos si el valor ingresado es un número válido
    if (isNaN(valor)) {
        resultado.innerHTML = 'Ingrese un valor numérico válido';
        console.log(ejercicio2ValorInput.value); // Muestra lo que el usuario ingresó
        return; // Salimos de la función si no es un número válido
    }

    // Calculamos el resultado según la condición
    if (valor > 0) {
        ejv2Res = valor / 2;
        resultado.innerHTML = "La mitad es " + ejv2Res;
    } else if (valor < 0) {
        ejv2Res = valor * 2;
        resultado.innerHTML = "El duplo es " + ejv2Res;
    } else {
        resultado.innerHTML = 'El valor ingresado es cero';
    }
}
export { calcularEjercicio2 }