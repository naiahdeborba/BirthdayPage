// --- LÓGICA DO QUIZ DE CURIOSIDADES ---

// Carrega o cabeçalho dinamicamente (reutilizado do script principal)
document.addEventListener("DOMContentLoaded", function() {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            const container = document.getElementById("header-container");
            if(container) container.innerHTML = data;
        })
        .catch(error => console.error("Erro ao carregar cabeçalho:", error));
});

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (!mobileMenu) return;
    const isOpening = mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    if (isOpening) {
        document.body.classList.add('overflow-hidden');
    } else {
        document.body.classList.remove('overflow-hidden');
    }
}

// 1. Banco de Perguntas (Você pode editar as perguntas e opções como quiser!)
// Coloquei um exemplo com base no seu gosto por jogos de tabuleiro (Everdell).
const bancoCuriosidades = [
    {
        pergunta: "Onde que eu nasci?",
        opcoes: {
            A: "Florianópolis",
            B: "Arroio dos Ratos",
            C: "São José",
            D: "Porto Alegre",
        },
        respostaCorreta: "D"
    },
    {
        pergunta: "Eu tenho um vício alimentar, é algo que sempre que estou triste uso para me reconfortar. Qual é a alternativa correta?",
        opcoes: {
            A: "Cookies",
            B: "Achocolatado",
            C: "Chocolate",
            D: "Açúcar",
        },
        respostaCorreta: "B"

        },
    {
        pergunta: "Tenho a capacidade de contrair um músculo específico que a maioria das pessoas só consegue mexer em conjunto, qual é?",
        opcoes: {
            A: "Dedos dos pés",
            B: "Orelhas",
            C: "Peitoral",
            D: "Narinas",
        },
        respostaCorreta: "D" 
    },
    {
        pergunta: "Se eu pudesse ser um ser mágico, qual eu seria?",
        opcoes: {
            A: "Fada",
            B: "Centauro",
            C: "Sereia",
            D: "Anjo",
        },
        respostaCorreta: "C" 
    },
    {
        pergunta: "Qual dessas histórias é para mim a mais engraçada?",
        opcoes: {
            A: "O dia que cai no fossa do vizinho",
            B: "Quando derrubei o colchão encima da minha prima",
            C: "Quando perdi a Tsunami(boia) na praia",
            D: "O dia falei para uma cliente que ela usava o mesmo vestido sempre",
        },
        respostaCorreta: "A" 
    },
    {
        pergunta: "Sempre dizia que meu aniversário era uma data azarada, qual desses não é o motivo?",
        opcoes: {
            A: "O meu celular caiu no chão e quebrou, após falar do azar de aniversário",
            B: "Um dos convidados da minha festa quebrou o braço",
            C: "Me jogaram ovo e farinha na saída do colégio",
            D: "Em uma festa de aniversário, um convidado passou 💩 na parede do meu banheiro",
        },
        respostaCorreta: "C" 
    },
    {
        pergunta: "Um adulto com todos os dentes, incluindo os siso possui um total de 32. Quantos dentes eu tenho atualmente?",
        opcoes: {
            A: "32",
            B: "30",
            C: "28",
            D: "27",
        },
        respostaCorreta: "D"

        },
    {
        pergunta: "Qual o nome do meu primeiro gato?",
        opcoes: {
            A: "Fly",
            B: "Safira",
            C: "Cruel",
            D: "Chico",
        },
        respostaCorreta: "C"

        },
    {
        pergunta: "Qual minha cor favorita?",
        opcoes: {
            A: "Azul",
            B: "Rosa",
            C: "Laranja",
            D: "Branco",
        },
        respostaCorreta: "A"

        },
    {
        pergunta: "Qual o nome do meu amado pai?",
        opcoes: {
            A: "Elias",
            B: "Isaac",
            C: "Miguel",
            D: "Daniel",
        },
        respostaCorreta: "B"

        },
    {
        pergunta: "Quais desses medos eu tenho?",
        opcoes: {
            A: "Aranhas, baratas e cobras",
            B: "Altura, escuro e louva-Deus",
            C: "Vespas, palhaço e ratos",
            D: "Lagartixa, borboleta e agulha",
        },
        respostaCorreta: "B" 
    },
    {
        pergunta: "Na minha infância eu passava todos os verões aonde?",
        opcoes: {
            A: "Em casa com minha família",
            B: "Visitava meus parentes",
            C: "Em um Camping",
            D: "Viajava para Porto Alegre",
        },
        respostaCorreta: "C"

        },
    {
        pergunta: "Qual o outro idioma que eu sei falar, mas quase ninguém sabe?",
        opcoes: {
            A: "Espanhol",
            B: "Francês",
            C: "Inglês",
            D: "Italiano",
        },
        respostaCorreta: "A" 
    },    
    {
        pergunta: "Fiz uma viagem sozinha para comemorar meu aniversário de 28 anos, para onde eu fui?",
        opcoes: {
            A: "Bahia",
            B: "Rio de Janeiro",
            C: "Macéio",
            D: "Bombinhas",
        },
        respostaCorreta: "B"

        },
    {
        pergunta: "Sei fazer maça do amor, a primeira vez que eu fiz o que aconteceu?",
        opcoes: {
            A: "Derrubei a calda por toda a cozinha",
            B: "Deu tudo certo e vendi as maçãs no colégio",
            C: "A maçã ficou presa na boca da minha irmã",
            D: "Queimei a calda",
        },
        respostaCorreta: "C"

        },
    {
        pergunta: "Qual minha série de filmes favoritos?",
        opcoes: {
            A: "O Senhor dos Anéis",
            B: "Harry Potter",
            C: "Jurassic Park",
            D: "Matrix",
        },
        respostaCorreta: "C" 
    },
    {
        pergunta: "Quando eu ainda era criança, meus irmãos quase leveram uma bronca por minha causa. Qual foi o motivo?",
        opcoes: {
            A: "Joguei papel higiênico no teto",
            B: "Derrubei uma parede",
            C: "Coloquei fogo em casa",
            D: "Quebrei o vidro do carro",
        },
        respostaCorreta: "D" 
    },
    {
        pergunta: "Qual estilo de jogo de tabuleiro eu mais gosto?",
        opcoes: {
            A: "Jogos de guerra e dominação territorial",
            B: "Jogos de alocação de trabalhadores e coleta de recursos",
            C: "Jogos de mímica e desenho",
            D: "Jogos de cartas tradicionais",
        },
        respostaCorreta: "B"
    },
    {
        pergunta: "Se eu fosse presa por agressão, qual teria sido o motivo da briga?",
        opcoes: {
            A: "Alguém maltratando um animal",
            B: "Briga de trânsito",
            C: "Alguém que me estressou",
            D: "Não tem motivo, eu nunca brigaria",
        },
        respostaCorreta: "A"
    },
    {
        pergunta: "Se eu fosse presa por agressão, qual teria sido o motivo da briga?",
        opcoes: {
            A: "Alguém maltratando um animal",
            B: "Briga de trânsito",
            C: "Alguém que me estressou",
            D: "Não tem motivo, eu nunca brigaria",
        },
        respostaCorreta: "A"
    }

];

