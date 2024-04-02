function formatarFaturamentoTotal() {
  var faturamentoTotalInput = document.getElementById("faturamento-total");
  var valor = faturamentoTotalInput.value.trim().replace('R$', ''); // Remover o símbolo de "R$"

  // Remover todos os pontos e vírgulas
  valor = valor.replace(/[.,]/g, '');

  // Formatar o valor com o ponto como separador de milhares
  var valorFormatado = formatarValor(valor);

  // Atualizar o valor no campo
  faturamentoTotalInput.value = valorFormatado;
}


    if (isNaN(faturamentoTotal)) {
        alert("Por favor, insira um valor válido para o Faturamento Total.");
        return;
    }

    // Formatar o valor com o ponto como separador de milhares e adicionar o símbolo de "R$"
    var valorFormatado = faturamentoTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    // Atualizar o valor no campo
    faturamentoTotalInput.value = "R$" + valorFormatado;
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
