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
    calcularEjercicio4P2,
    calcularEjercicio5P2,
    calcularEjercicio6P2,
    calcularEjercicio7P2,
    calcularEjercicio8P2,
    calcularEjercicio9P2,
    calcularEjercicio10P2,
    calcularEjercicio11P2,
    calcularEjercicio12P2,
    calcularEjercicio13P2
} from './modules/practico2/index.js';
// importar funciones p2
import {
    calcularEjercicio1P3,
    calcularEjercicio2P3,
    calcularEjercicio3P3,
    calcularEjercicio4P3,
    calcularEjercicio4P3BorrarArr,
    calcularEjercicio5P3,
    calcularEjercicio6P3,
    calcularEjercicio7P3,
    calcularEjercicio8P3,
    calcularEjercicio9P3,
    calcularEjercicio10P3,
    calcularEjercicio11P3,
    calcularEjercicio12P3
} from './modules/practico3/index.js';

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
    { id: "ej5CalcularP2", funcion: calcularEjercicio5P2 },
    { id: "ej6CalcularP2", funcion: calcularEjercicio6P2 },
    { id: "ej7CalcularP2", funcion: calcularEjercicio7P2 },
    { id: "ej8CalcularP2", funcion: calcularEjercicio8P2 },
    { id: "ej9CalcularP2", funcion: calcularEjercicio9P2 },
    { id: "ej10CalcularP2", funcion: calcularEjercicio10P2 },
    { id: "ej11CalcularP2", funcion: calcularEjercicio11P2 },
    { id: "ej12CalcularP2", funcion: calcularEjercicio12P2 },
    { id: "ej13CalcularP2", funcion: calcularEjercicio13P2 },
];
const ejerciciosRepartido3 = [
    { id: "ej1CalcularP3", funcion: calcularEjercicio1P3 },
    { id: "ej1CalcularP3v2", funcion: calcularEjercicio1P3 },
    { id: "ej2CalcularP3", funcion: calcularEjercicio2P3 },
    { id: "ej3CalcularP3", funcion: calcularEjercicio3P3 },
    { id: "ej4CalcularP3", funcion: calcularEjercicio4P3 },
    { id: "ej4CalcularP3v2", funcion: calcularEjercicio4P3BorrarArr },
];

const ejercicios = ejerciciosRepartido1.concat(ejerciciosRepartido2).concat(ejerciciosRepartido3)

// Recorrer el array y agrega los event listeners
ejercicios.forEach(ejercicio => {
    const boton = document.getElementById(ejercicio.id);
    if (boton) {
        boton.addEventListener("click", ejercicio.funcion);
    }
});

