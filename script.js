const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você gosta de cuidar da sua saúde ou cuida por obrigação?",
        alternativas:  [
            {
                texto: "gosto de cuidar da minha saúde",
                afirmacao:"Provavelmete gosta de exercícios físicos "
            },
            {
                texto: "cuido por obrigação",
                afirmacao: "Deve odiar exercícios físicos"
            }
        ]
    },
    {
        enunciado: "Quandos dias da semana você costuma praticar exercícios físicos?",
        alternativas: [
            {
                texto: "de 4 à 5 vezes por semana",
                afirmacao: "É guerreiro"
            },
            {
                texto: "de 1 à 3 vezes por semana",
                afirmacao: "É um preguiçoso"
            }
        ]
    },
    {
        enunciado: "Sua rotina de sono é boa?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Dorme de 8 à 10 horas por dia"
            },
            {
                texto: "Não",
                afirmacao: "Dorme de 5 à 7 horas "
            }
        ]
    },
    {
        enunciado: "Gosta de caminhar ou corre?",
        alternativas: [
            {
                texto: "Caminhar",
                afirmacao: "Gosta de cardio mais tranquilo"
            },
            {
                texto: "Correr",
                afirmacao: "Gosta de cardio mais agitado"
            }
        ]
    },
    {
        enunciado: "Você prefere um treino tranquilo ou um treino pesado?",
        alternativas: [
            {
                texto: "Treino pesado",
                afirmacao: "Vai embora parecendo outra pessoa descabelado(a) e suando muito"
            },
            {
                texto: "Treino tranquilo",
                afirmacao:"Vai embora do mesmo jeito que chegou"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();