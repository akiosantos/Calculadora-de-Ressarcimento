function calcularRessarcimento() {
    var faturamentoTotalInput = document.getElementById("faturamento-total");
    var faturamentoTotalValue = faturamentoTotalInput.value.trim().replace('R$', '').trim();
    
    // Remover quaisquer caracteres não numéricos (exceto vírgula)
    faturamentoTotalValue = faturamentoTotalValue.replace(/[^\d,]/g, '');

    // Converter a vírgula para ponto para garantir que possamos parsear corretamente para um número
    faturamentoTotalValue = faturamentoTotalValue.replace(',', '.');

    // Converter para número
    var faturamentoTotal = parseFloat(faturamentoTotalValue);

    if (isNaN(faturamentoTotal)) {
        alert("Por favor, insira um valor válido para o Faturamento Total.");
        return;
    }

    var meses = parseInt(document.getElementById("meses").value);

    var baseCalculo = faturamentoTotal * 0.012;
    var saldoMedio = baseCalculo * meses; // Agora não subtraímos os honorários

    // Formatando o resultado em reais (R$)
    var saldoMedioFormatado = saldoMedio.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    document.getElementById("resultado").innerText = "O saldo médio é: " + saldoMedioFormatado;
}
