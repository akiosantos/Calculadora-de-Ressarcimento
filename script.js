function formatarNumero(valor) {
    // Remover todos os caracteres não numéricos, exceto ponto
    valor = valor.replace(/[^\d.]/g, '');

    // Remover todos os pontos, exceto o último
    valor = valor.replace(/\.(?=.*\.)/g, '');

    // Substituir a vírgula por ponto
    valor = valor.replace(',', '.');

    return valor;
}

function formatarFaturamentoTotal() {
    var faturamentoTotalInput = document.getElementById("faturamento-total");
    var valor = faturamentoTotalInput.value;

    // Formatar o valor enquanto o usuário digita
    valor = formatarNumero(valor);

    // Atualizar o valor no campo
    faturamentoTotalInput.value = valor;
}

function calcularRessarcimento() {
    var faturamentoTotalInput = document.getElementById("faturamento-total");
    var faturamentoTotalValue = faturamentoTotalInput.value.trim().replace('R$', '').trim();
    
    // Remover quaisquer caracteres não numéricos (exceto ponto)
    faturamentoTotalValue = formatarNumero(faturamentoTotalValue);

    // Converter para número
    var faturamentoTotal = parseFloat(faturamentoTotalValue);

    if (isNaN(faturamentoTotal)) {
        alert("Por favor, insira um valor válido para o Faturamento Total.");
        return;
    }

    var meses = parseInt(document.getElementById("meses").value);

    var baseCalculo = faturamentoTotal * 0.012;
    var saldoMedio = baseCalculo * meses;

    // Formatando o resultado em reais (R$)
    var saldoMedioFormatado = saldoMedio.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    document.getElementById("resultado").innerText = "O saldo médio é: " + saldoMedioFormatado;
}
