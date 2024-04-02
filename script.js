// Função para formatar o valor do faturamento total
function formatarFaturamentoTotal() {
  var faturamentoTotalInput = document.getElementById("faturamento-total");
  var valor = faturamentoTotalInput.value.trim().replace('R$', ''); // Remover o símbolo de "R$"

  // Remover todos os pontos e vírgulas
  valor = valor.replace(/[.,]/g, '');

  // Adicionar ponto a cada 3 dígitos
  valor = valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

  // Atualizar o valor no campo
  faturamentoTotalInput.value = "R$ " + valor;

  // Chamar a função para calcular o ressarcimento
  calcularRessarcimento();
}

// Chama a função formatarFaturamentoTotal() sempre que o usuário digitar algo
document.getElementById("faturamento-total").addEventListener("input", formatarFaturamentoTotal);

// Função para calcular o ressarcimento
function calcularRessarcimento() {
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
  
  // Atualizar o elemento HTML com o valor da base de cálculo
  var baseCalculoFormatado = baseCalculo.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  
  // Atualizar o elemento HTML com o valor da base de cálculo formatado
  document.getElementById("base-calculo").innerText = "Base de Cálculo: R$ " + baseCalculoFormatado;
  
  var saldoMedio = (baseCalculo * meses) - 0.20; // Subtrai 20%

  // Formatar o resultado sem arredondamento
  var saldoMedioFormatado = saldoMedio.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  document.getElementById("resultado").innerText = "O saldo médio é: R$ " + saldoMedioFormatado;
}
