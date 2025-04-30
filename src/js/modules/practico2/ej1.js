const ej1P2Resultado = document.getElementById("ej1P2Resultado");
const calcularEjercicio1P2 = (event) => {
    const valor = parseInt(event.target.value);
    let contenido = "";
    switch (valor) {
        case 1:
            for (let i = 1; i <= 100; i++) {
                contenido += `<p>${i}</p>`;
            }
            break;
        case 2:
            contenido = "";
            break;
    }
    ej1P2Resultado.innerHTML = contenido;
};

export { calcularEjercicio1P2 };
