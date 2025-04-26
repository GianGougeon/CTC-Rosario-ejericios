let ejercicio9ValorInput = document.getElementById("ejercicio9Valor");
let ej9Resultado = document.getElementById("ej9Resultado");


const numeroMes = (nombreMes) => {
    const nombresDeMeses = ["enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    return nombresDeMeses.indexOf(nombreMes.toLowerCase());
}

const calcularEjercicio9 = () => {
    let valorMes = ejercicio9ValorInput.value;
    const year = new Date().getFullYear();
    const mesIndex = numeroMes(valorMes);

    if (mesIndex === -1) {
        ej9Resultado.textContent = "Por favor, ingresa un nombre de mes válido.";
        return;
    }

    const siguienteMes = new Date(year, mesIndex + 1, 0);
    const diasDelMes = siguienteMes.getDate();

    ej9Resultado.textContent = `El mes de ${valorMes} tiene ${diasDelMes} días.`;
}

export { calcularEjercicio9 };