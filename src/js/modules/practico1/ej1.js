// Hacer un script que permita ingresar 4 valores y después nos muestre el promedio
let valor1 = document.getElementById("ejercicio1Valor1");
let valor2 = document.getElementById("ejercicio1Valor2");
let valor3 = document.getElementById("ejercicio1Valor3");
let valor4 = document.getElementById("ejercicio1Valor4");
let resultado = document.getElementById("ej1Resultado");

const calcularEjercicio1 = () => {
    let v1 = parseFloat(valor1.value);
    let v2 = parseFloat(valor2.value);
    let v3 = parseFloat(valor3.value);
    let v4 = parseFloat(valor4.value);

    if (isNaN(v1) || isNaN(v2) || isNaN(v3) || isNaN(v4)) {
        resultado.innerHTML = "Por favor, ingrese valores válidos.";
        return;
    }

    let promedio = (v1 + v2 + v3 + v4) / 4;
    resultado.innerHTML = `El promedio es: ${promedio}`;


}

export { calcularEjercicio1 }; 