let indiceCuriosidade = 0;
let pontosCuriosidades = 0;
let nomeJogadorCuriosidade = "";

// 2. Inicia o Quiz
function iniciarQuizCuriosidades() {
    const inputNome = document.getElementById('inputNomeConvidado');
    nomeJogadorCuriosidade = inputNome.value.trim();

    if (nomeJogadorCuriosidade === "") {
        alert("Por favor, digite seu nome!");
        return;
    }

    document.getElementById('telaCadastroCuriosidades').classList.add('hidden');
    document.getElementById('telaQuizCuriosidades').classList.remove('hidden');

    indiceCuriosidade = 0;
    pontosCuriosidades = 0;
    carregarCuriosidade();
}

// 3. Carrega a pergunta e cria os botões A, B, C, D, E dinamicamente
function carregarCuriosidade() {
    const perguntaAtual = bancoCuriosidades[indiceCuriosidade];
    
    // Atualiza subtítulo e texto da pergunta
    document.getElementById('subtituloCuriosidade').innerText = `Pergunta ${indiceCuriosidade + 1} de ${bancoCuriosidades.length}`;
    document.getElementById('textoPergunta').innerText = perguntaAtual.pergunta;

    // Limpa a área de alternativas anterior
    const areaAlternativas = document.getElementById('areaAlternativas');
    areaAlternativas.innerHTML = "";

    // Pega as opções (A, B, C, D, E) do objeto e cria um botão para cada uma
    for (const [letra, textoOpcao] of Object.entries(perguntaAtual.opcoes)) {
        // Criação do elemento botão
        const botao = document.createElement('button');
        botao.className = "w-full text-left p-3 bg-fundoPreto border border-fundoVermelho rounded-lg hover:bg-fundoVermelho hover:text-white transition-colors text-fundoRosa text-sm font-carlito flex items-center";
        
        // Estrutura visual do botão: Letra em destaque + Texto
        botao.innerHTML = `
            <span class="font-manu text-fundoVermelho bg-fundoRosa px-2 py-1 rounded mr-3">${letra}</span>
            <span>${textoOpcao}</span>
        `;
        
        // Adiciona a ação de clique no botão chamando a função de verificação
        botao.onclick = () => verificarRespostaCuriosidade(letra);
        
        areaAlternativas.appendChild(botao);
    }
}

