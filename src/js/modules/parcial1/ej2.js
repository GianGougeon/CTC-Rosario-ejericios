//Escribir un script que permita el ingreso de una frase y cambie la primer letra de cada palabra a mayúsculas
export const calcularParcial2 = () => {
    const frase = "Hola como andan"

    if (frase === null) {
        console.log("No se ingresó ninguna frase.");
        return;
    }

    const palabras = frase.split(" ");
    
    const palabrasCapitalizadas = [];

    for (let i = 0; i < palabras.length; i++) {
        const palabra = palabras[i];
        if (palabra.length > 0) {
            const primeraLetraMayuscula = palabra.charAt(0).toUpperCase();
            const restoPalabraMinuscula = palabra.slice(1).toLowerCase();
            palabrasCapitalizadas.push(primeraLetraMayuscula + restoPalabraMinuscula);
        } else {
            palabrasCapitalizadas.push("");
        }
    }
    const fraseCapitalizada = palabrasCapitalizadas.join(" ");
    console.log(`La frase capitalizada es: "${fraseCapitalizada}"`);
}
calcularParcial2()