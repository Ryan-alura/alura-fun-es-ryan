const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acaba de receber uma oferta de emprego para trabalhar em uma empresa que utiliza IA para otimizar processos de produção. Qual é a sua primeira reação?",
        alternativas: [
            {
                texto: "Fico empolgado com a ideia de trabalhar com tecnologia de ponta.",
                afirmacao: "Você se mostrou entusiasmado para aprender e contribuir para a inovação tecnológica."
            },
            {
                texto: "Fico preocupado com a possibilidade de a IA substituir empregos humanos.",
                afirmacao: "Você expressou uma preocupação legítima sobre o impacto da IA na força de trabalho."
            }
        ]
    },
    {
        enunciado: "Durante o seu primeiro mês de trabalho, você é convidado a participar de uma reunião sobre ética na utilização da IA. Qual é a sua opinião durante a reunião?",
        alternativas: [
            {
                texto: "Acredito que a IA deve ser usada para o bem comum, mas com forte regulamentação.",
                afirmacao: "Você defendeu o uso responsável da IA, destacando a importância da regulamentação."
            },
            {
                texto: "Penso que a IA deve ser desenvolvida sem muitas restrições para fomentar a inovação.",
                afirmacao: "Você é a favor de menos regulamentações para acelerar a inovação tecnológica."
            }
        ]
    },
    {
        enunciado: "A empresa decide implementar uma IA para analisar o desempenho dos funcionários e sugerir melhorias. Como você reage?",
        alternativas: [
            {
                texto: "Apoio a ideia, pois acredito que a IA pode ajudar a melhorar a produtividade.",
                afirmacao: "Você demonstrou confiança no potencial da IA para otimizar o desempenho."
            },
            {
                texto: "Fico preocupado com a invasão de privacidade e o impacto na moral dos funcionários.",
                afirmacao: "Você levantou preocupações válidas sobre privacidade e bem-estar no trabalho."
            }
        ]
    },
    {
        enunciado: "Seu gerente pede que você use uma ferramenta de IA para automatizar uma tarefa que você realiza manualmente. O que você faz?",
        alternativas: [
            {
                texto: "Aceito e começo a explorar como a IA pode me ajudar.",
                afirmacao: "Você adotou uma abordagem aberta para aprender e se adaptar às novas tecnologias."
            },
            {
                texto: "Explico que prefiro realizar a tarefa manualmente para manter o controle.",
                afirmacao: "Você valorizou a importância do controle humano em processos automatizados."
            }
        ]
    },
    {
        enunciado: "A empresa está considerando substituir parte da equipe por sistemas de IA para reduzir custos. Como você se posiciona?",
        alternativas: [
            {
                texto: "Sugiro que a empresa ofereça capacitação para que os funcionários possam trabalhar com a IA.",
                afirmacao: "Você propôs uma solução equilibrada que combina inovação com responsabilidade social."
            },
            {
                texto: "Defendo a manutenção da equipe atual para preservar os empregos.",
                afirmacao: "Você se posicionou em defesa dos trabalhadores, priorizando a segurança no emprego."
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();