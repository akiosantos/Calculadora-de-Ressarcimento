function formatarFaturamentoTotal() {
    var faturamentoTotalInput = document.getElementById("faturamento-total");
    var valor = faturamentoTotalInput.value;

    // Remover todos os caracteres não numéricos, exceto ponto
    valor = valor.replace(/[^\d.]/g, '');

    // Remover todos os pontos, exceto o último
    valor = valor.replace(/\.(?=.*\.)/g, '');

    // Substituir a vírgula por ponto
    valor = valor.replace(',', '.');

    // Atualizar o valor no campo
    faturamentoTotalInput.value = valor;
}

function calcularRessarcimento() {
    // Chama a função formatarFaturamentoTotal() para formatar o valor corretamente
    formatarFaturamentoTotal();

    var faturamentoTotalInput = document.getElementById("faturamento-total");
    var faturamentoTotalValue = faturamentoTotalInput.value.trim().replace('R$', '').trim();
    
    // Converter para número
    var faturamentoTotal = parseFloat(faturamentoTotalValue);

    if (isNaN(faturamentoTotal)) {
        alert("Por favor, insira um valor válido para o Faturamento Total.");
        return;
    }

    var meses = parseInt(document.getElementById("meses").value);

    var baseCalculo = faturamentoTotal * 0.012;
    var saldoMedio = (baseCalculo * meses) - 0.20;

    // Formatar o resultado sem arredondamento
    var saldoMedioFormatado = saldoMedio.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    document.getElementById("resultado").innerText = "O saldo médio é: R$" + saldoMedioFormatado;
}