// 4. Valida a resposta escolhida
function verificarRespostaCuriosidade(letraEscolhida) {
    const perguntaAtual = bancoCuriosidades[indiceCuriosidade];

    // Se a letra escolhida for igual à resposta correta, ganha 1 ponto
    if (letraEscolhida === perguntaAtual.respostaCorreta) {
        pontosCuriosidades++;
    }

    // Avança para a próxima
    indiceCuriosidade++;

    if (indiceCuriosidade < bancoCuriosidades.length) {
        carregarCuriosidade();
    } else {
        salvarRankingCuriosidades();
    }
}

// 5. Salva e exibe o Ranking no Supabase
async function salvarRankingCuriosidades() {
    let rankingLocal = JSON.parse(localStorage.getItem('rankingCuriosidades')) || [];
    rankingLocal.push({ nome: nomeJogadorCuriosidade, pontos: pontosCuriosidades });
    rankingLocal.sort((a, b) => b.pontos - a.pontos);
    localStorage.setItem('rankingCuriosidades', JSON.stringify(rankingLocal));

    document.getElementById('telaQuizCuriosidades').classList.add('hidden');
    document.getElementById('telaRankingCuriosidades').classList.remove('hidden');

    document.getElementById('mensagemPontuacaoCuriosidades').innerHTML = `Valeu, <strong>${escapeHTML(nomeJogadorCuriosidade)}</strong>! Você acertou <strong>${pontosCuriosidades}</strong> de <strong>${bancoCuriosidades.length}</strong>.`;

    const listaRanking = document.getElementById('listaRankingCuriosidades');
    listaRanking.innerHTML = `<div class="p-3 text-center text-xs text-fundoRosa">Atualizando ranking...</div>`;

    let rankingFinal = rankingLocal;
    if (typeof dbSalvarRankingCuriosidades === 'function') {
        try {
            await dbSalvarRankingCuriosidades(nomeJogadorCuriosidade, pontosCuriosidades);
            const rankingBanco = await dbCarregarRankingCuriosidades();
            if (rankingBanco && rankingBanco.length > 0) {
                rankingFinal = rankingBanco;
            }
        } catch (e) {
            console.warn("Erro ao sincronizar ranking de curiosidades com Supabase, usando local:", e);
        }
    }

    listaRanking.innerHTML = "";
    rankingFinal.forEach((jogador, index) => {
        let posicao = index === 0 ? "👑" : `${index + 1}º`;
        let item = document.createElement('div');
        item.className = "flex justify-between items-center p-2.5 bg-fundoPreto rounded-lg border border-fundoVermelho/40 text-sm";
        item.innerHTML = `
            <span class="text-fundoRosa font-semibold">${posicao} ${escapeHTML(jogador.nome)}</span>
            <span class="text-white font-bold bg-fundoVermelho px-2.5 py-1 rounded-md text-xs">${jogador.pontos} pts</span>
        `;
        listaRanking.appendChild(item);
    });
}

// Função de segurança para escapar caracteres HTML e prevenir XSS
function escapeHTML(text) {
    if (!text) return "";
    return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function reiniciarQuizCuriosidades() {
    document.getElementById('telaRankingCuriosidades').classList.add('hidden');
    document.getElementById('telaCadastroCuriosidades').classList.remove('hidden');
    document.getElementById('inputNomeConvidado').value = "";
}