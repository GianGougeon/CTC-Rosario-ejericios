export const calcularEjercicio6P2 = () => {
    let ej5P2Resultado = document.getElementById("ej6P2Resultado")
    ej5P2Resultado.innerHTML = ``
    for (let index = 0; index <= 50; index++) {
        if (index % 3 === 0) {
            ej5P2Resultado.innerHTML += `<p>${index}</p>`
        }
    }
};