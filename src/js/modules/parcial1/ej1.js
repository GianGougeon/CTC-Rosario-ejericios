// Escribir un script que permita el ingreso de una frase y cuente las vocales.
export const calcularParcial1 = () => {
    const frase = prompt("Ingresa una frase:");

    if (frase === null) {
        console.log("No se ingresó ninguna frase.");
        return;
    }

    const vocales = "aeiouAEIOU";
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        if (vocales.includes(frase[i])) {
            contador++;
        }
    }

    console.log(`La frase "${frase}" tiene ${contador} vocales.`);
}