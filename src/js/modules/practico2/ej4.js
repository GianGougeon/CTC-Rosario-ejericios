let ej4P2Resultado = document.getElementById("ej4P2Resultado")
/* Rango de valores Acendente */
export const rangoASC = (i, f) => {
    for (let index = i; index <= f; index++) {
        if (index % 2 === 0) {
            ej4P2Resultado.innerHTML += `<p>${index}</p>`;
        }
    }
}
/* Rango de valores Decendete */
export const rangoDES = (i, f) => {
    for (let index = i; index >= f; index--) {
        if (index % 2 === 0) {
            ej4P2Resultado.innerHTML += `<p>${index}</p>`;
        }
    }
}
export const calcularEjercicio4P2 = () => {
    let valor = parseInt(document.getElementById("ejercicio4P2Valor").value)
    let valor2 = parseInt(document.getElementById("ejercicio4P2Valor2").value)
    ej4P2Resultado.innerHTML = ``
    if (valor < valor2) {
        rangoASC(valor, valor2)
    } else {
        rangoDES(valor, valor2)
    }
};

