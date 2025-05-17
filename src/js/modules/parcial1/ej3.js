// Escribir un script que permita el ingreso de un nombre completo y retorne las iniciales del mismo
export const calcularParcial3 = () => {
    const nombreCompleto = "Ricardo Alonzo"

    const nombres = nombreCompleto.split(" ");
    
    let iniciales = "";

    for (let i = 0; i < nombres.length; i++) {
        const nombre = nombres[i];
        if (nombre.length > 0) {
            iniciales += nombre.charAt(0).toUpperCase();
        }
    }

    console.log(`Las iniciales son: ${iniciales}`);
}
calcularParcial3()