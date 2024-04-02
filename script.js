function calcular() {
    var faturamentoTotal = parseFloat(document.getElementById("faturamento-total").value);
    var meses = parseInt(document.getElementById("meses").value);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/calcular", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            document.getElementById("resultado").innerText = "O saldo médio é: " + response.saldo_medio;
        }
    };
    var data = JSON.stringify({ faturamento_total: faturamentoTotal, meses: meses });
    xhr.send(data);
}
