export const calcularEjercicio3P2 = () => {
    const valorInput = document.getElementById("ejercicio3P2Valor").value;
    const resultado = document.getElementById("ej3P2Resultado")
    if (valorInput % 2) {
        resultado.innerHTML = `Es un número INPAR`
    } else {
        resultado.innerHTML = `Es un número PAR`
    }
};

