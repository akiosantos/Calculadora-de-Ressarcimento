from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calcular', methods=['POST'])
def calcular():
    dados = request.json
    faturamento_total = dados['faturamento_total']
    meses = dados['meses']

    base_calculo = faturamento_total * 0.012
    honorarios = base_calculo * 0.20
    saldo_medio = (base_calculo * meses) - honorarios

    return jsonify({'saldo_medio': saldo_medio})

if __name__ == '__main__':
    app.run(debug=True)
