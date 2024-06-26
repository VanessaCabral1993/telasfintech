// Dados de exemplo
let receitas = [];
let gastos = [];
let dividas = [];
let investimentos = [];

// Função para adicionar receita
document.getElementById('formReceita').addEventListener('submit', function (e) {
    e.preventDefault();
    const descricao = document.getElementById('receitaDescricao').value;
    const valor = parseFloat(document.getElementById('receitaValor').value);
    receitas.push({ descricao, valor });
    atualizarGrafico();
});

// Função para adicionar gasto
document.getElementById('formGasto').addEventListener('submit', function (e) {
    e.preventDefault();
    const descricao = document.getElementById('gastoDescricao').value;
    const valor = parseFloat(document.getElementById('gastoValor').value);
    gastos.push({ descricao, valor });
    atualizarGrafico();
});

// Função para adicionar dívida
document.getElementById('formDivida').addEventListener('submit', function (e) {
    e.preventDefault();
    const descricao = document.getElementById('dividaDescricao').value;
    const valor = parseFloat(document.getElementById('dividaValor').value);
    dividas.push({ descricao, valor });
    atualizarGrafico();
});

// Função para adicionar investimento
document.getElementById('formInvestimento').addEventListener('submit', function (e) {
    e.preventDefault();
    const descricao = document.getElementById('investimentoDescricao').value;
    const valor = parseFloat(document.getElementById('investimentoValor').value);
    investimentos.push({ descricao, valor });
    atualizarGrafico();
});

// Função para atualizar o gráfico
function atualizarGrafico() {
    const ctx = document.getElementById('graficoFinanceiro').getContext('2d');
    const data = {
        labels: ['Receitas', 'Gastos', 'Dívidas', 'Investimentos'],
        datasets: [{
            label: 'Valores Financeiros',
            data: [
                receitas.reduce((total, item) => total + item.valor, 0),
                gastos.reduce((total, item) => total + item.valor, 0),
                dividas.reduce((total, item) => total + item.valor, 0),
                investimentos.reduce((total, item) => total + item.valor, 0)
            ],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    };
    
    if (window.myChart) {
        window.myChart.destroy();
    }

    window.myChart = new Chart(ctx, {
        type: 'bar', // tipo de gráfico: bar, line, pie, etc.
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Inicializa o gráfico
atualizarGrafico();

