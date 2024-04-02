function formatarFaturamentoTotal() {
    var faturamentoTotalInput = document.getElementById("faturamento-total");
    var valor = faturamentoTotalInput.value;

    // Remover todos os caracteres não numéricos, exceto ponto
    valor = valor.replace(/[^\d.]/g, '');

    // Adicionar ponto como separador de milhares
    var partes = valor.split('.');
    var parteInteira = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    var parteDecimal = partes.length > 1 ? '.' + partes[1] : '';

    // Atualizar o valor no campo
    faturamentoTotalInput.value = parteInteira + parteDecimal;
}

function calcularRessarcimento() {
    // Chama a função formatarFaturamentoTotal() para formatar o valor corretamente
    formatarFaturamentoTotal();

    var faturamentoTotalInput = document.getElementById("faturamento-total");
    var faturamentoTotalValue = faturamentoTotalInput.value.trim().replace('R$', '').replace(/\./g, '').trim();
    
    // Converter para número
    var faturamentoTotal = parseFloat(faturamentoTotalValue);

    if (isNaN(faturamentoTotal)) {
        alert("Por favor, insira um valor válido para o Faturamento Total.");
        return;
    }

    var meses = parseInt(document.getElementById("meses").value);

    var baseCalculo = faturamentoTotal * 0.012;
    var saldoMedio = (baseCalculo * meses) - 0.20; // Subtrai 20%

    // Formatar o resultado sem arredondamento
    var saldoMedioFormatado = saldoMedio.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    document.getElementById("resultado").innerText = "O saldo médio é: R$" + saldoMedioFormatado;
}

// Adicionar um ouvinte de evento de entrada para o campo "Faturamento Total"
var faturamentoTotalInput = document.getElementById("faturamento-total");
faturamentoTotalInput.addEventListener("input", formatarFaturamentoTotal);
