// importar funciones p1
import {
    calcularEjercicio1,
    calcularEjercicio2,
    calcularEjercicio3,
    calcularEjercicio4,
    calcularEjercicio5,
    calcularEjercicio6,
    calcularEjercicio7,
    calcularEjercicio8,
    calcularEjercicio9,
    calcularEjercicio10
} from './modules/practico1/index.js';
// importar funciones p2
import {
    calcularEjercicio1P2,
    calcularEjercicio2P2,
    calcularEjercicio3P2,
    calcularEjercicio4P2
} from './modules/practico2/index.js';

// Botones con sus funciones
const ejerciciosRepartido1 = [
    { id: "ej1Calcular", funcion: calcularEjercicio1 },
    { id: "ej2Calcular", funcion: calcularEjercicio2 },
    { id: "ej3Calcular", funcion: calcularEjercicio3 },
    { id: "ej4Calcular", funcion: calcularEjercicio4 },
    { id: "ej5Calcular", funcion: calcularEjercicio5 },
    { id: "ej6Calcular", funcion: calcularEjercicio6 },
    { id: "ej7Calcular", funcion: calcularEjercicio7 },
    { id: "ej8Calcular", funcion: calcularEjercicio8 },
    { id: "ej9Calcular", funcion: calcularEjercicio9 },
    { id: "ej10Calcular", funcion: calcularEjercicio10 }
];

const ejerciciosRepartido2 = [
    { id: "ej1CalcularP2", funcion: calcularEjercicio1P2 },
    { id: "ej1CalcularP2v2", funcion: calcularEjercicio1P2 },
    { id: "ej2CalcularP2", funcion: calcularEjercicio2P2 },
    { id: "ej2CalcularP2v2", funcion: calcularEjercicio2P2 },
    { id: "ej3CalcularP2", funcion: calcularEjercicio3P2 },
    { id: "ej4CalcularP2", funcion: calcularEjercicio4P2 },

];

const ejercicios = ejerciciosRepartido1.concat(ejerciciosRepartido2)

// Recorrer el array y agrega los event listeners
ejercicios.forEach(ejercicio => {
    const boton = document.getElementById(ejercicio.id);
    if (boton) {
        boton.addEventListener("click", ejercicio.funcion);
    }
});
