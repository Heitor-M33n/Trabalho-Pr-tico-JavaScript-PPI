const btnIndex = document.getElementById('btnIndex');
const form = document.getElementById('form');
const LabelA = document.getElementById('LabelA');
const LabelB = document.getElementById('LabelB');
const LabelC = document.getElementById('LabelC');
const LabelD = document.getElementById('LabelD');
const A = document.getElementById('A');
const B = document.getElementById('B');
const C = document.getElementById('C');
const D = document.getElementById('D');
const img = document.getElementById('flag');
const counter = document.getElementById('contador');
const counterAcertos = document.getElementById('acertos');

const labels = [LabelA, LabelB, LabelC, LabelD];
const inputs = [A, B, C, D];

let respostas = []; // para cada resposta, incrementar 0 se errou, 1 se acertou

// matriz com todas as perguntas 
const perguntas = [
  {
    alternativas: ['Sérvia', 'Hungria', 'Bulgária', 'Croácia'],
    path_bandeira: 'img/hungria.jpg',
    correta: 'Hungria'
  },

  {
    alternativas: ['Letônia', 'Estônia', 'Lituânia', 'Moldávia'],
    path_bandeira: 'img/lituania.jpg',
    correta: 'Lituânia'
  },

  {
    alternativas: ['Tunísia', 'Egito', 'Marrocos', 'Argélia'],
    path_bandeira: 'img/marrocos.jpg',
    correta: 'Marrocos'
  },

  {
    alternativas: ['Uzbequistão', 'Mongólia', 'Cazaquistão', 'Quirguistão'],
    path_bandeira: 'img/cazaquistao.jpg',
    correta: 'Cazaquistão'
  },

  {
    alternativas: ['Austrália', 'Nova Zelândia', 'Fiji', 'Reino Unido'],
    path_bandeira: 'img/nova_zelandia.jpg',
    correta: 'Nova Zelândia'
  },

  {
    alternativas: ['Eslováquia', 'Eslovênia', 'Croácia', 'Sérvia'],
    path_bandeira: 'img/eslovaquia.jpg',
    correta: 'Eslováquia'
  },

  {
    alternativas: ['Indonésia', 'Tailândia', 'Filipinas', 'Vietnã'],
    path_bandeira: 'img/filipinas.jpg',
    correta: 'Filipinas'
  },

  {
    alternativas: ['Peru', 'Canadá', 'Áustria', 'Chile'],
    path_bandeira: 'img/peru.jpg',
    correta: 'Peru'
  },

  {
    alternativas: ['Senegal', 'Camarões', 'Mali', 'Gana'],
    path_bandeira: 'img/camaroes.jpg',
    correta: 'Camarões'
  },

  {
    alternativas: ['Bangladesh', 'Paquistão', 'Nepal', 'Índia'],
    path_bandeira: 'img/bangladesh.jpg',
    correta: 'Bangladesh'
  },

  {
    alternativas: ['Islândia', 'Suécia', 'Finlândia', 'Noruega'],
    path_bandeira: 'img/finlandia.jpg',
    correta: 'Finlândia'
  },

  {
    alternativas: ['Jordânia', 'Palestina', 'Sudão', 'Emirados Árabes Unidos'],
    path_bandeira: 'img/jordania.jpg',
    correta: 'Jordânia'
  },

  {
    alternativas: ['Paraguai', 'Uruguai', 'Argentina', 'Guatemala'],
    path_bandeira: 'img/uruguai.jpg',
    correta: 'Uruguai'
  },

  {
    alternativas: ['Indonésia', 'Filipinas', 'Malásia', 'Brunei'],
    path_bandeira: 'img/malasia.jpg',
    correta: 'Malásia'
  },

  {
    alternativas: ['Albânia', 'Montenegro', 'Sérvia', 'Macedônia do Norte'],
    path_bandeira: 'img/albania.jpg',
    correta: 'Albânia'
  },

  {
    alternativas: ['Estônia', 'Letônia', 'Lituânia', 'Bielorrússia'],
    path_bandeira: 'img/letonia.jpg',
    correta: 'Letônia'
  },

  {
    alternativas: ['Turquia', 'Tunísia', 'Marrocos', 'Argélia'],
    path_bandeira: 'img/tunisia.jpg',
    correta: 'Tunísia'
  },

  {
    alternativas: ['Rússia', 'Bielorrússia', 'Sérvia', 'Bulgária'],
    path_bandeira: 'img/bielorrussia.jpg',
    correta: 'Bielorrússia'
  },

  {
    alternativas: ['Estônia', 'Finlândia', 'Letônia', 'Ucrânia'],
    path_bandeira: 'img/estonia.jpg',
    correta: 'Estônia'
  },

  {
    alternativas: ['Inglaterra', 'Geórgia', 'Armênia', 'Malta'],
    path_bandeira: 'img/georgia.jpg',
    correta: 'Geórgia'
  }
];

// função geral que roda no submit
const update = () => {alterar_pergunta(); alterar_acertos()}

// Função para retornar acertos
const acertos = () => respostas.reduce((acc, n) => {if (n) {acc++}; return acc}, 0)

// Função que randomiza a ordem das perguntas e alternativas, tem um viés, substituir por outro algorítmo melhor
function randomizar_perguntas() {
  perguntas.sort(() => Math.random() - 0.5)
  perguntas.forEach(pergunta => {
    pergunta.alternativas.sort(() => Math.random() - 0.5)
  })
}

// Função que modificao header
function alterar_acertos() {
    counter.innerHTML = `- Pergunta ${respostas.length + 1}/20`
    if (acertos() == 1) {counterAcertos.innerHTML = `${acertos()} Acerto`}
    else {counterAcertos.innerHTML = `${acertos()} Acertos`}
}

// Função que manipula o formulário
function alterar_pergunta() {
  const p = perguntas[respostas.length];

  img.src = p.path_bandeira
  inputs.forEach(r => r.checked = false);
  for (let i = 0; i < 4; i++) {console.log(p.alternativas[i]);labels[i].innerHTML = p.alternativas[i]}
  console.log('correta: ', p.correta) // temp
}

// Listener de enviar resposta da questão
form.addEventListener('submit', (e) => {
  e.preventDefault(); // necessário para não dar um refresh na página, pois submeter um formulário causa essa ação
  const p = perguntas[respostas.length]
  
  // Verifica se acertou ou não, e adiciona ao array
  let resposta = 0
  if (inputs[p.alternativas.indexOf(p.correta)].checked) {resposta = 1}
  else {resposta = 0}
  respostas.push(resposta)
  console.log(respostas, acertos()) // temp

  // verificação se uma alternativa foi selecionado aqui...
  update();
  }
);

randomizar_perguntas();
update();