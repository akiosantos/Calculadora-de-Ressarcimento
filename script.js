function formatarFaturamentoTotal() {
  var faturamentoTotalInput = document.getElementById("faturamento-total");
  var valor = faturamentoTotalInput.value.trim().replace('R$', ''); // Remover o símbolo de "R$"

  // Remover todos os pontos e vírgulas
  valor = valor.replace(/[.,]/g, '');

  // Converter para número
  var faturamentoTotal = parseFloat(valor);

  if (isNaN(faturamentoTotal)) {
    return;
  }

var faturamentoTotalInput = document.getElementById("faturamento-total");
faturamentoTotalInput.oninput = formatarFaturamentoTotal;


  // Formatar o valor com ponto como separador de milhares
  var valorFormatado = faturamentoTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // Adicionar ponto a cada 3 dígitos
  valorFormatado = valorFormatado.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

  // Atualizar o valor no campo
  faturamentoTotalInput.value = "R$ " + valorFormatado;
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
