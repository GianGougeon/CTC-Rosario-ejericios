const ej2P2Resultado = document.getElementById("ej2P2Resultado");
const calcularEjercicio2P2 = (event) => {
    const valor = parseInt(event.target.value);
    let contenido = "";
    switch (valor) {
        case 1:
            for (let i = 100; i >= 1; i--) {
                contenido += `<p>${i}</p>`;
            }
            break;
        case 2:
            contenido = "";
            break;
    }
    ej2P2Resultado.innerHTML = contenido;
};

export { calcularEjercicio2P2 };
