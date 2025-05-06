const tablaEj11P2 = (valor) => {
    const tabla = document.querySelector('.tabla-estilizada');
    const filas = tabla.querySelectorAll('tbody tr');

    // resetea filas
    for (let i = 0; i < filas.length; i++) {
        filas[i].style.backgroundColor = '';
    }

    // 0 a 3 pinta
    if (valor >= 0 && valor <= 3) {
        const fila = filas[valor];
        if (fila) {
            fila.style.backgroundColor = '#913232';
        }
    }
}

export const calcularEjercicio11P2 = () => {
    const valor = document.getElementById("ejercicio11P2Valor")
    const valorNum = parseInt(valor.value)
    const resultado = document.getElementById('ej11P2Resultado')
    valor.style = ``
    
    if (valorNum >= -10 && valorNum <= 40) {
        if (valorNum < 10) {
            tablaEj11P2(0)
        } else if (valorNum >= 10 && valorNum <= 20) {
            tablaEj11P2(1)
        } else if (valorNum >= 21 && valorNum <= 30) {
            tablaEj11P2(2)
        } else if (valorNum > 30) {
            tablaEj11P2(3)
        }

    } else {
        resultado.innerHTML = `Por favor ingrese un valor válido`
        valor.style = `background-color: red`
        /* 4 reset */
        tablaEj11P2(4)
    }
};

