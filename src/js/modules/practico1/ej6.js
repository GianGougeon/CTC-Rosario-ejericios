let ejercicio6ValorInput = document.getElementById("ejercicio6Valor")
let ejercicio6ValorInput2 = document.getElementById("ejercicio6Valor2")
let ej6Resultado = document.getElementById("ej6Resultado")

const calcularEjercicio6 = () => {
    let valor = ejercicio6ValorInput.value.toString().toLowerCase()
    let valor2 = ejercicio6ValorInput2.value
    console.log(valor);
    console.log(valor2);
    
    
    if (valor == "noviembre" && valor2 == 25) {
        ej6Resultado.innerHTML = "Feliz Navidad!!!"
    } else {
        ej6Resultado.innerHTML = "No es navidad"
    }
}

export { calcularEjercicio6 }