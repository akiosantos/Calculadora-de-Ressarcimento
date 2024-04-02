from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calcular', methods=['POST'])
def calcular():
    faturamento_total = float(request.form['faturamento-total'])
    meses = int(request.form['meses'])

    # Calcular o ressarcimento
    base_calculo = faturamento_total * 0.012
    honorarios = base_calculo * 0.20
    saldo_medio = (base_calculo * meses) - honorarios

    return render_template('resultado.html', saldo_medio=saldo_medio)

if __name__ == '__main__':
    app.run(debug=True)
