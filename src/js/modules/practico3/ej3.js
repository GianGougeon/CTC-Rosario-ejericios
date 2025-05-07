// const ordenej3 = (valor, valor2, valor3, v1, v2, v3, inner, inner2, inner3) => {
//     if (valor >= valor2 && valor >= valor3) {
//         if (valor2 >= valor3) {
//             inner.innerHTML = `Primero: ${v1}`;
//             inner2.innerHTML = `Segundo: ${v2}`;
//             inner3.innerHTML = `Tercero: ${v3}`;
//         } else {
//             inner.innerHTML = `Primero: ${v1}`;
//             inner2.innerHTML = `Segundo: ${v3}`;
//             inner3.innerHTML = `Tercero: ${v2}`;
//         }
//     } else if (valor2 >= valor && valor2 >= valor3) {
//         if (valor >= valor3) {
//             inner.innerHTML = `Primero: ${v2}`;
//             inner2.innerHTML = `Segundo: ${v1}`;
//             inner3.innerHTML = `Tercero: ${v3}`;
//         } else {
//             inner.innerHTML = `Primero: ${v2}`;
//             inner2.innerHTML = `Segundo: ${v3}`;
//             inner3.innerHTML = `Tercero: ${v1}`;
//         }
//     } else { // valor3 es el mayor
//         if (valor >= valor2) {
//             inner.innerHTML = `Primero: ${v3}`;
//             inner2.innerHTML = `Segundo: ${v1}`;
//             inner3.innerHTML = `Tercero: ${v2}`;
//         } else {
//             inner.innerHTML = `Primero: ${v3}`;
//             inner2.innerHTML = `Segundo: ${v2}`;
//             inner3.innerHTML = `Tercero: ${v1}`;
//         }
//     }
// };
const ordenej3 = (valor1, valor2, valor3, texto1, texto2, texto3, inner1, inner2, inner3) => {
    const frases = [
        { valor: valor1, texto: texto1 },
        { valor: valor2, texto: texto2 },
        { valor: valor3, texto: texto3 }
    ];

    frases.sort((a, b) => b.valor - a.valor); // Orden descendente

    inner1.innerHTML = `Primero: ${frases[0].texto}`;
    inner2.innerHTML = `Segundo: ${frases[1].texto}`;
    inner3.innerHTML = `Tercero: ${frases[2].texto}`;
};
export const calcularEjercicio3P3 = () => {
    const valor = document.getElementById("ejercicio3P3Valor")
    const valor2 = document.getElementById("ejercicio3P3Valor2")
    const valor3 = document.getElementById("ejercicio3P3Valor3")
    const resultado = document.getElementById("ej3P3Resultado")
    const resultado2 = document.getElementById("ej3P3Resultado2")
    const resultado3 = document.getElementById("ej3P3Resultado3")
    /* reset style */
    valor.style = ``
    valor2.style = ``
    valor3.style = ``

    const v1 = valor.value
    const v2 = valor2.value
    const v3 = valor3.value

    const v1Length = v1.length
    const v2Length = v2.length
    const v3Length = v3.length

    /* Validar que no este vacio */
    if (v1 == "") {
        resultado.innerHTML = `Inserte una frase`
        valor.style = `background-color:red`
    }
    if (v2 == "") {
        resultado.innerHTML = `Inserte una frase`
        valor2.style = `background-color:red`
    }
    if (v3 == "") {
        resultado.innerHTML = `Inserte una frase`
        valor3.style = `background-color:red`
    }

    ordenej3(v1Length, v2Length, v3Length, v1, v2, v3, resultado, resultado2, resultado3)
}