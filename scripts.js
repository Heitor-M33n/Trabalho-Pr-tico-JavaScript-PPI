const btnStart = document.getElementById('btnStart');
const btnIndex = document.getElementById('btnIndex');
const form = document.getElementById('form')
const LabelA = document.getElementById('LabelA');
const LabelB = document.getElementById('LabelB');
const LabelC = document.getElementById('LabelC');
const LabelD = document.getElementById('LabelD');
const A = document.getElementById('A');
const B = document.getElementById('B');
const C = document.getElementById('C');
const D = document.getElementById('D');

const labels = [LabelA, LabelB, LabelC, LabelD];
const inputs = [A, B, C, D];

const perguntas = [];
let voltar = 0;

// Função que manipula o formulário
function pensar_em_um_nome_function() {

}

// Função para mudar entre as páginas
const redirect = file => window.location.href = file;

// Listeners para as trocas de páginas, o () => redirect() é para não executar o redirect imediatamente, que acontece caso isso não seja feito
if (btnStart) {btnStart.addEventListener('click', () => redirect('game.html'))}

if (btnIndex) {btnIndex.addEventListener('click', () => {
    if (voltar) {redirect('index.html')}
    else {alert('Você vai perder seu progresso, tem certeza?'); voltar = 1}}
    )
}

// Listener de enviar resposta da questão
if (form) {form.addEventListener('submit', (e) => {
    e.preventDefault(); // necessário para n dar um refresh na página, pois submeter um formulário causa essa ação
    pensar_em_um_nome_function()}
    )
}