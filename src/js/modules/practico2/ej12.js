export const calcularEjercicio12P2 = () => {
    const valor = document.getElementById("ejercicio12P2Valor")
    const valorNum = parseInt(valor.value)
    const resultado = document.getElementById("ej12P2Resultado")
    valor.style = ``

    if (valorNum >= 1 && valorNum <= 10) {
        switch (valorNum) {
            case 1:
                resultado.textContent = `Uno`;
                break;
            case 2:
                resultado.textContent = `Dos`;
                break;
            case 3:
                resultado.textContent = `Tres`;
                break;
            case 4:
                resultado.textContent = `Cuatro`;
                break;
            case 5:
                resultado.textContent = `Cinco`;
                break;
            case 6:
                resultado.textContent = `Seis`;
                break;
            case 7:
                resultado.textContent = `Siete`;
                break;
            case 8:
                resultado.textContent = `Ocho`;
                break;
            case 9:
                resultado.textContent = `Nueve`;
                break;
            case 10:
                resultado.textContent = `Diez`;
                break;
        }
    } else {
        resultado.textContent = `Ingrese un valor valido`;
        valor.style = `background-color: red`
    }
};