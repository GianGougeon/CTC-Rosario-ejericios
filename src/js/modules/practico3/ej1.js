/*  sustituya “la radial de Juan Lacaze” por “Valdense” */
export const calcularEjercicio1P3 = (event) => {
    const valor = parseInt(event.target.value);
    const frase = `Turil pasa por la radial de Juan Lacaze`
    const resultado = document.getElementById("ej1P3Resultado")
    let sustituya = frase.replace("Juan Lacaze", "Valdense")
    switch (valor) {
        case 1:
            resultado.innerHTML = `<p>${sustituya}</p>`
            break;
        case 2:
            resultado.innerHTML = `<p>${frase}</p>`
            break;

        default:
            break;
    }
}