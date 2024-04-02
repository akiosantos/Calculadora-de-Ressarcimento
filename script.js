function calcularRessarcimento() {
    var faturamentoTotal = parseFloat(document.getElementById("faturamento-total").value);
    var meses = parseInt(document.getElementById("meses").value);

    var baseCalculo = faturamentoTotal * 0.012;
    var honorarios = baseCalculo * 0.20;
    var saldoMedio = (baseCalculo * meses) - honorarios;

    document.getElementById("resultado").innerText = "O saldo médio é: " + saldoMedio.toFixed(2);
}
