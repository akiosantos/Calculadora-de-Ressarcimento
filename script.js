function formatarValor(valor) {
    // Remover caracteres não numéricos, exceto ponto
    valor = valor.replace(/[^\d.]/g, '');

    // Separar a parte inteira da parte decimal (se existir)
    var partes = valor.split('.');
    var parteInteira = partes[0];
    var parteDecimal = partes.length > 1 ? '.' + partes[1] : '';

    // Adicionar ponto como separador de milhares a cada três dígitos na parte inteira, começando do final
    var parteInteiraFormatada = '';
    for (var i = parteInteira.length - 1, j = 0; i >= 0; i--, j++) {
        parteInteiraFormatada = parteInteira.charAt(i) + parteInteiraFormatada;
        if (j > 0 && j % 3 === 0 && i > 0) {
            parteInteiraFormatada = '.' + parteInteiraFormatada;
        }
    }

    // Retornar o valor formatado
    return parteInteiraFormatada + parteDecimal;
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

    var baseC
