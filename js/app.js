function calcularCuotas(){
    const costo = parseFloat(document.getElementById("costo").value);
    const cuotas = parseFloat(document.getElementById("cuotas").value);

    const costoCuotas = costo / cuotas;
    document.getElementById("resultado").textContent = "Debes pagar " + cuotas + " cuotas de " + costoCuotas;
}


