function formatarValor(valor) {
    // Remover caracteres não numéricos, exceto ponto
    valor = valor.replace(/[^\d.]/g, '');

    // Separar a parte inteira da parte decimal (se existir)
    var partes = valor.split('.');
    var parteInteira = partes[0];
    var parteDecimal = partes.length > 1 ? '.' + partes[1] : '';

    // Adicionar ponto como separador de milhares a cada três dígitos na parte inteira
    parteInteira = parteInteira.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    // Retornar o valor formatado
    return parteInteira + parteDecimal;
}

function formatarFaturamentoTotal() {
    var faturamentoTotalInput = document.getElementById("faturamento-total");
    var valor = faturamentoTotalInput.value;

    // Formatar o valor
    var valorFormatado = formatarValor(valor);

    // Atualizar o valor no campo
    faturamentoTotalInput.value = valorFormatado;
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
