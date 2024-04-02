// Função para formatar o valor do faturamento total
function formatarFaturamentoTotal() {
  var faturamentoTotalInput = document.getElementById("faturamento-total");
  var valor = faturamentoTotalInput.value.trim().replace('R$', ''); // Remover o símbolo de "R$"

// Remover todos os pontos e espaços
  valor = valor.replace(/[,\s]/g, '');

// Se o valor incluir uma vírgula, substitua por um ponto para garantir que seja considerado como um número decimal
  if (valor.includes(',')) {
    valor = valor.replace(',', '.');
  }

    // Se o valor for um número inteiro, adicione duas casas decimais
  if (!valor.includes('.')) {
    valor += '.00';
  } 

  // Adicionar vírgula antes dos últimos 2 dígitos
  if (valor.length >= 2) {
    valor = valor.slice(0, -2) + ',' + valor.slice(-2);
  } else if (valor.length === 2) {
    valor = '0,' + valor;
  } else if (valor.length === 1) {
    valor = '0,0' + valor;
  } else {
    valor = '0,00';
  }
  
// Adicionar ponto a cada 3 dígitos
  valor = valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

  // Atualizar o valor no campo
  faturamentoTotalInput.value = "R$ " + valor;

  // Chamar a função para calcular o ressarcimento
  calcularRessarcimento();
}

// Chama a função formatarFaturamentoTotal() sempre que o usuário digitar algo
document.getElementById("faturamento-total").addEventListener("blur", formatarFaturamentoTotal);

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
  

// Formatar a base de cálculo com pontos a cada 3 dígitos
  var baseCalculoFormatado = baseCalculo.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');


  // Atualizar o elemento HTML com o valor da base de cálculo formatado
  document.getElementById("base-calculo").innerText = "Base de Cálculo: R$ " + baseCalculoFormatado;
  
  var saldoMedio = (baseCalculo * meses) - 0.20; // Subtrai 20%

  // Formatar o resultado sem arredondamento
  var saldoMedioFormatado = saldoMedio.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  document.getElementById("resultado").innerText = "O saldo médio é: R$ " + saldoMedioFormatado;
}
