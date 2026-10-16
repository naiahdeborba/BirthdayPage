// Template padrão do cabeçalho (garante funcionamento no Chrome mesmo abrindo por arquivo local file:///)
const HTML_CABECALHO = `
<header class="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between relative">
    <!-- Logo -->
    <div class="flex items-center space-x-2">
        <div class="w-10 h-10 rounded-full bg-fundoVermelho flex items-center justify-center text-white shadow-md">
            <i class="fa-solid fa-wand-sparkles text-lg"></i>
        </div>
        <div class="flex flex-col">
            <span class="font-system-ui font-normal tracking-widest text-xl text-textoBranco leading-tight">Meus 30 anos...</span>
            <span class="text-[10px] tracking-[0.25em] text-textoBranco uppercase">Por Naiah</span>
        </div>
    </div>

    <!-- Links para Navegação (Desktop) -->
    <nav class="hidden md:flex items-center space-x-8 text-sm font-medium text-textoBranco font-manu">
        <a href="index.html" class="hover:text-fundoRosa transition-colors">Início</a>
        
        <!-- Menu Dropdown de Quizzes -->
        <div class="relative group z-50">
            <button class="hover:text-fundoRosa transition-colors flex items-center space-x-1 focus:outline-none py-2">
                <span>Quiz</span>
                <i class="fa-solid fa-angle-down text-xs"></i>
            </button>
            <!-- Subseções ocultas que aparecem ao passar o mouse -->
            <div class="absolute left-0 top-full pt-1 w-48 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div class="bg-fundoPreto border border-fundoVermelho rounded-lg shadow-xl flex flex-col py-2">
                    <a href="quiz.html" class="px-4 py-2 text-xs text-fundoRosa hover:bg-fundoDarkRed hover:text-white transition-colors">Qual era a minha idade?</a>
                    <a href="curiosidades.html" class="px-4 py-2 text-xs text-fundoRosa hover:bg-fundoDarkRed hover:text-white transition-colors">Curiosidades sobre mim</a>
                </div>
            </div>
        </div>

        <a href="cardapio.html" class="hover:text-fundoRosa transition-colors">Cardápio</a>
        <a href="presentes.html" class="hover:text-fundoRosa transition-colors">Presentes</a>
        <a href="local.html" class="hover:text-fundoRosa transition-colors">Local</a>
        <button onclick="if(typeof toggleCardRadio === 'function' && document.getElementById('painelRadio')){ toggleCardRadio(); } else { window.location.href = 'index.html'; }" class="hover:text-fundoRosa transition-colors cursor-pointer">Rádio</button>
    </nav>

    <!-- Botão Hamburguer para Mobile -->
    <button onclick="toggleMobileMenu()" class="md:hidden text-textoBranco text-xl p-2 rounded-lg hover:bg-fundoVermelho/30 transition-colors" aria-label="Abrir menu">
        <i class="fa-solid fa-bars"></i>
    </button>
</header>

<!-- Mobile Nav Drawer -->
<div id="mobileMenu" class="hidden fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex justify-end" onclick="if(event.target === this) toggleMobileMenu()">
    <div class="bg-fundoPreto border-l border-fundoVermelho w-[85%] max-w-xs h-full p-6 flex flex-col shadow-2xl overflow-y-auto" onclick="event.stopPropagation()">
        <!-- Topo do Menu -->
        <div class="flex justify-between items-center pb-4 mb-6 border-b border-fundoVermelho/40">
            <div class="flex items-center space-x-2">
                <div class="w-8 h-8 rounded-full bg-fundoVermelho flex items-center justify-center text-white shadow-md">
                    <i class="fa-solid fa-wand-sparkles text-sm"></i>
                </div>
                <span class="font-system-ui font-normal text-lg text-textoBranco">Meus 30 Anos...</span>
            </div>
            <button onclick="toggleMobileMenu()" class="w-10 h-10 flex items-center justify-center rounded-lg text-fundoRosa hover:text-white hover:bg-fundoVermelho/30 transition-colors text-2xl focus:outline-none" aria-label="Fechar menu">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>

        <!-- Links de Navegação -->
        <nav class="flex flex-col space-y-3 font-carlito text-base text-textoBranco">
            <a href="index.html" onclick="toggleMobileMenu()" class="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-fundoVermelho/30 hover:text-fundoRosa transition-colors border-b border-fundoVermelho/20">
                <i class="fa-solid fa-house text-fundoRosa w-5 text-center"></i>
                <span class="font-medium">Início</span>
            </a>
            
            <!-- Grupo de Quizzes com Destaque -->
            <div class="py-2 border-b border-fundoVermelho/20">
                <div class="flex items-center space-x-3 px-3 py-1 text-xs uppercase tracking-wider text-fundoRosa font-semibold">
                    <i class="fa-solid fa-brain w-5 text-center"></i>
                    <span>Quizzes:</span>
                </div>
                <div class="mt-1 space-y-1 pl-4">
                    <a href="quiz.html" onclick="toggleMobileMenu()" class="flex items-center space-x-2.5 px-3 py-2 rounded-lg text-sm text-textoBranco/90 hover:bg-fundoVermelho/30 hover:text-fundoRosa transition-colors">
                        <i class="fa-solid fa-cake-candles text-xs text-fundoRosa/80"></i>
                        <span>Qual era a minha idade?</span>
                    </a>
                    <a href="curiosidades.html" onclick="toggleMobileMenu()" class="flex items-center space-x-2.5 px-3 py-2 rounded-lg text-sm text-textoBranco/90 hover:bg-fundoVermelho/30 hover:text-fundoRosa transition-colors">
                        <i class="fa-solid fa-wand-magic-sparkles text-xs text-fundoRosa/80"></i>
                        <span>Curiosidades sobre mim</span>
                    </a>
                </div>
            </div>

            <a href="cardapio.html" onclick="toggleMobileMenu()" class="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-fundoVermelho/30 hover:text-fundoRosa transition-colors border-b border-fundoVermelho/20">
                <i class="fa-solid fa-utensils text-fundoRosa w-5 text-center"></i>
                <span class="font-medium">Cardápio</span>
            </a>
            <a href="presentes.html" onclick="toggleMobileMenu()" class="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-fundoVermelho/30 hover:text-fundoRosa transition-colors border-b border-fundoVermelho/20">
                <i class="fa-solid fa-gift text-fundoRosa w-5 text-center"></i>
                <span class="font-medium">Presentes</span>
            </a>
            <a href="local.html" onclick="toggleMobileMenu()" class="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-fundoVermelho/30 hover:text-fundoRosa transition-colors border-b border-fundoVermelho/20">
                <i class="fa-solid fa-location-dot text-fundoRosa w-5 text-center"></i>
                <span class="font-medium">Local</span>
            </a>
            <button onclick="toggleMobileMenu(); if(typeof toggleCardRadio === 'function' && document.getElementById('painelRadio')){ toggleCardRadio(); } else { window.location.href = 'index.html'; }" class="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-fundoVermelho/30 hover:text-fundoRosa transition-colors border-b border-fundoVermelho/20 text-left w-full cursor-pointer">
                <i class="fa-solid fa-radio text-fundoRosa w-5 text-center"></i>
                <span class="font-medium">Rádio da Festa</span>
            </button>
        </nav>
    </div>
</div>
`;

// Função para injetar o cabeçalho de forma infalível
function carregarCabecalho() {
    const container = document.getElementById("header-container");
    if (!container) return;

    // Se já estiver preenchido diretamente no HTML, não precisa fazer nada
    if (container.children.length > 0 && container.innerHTML.trim() !== "") {
        return;
    }

    // Se estiver abrindo como arquivo local (file:///), o Chrome bloqueia o fetch por CORS, então usa o template imediatamente
    if (window.location.protocol === 'file:') {
        container.innerHTML = HTML_CABECALHO;
        return;
    }

    // Em servidor web (http/https/Live Server), tenta fetch com fallback seguro
    fetch("header.html")
        .then(response => {
            if (!response.ok) throw new Error("HTTP " + response.status);
            return response.text();
        })
        .then(data => {
            container.innerHTML = data;
        })
        .catch(() => {
            container.innerHTML = HTML_CABECALHO;
        });
}

document.addEventListener("DOMContentLoaded", () => {
    carregarCabecalho();
    carregarRecadosDoBanco();
    iniciarContagemRegressiva(); //Inicia o cronômetro do quiz
    inicializarCarrosselDelicias();
});

// Função para controlar a abertura e fechamento do menu mobile
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

// Função para carregar os recados salvos no Supabase ao abrir a página
async function carregarRecadosDoBanco() {
    const lista = document.getElementById('listaRecados');
    if (!lista) return;

    if (typeof dbCarregarRecados !== 'function') return;

    try {
        const recados = await dbCarregarRecados();
        if (recados && recados.length > 0) {
            lista.innerHTML = "";
            recados.forEach(item => {
                const cartao = document.createElement('div');
                cartao.className = "p-4 bg-fundoRosa border-l-4 border-fundoVermelho rounded-r-lg shadow-sm animate-fade-in";
                cartao.innerHTML = `
                    <div class="flex justify-between items-center mb-1">
                        <p class="text-xs font-bold font-manu text-fundoVermelho">${escapeHTML(item.nome)}</p>
                        <span class="text-[10px] text-fundoVermelho/70 font-carlito">${formatarDataHora(item.created_at)}</span>
                    </div>
                    <p class="text-sm text-fundoVermelho leading-relaxed font-carlito">${escapeHTML(item.recado)}</p>
                `;
                lista.appendChild(cartao);
            });
        }
    } catch (err) {
        console.warn("Não foi possível carregar recados do banco:", err);
    }
}

function formatarDataHora(timestamp) {
    if (!timestamp) return "";
    try {
        const d = new Date(timestamp);
        return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
    } catch {
        return "";
    }
}

// Função para processar o envio do mural de recados
async function enviarRecado(){
    const inputNome = document.getElementById('inputNome');
    const inputRecado = document.getElementById('inputRecado');
    const lista = document.getElementById('listaRecados');
    const popup = document.getElementById('popupSucesso');

    const nome = inputNome.value.trim();
    const texto = inputRecado.value.trim();

    // Validação simples para não enviar campos vazios
    if (nome === "" || texto === ""){
        alert("Por favor, preencha o seu nome e o recado antes de enviar!");
        return;
    }

    // Cria elemento visual do novo recado imediatamente
    const cartaoRecado = document.createElement('div');
    cartaoRecado.className = "p-4 bg-fundoRosa border-l-4 border-fundoVermelho rounded-r-lg shadow-sm animate-fade-in";

    cartaoRecado.innerHTML = `
        <div class="flex justify-between items-center mb-1">
            <p class="text-xs font-bold font-manu text-fundoVermelho">${escapeHTML(nome)}</p>
            <span class="text-[10px] text-fundoVermelho/70 font-carlito">Agora</span>
        </div>
        <p class="text-sm text-fundoVermelho leading-relaxed font-carlito">${escapeHTML(texto)}</p>
    `;

    // Se só tinha o card de exemplo antigo, limpa antes
    if (lista.children.length === 1 && lista.textContent.includes("Bela Adormecida")) {
        lista.innerHTML = "";
    }

    // Adiciona o recado no topo da lista
    lista.prepend(cartaoRecado);

    // Limpa os campos após o envio
    inputNome.value = "";
    inputRecado.value = "";

    // Mostra o pop-up de sucesso
    if (popup) {
        popup.classList.remove('hidden');
        setTimeout(() => {
            popup.classList.add('hidden');
        }, 5000);
    }

    // Salva no banco de dados Supabase em segundo plano
    if (typeof dbSalvarRecado === 'function') {
        try {
            await dbSalvarRecado(nome, texto);
        } catch (err) {
            console.error("Erro ao persistir recado no Supabase:", err);
        }
    }
}

// Função de segurança para escapar caracteres HTML e prevenir XSS
function escapeHTML(text){
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Variáveis de controle do carrossel de delícias
let carrosselPausado = false;
let timeoutRetomarCarrossel = null;

// Função para pausar temporariamente a rolagem automática ao interagir manualmente
function pausarCarrosselTemporariamente(tempoMs = 3500) {
    carrosselPausado = true;
    if (timeoutRetomarCarrossel) clearTimeout(timeoutRetomarCarrossel);
    timeoutRetomarCarrossel = setTimeout(() => {
        carrosselPausado = false;
    }, tempoMs);
}

// Função para rolar o menu deslizante (carrossel) de delícias manualmente pelos botões
function rolarCarrossel(direcao) {
    const carrossel = document.getElementById('carrosselDelicias');
    if (!carrossel) return;

    pausarCarrosselTemporariamente(4000);

    const grupo = carrossel.querySelector('.carrossel-grupo');
    const larguraLoop = grupo ? grupo.offsetWidth + 24 : carrossel.scrollWidth / 2;
    const larguraPasso = window.innerWidth < 640 ? 300 : 340;

    // Se estiver no início e clicar para voltar, salta silenciosamente para a metade para manter o loop infinito
    if (direcao < 0 && carrossel.scrollLeft <= 10 && larguraLoop > 0) {
        carrossel.scrollLeft += larguraLoop;
    } else if (direcao > 0 && larguraLoop > 0 && carrossel.scrollLeft >= larguraLoop) {
        carrossel.scrollLeft -= larguraLoop;
    }

    carrossel.scrollBy({
        left: direcao * larguraPasso,
        behavior: 'smooth'
    });
}

// Inicializa o movimento contínuo suave + suporte a toque (swipe) e arraste no carrossel
function inicializarCarrosselDelicias() {
    const carrossel = document.getElementById('carrosselDelicias');
    if (!carrossel) return;

    let interagindo = false;

    // Eventos de toque (Mobile) e mouse (Desktop)
    carrossel.addEventListener('touchstart', () => {
        interagindo = true;
        carrosselPausado = true;
        if (timeoutRetomarCarrossel) clearTimeout(timeoutRetomarCarrossel);
    }, { passive: true });

    carrossel.addEventListener('touchend', () => {
        interagindo = false;
        pausarCarrosselTemporariamente(3500);
    }, { passive: true });

    carrossel.addEventListener('mouseenter', () => {
        interagindo = true;
        carrosselPausado = true;
    });

    carrossel.addEventListener('mouseleave', () => {
        interagindo = false;
        carrosselPausado = false;
    });

    // Mantém o loop infinito ao deslizar manualmente com o dedo
    carrossel.addEventListener('scroll', () => {
        const grupo = carrossel.querySelector('.carrossel-grupo');
        if (!grupo) return;
        const larguraLoop = grupo.offsetWidth + 24; // largura do grupo + gap (1.5rem = 24px)
        if (larguraLoop <= 0) return;

        if (carrossel.scrollLeft >= larguraLoop * 1.5) {
            carrossel.scrollLeft -= larguraLoop;
        }
    }, { passive: true });

    // Animação contínua suave via scrollLeft (permite rolar manualmente a qualquer momento)
    let acumuladorSubpixel = 0;
    function animarLoop() {
        if (!carrosselPausado && !interagindo) {
            acumuladorSubpixel += 0.65; // Velocidade suave
            if (acumuladorSubpixel >= 1) {
                const passo = Math.floor(acumuladorSubpixel);
                acumuladorSubpixel -= passo;
                carrossel.scrollLeft += passo;

                const grupo = carrossel.querySelector('.carrossel-grupo');
                if (grupo) {
                    const larguraLoop = grupo.offsetWidth + 24;
                    if (larguraLoop > 0 && carrossel.scrollLeft >= larguraLoop) {
                        carrossel.scrollLeft -= larguraLoop;
                    }
                }
            }
        }
        requestAnimationFrame(animarLoop);
    }

    requestAnimationFrame(animarLoop);
}



// --- LÓGICA DO QUIZ ---
//CONTAGEM REGRESSIVA E BLOQUEIO DO QUIZ
let intervaloContagem = null;

function iniciarContagemRegressiva(){
    const telaBloqueio = document.getElementById('telaBloqueio');
    const telaCadastro = document.getElementById('telaCadastro');
    //Se não tiver na página do quiz (onde esses elementos existem), ignora a função
    if (!telaBloqueio || !telaCadastro) return;

    const dataFesta = new Date(2026, 10, 14, 19, 30, 0).getTime();

    function atualizar(){
        const agora = new Date().getTime();
        const diferenca = dataFesta - agora;

        //Se o horário da festa já chegou ou passou
        if (diferenca <= 0){
            if (intervaloContagem) clearInterval(intervaloContagem);
            telaBloqueio.classList.add('hidden');
            telaCadastro.classList.remove('hidden');
            return;
        }

        //Se ainda é antes da festa, mantém bloqueado
        telaBloqueio.classList.remove('hidden');
        telaCadastro.classList.add('hidden');

        //Cálculo do tempo restante
        const dias = Math.floor(diferenca /(1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca %(1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca %(1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        // Atualiza os contadores no HTML
        const elDias = document.getElementById('diasContagem');
        const elHoras = document.getElementById('horasContagem');
        const elMinutos = document.getElementById('minutosContagem');
        const elSegundos = document.getElementById('segundosContagem');

        if (elDias) elDias.innerText = String(dias).padStart(2, '0');
        if (elHoras) elHoras.innerText = String(horas).padStart(2, '0');
        if (elMinutos) elMinutos.innerText = String(minutos).padStart(2, '0');
        if (elSegundos) elSegundos.innerText = String(segundos).padStart(2, '0');
    }
    atualizar();
    intervaloContagem = setInterval(atualizar, 1000);
}
// Lista de perguntas do quiz (Você pode alterar fotos, legendas e idades conforme preferir)
const perguntasQuiz = [
    {
        foto: "imagens/quiz/Nai41.jpg",
        legenda: "Comemorando o aniversário de uma princesa",
        idadeCorreta: 22
    },
    {
        foto: "imagens/quiz/Nai18.jpg",
        legenda: "Bela Adormecida depois de ser acordada",
        idadeCorreta: 13
    },
    {
        foto: "imagens/quiz/Nai20.jpg",
        legenda: "Após uma longa caçada por alimentos na idade média",
        idadeCorreta: 19
    },
    {
        foto: "imagens/quiz/Nai24.jpg",
        legenda: "Passeio na praia em busca de um tesouro pirata",
        idadeCorreta: 20
    },
    {
        foto: "imagens/quiz/Nai28.jpg",
        legenda: "Susto após ver uma assombração",
        idadeCorreta: 1
    },
    {
        foto: "imagens/quiz/Nai33.jpg",
        legenda: "Foto com o tapete Mágico após o gênio se aposentar",
        idadeCorreta: 2 
    },
    {
        foto: "imagens/quiz/Nai23.jpg",
        legenda: "Registro que vampiros existem (se um deles se parece comigo é pura coincidência)",
        idadeCorreta: 19
    },
    {
        foto: "imagens/quiz/Nai37.jpg",
        legenda: "Passeio pelo Jardim Secreto de Curitiba com presença de fadas",
        idadeCorreta: 21
    },
    {
        foto: "imagens/quiz/Nai9.jpg",
        legenda: "Propaganda legítima da água mágica - Fonte da juventude",
        idadeCorreta: 10
    },
    {
        foto: "imagens/quiz/Nai13.jpg",
        legenda: "Dia que os palhaços ficaram presos no trânsito e eu precisei fazer o serviço deles",
        idadeCorreta: 11
    },
    {
        foto: "imagens/quiz/Nai5.jpg",
        legenda: "Desvendando alguns mistérios perdidos no tempo.",
        idadeCorreta: 9
    },
    {
        foto: "imagens/quiz/Nai14.jpg",
        legenda: "Apenas mais um principe tentando me agradar",
        idadeCorreta: 8
    },
    {
        foto: "imagens/quiz/Nai29.jpg",
        legenda: "Tentando concertar um meio de transporte depois que o pegasus fugiu",
        idadeCorreta: 1
    },
    {
        foto: "imagens/quiz/Nai34.jpg",
        legenda: "Aproveitando a varanda do meu castelo mágico",
        idadeCorreta: 5
    },
    {
        foto: "imagens/quiz/Nai1.jpg",
        legenda: "Registro após uma longa caminhada pelos penhascos da Feiticeira",
        idadeCorreta: 17
    },
    {
        foto: "imagens/quiz/Nai8.jpg",
        legenda: "Tentando domar a filha da Moby-Dick",
        idadeCorreta: 10
    },
    {
        foto: "imagens/quiz/Nai2.jpg",
        legenda: "Voltando de um passeio com as sereias",
        idadeCorreta: 20
    },
    {
        foto: "imagens/quiz/Nai19.jpg",
        legenda: "Registro do dia que uma bruxa me amaldiçou a virar lobismulher",
        idadeCorreta: 15
    },
    {
        foto: "imagens/quiz/Nai21.jpg",
        legenda: "Mostrando a instalação de uma técnologia revulocionária que iria mudar o futuro",
        idadeCorreta: 19
    },
    {
        foto: "imagens/quiz/Nai8.jpg",
        legenda: "Tentando domar a filha da Moby-Dick",
        idadeCorreta: 10
    },
    {
        foto: "imagens/quiz/Nai8.jpg",
        legenda: "Tentando domar a filha da Moby-Dick",
        idadeCorreta: 10
    },
    {
        foto: "imagens/quiz/Nai8.jpg",
        legenda: "Tentando domar a filha da Moby-Dick",
        idadeCorreta: 10
    }
];

let perguntaAtual = 0;
let pontuacaoAtual = 0;
let nomeJogador = "";

// 1. Função para iniciar o quiz após o cadastro do nome
function iniciarQuiz() {
    const inputNome = document.getElementById('inputNomeConvidado');
    nomeJogador = inputNome.value.trim();

    if (nomeJogador === "") {
        alert("Por favor, digite seu nome ou apelido para continuar!");
        return;
    }

    // Oculta a tela de cadastro e exibe a tela de perguntas
    document.getElementById('telaCadastro').classList.add('hidden');
    document.getElementById('telaQuiz').classList.remove('hidden');

    perguntaAtual = 0;
    pontuacaoAtual = 0;
    carregarPergunta();
}

// 2. Carrega a pergunta atual na tela
function carregarPergunta() {
    const pergunta = perguntasQuiz[perguntaAtual];
    document.getElementById('subtituloPergunta').innerText = `Pergunta ${perguntaAtual + 1} de ${perguntasQuiz.length}`;
    document.getElementById('imagemQuiz').src = pergunta.foto;
    document.getElementById('legendaQuiz').innerText = `"${pergunta.legenda}"`;
}

// 3. Valida a resposta, pontua e avança
function verificarResposta() {
    const input = document.getElementById('inputResposta');
    const valorDigitado = parseInt(input.value);

    if (isNaN(valorDigitado)) {
        alert("Por favor, digite um número válido!");
        return;
    }

    // Verifica se a resposta está correta e adiciona pontos
    const pergunta = perguntasQuiz[perguntaAtual];
    if (valorDigitado === pergunta.idadeCorreta) {
        pontuacaoAtual++;
    }

    // Limpa o input e avança
    input.value = "";
    perguntaAtual++;

    if (perguntaAtual < perguntasQuiz.length) {
        carregarPergunta();
    } else {
        salvarEExibirRanking();
    }
}

// 4. Salva a pontuação no banco (Supabase) e exibe o ranking
async function salvarEExibirRanking() {
    // 1. Salva localmente como garantia imediata
    let rankingLocal = JSON.parse(localStorage.getItem('rankingQuizAniversario')) || [];
    rankingLocal.push({ nome: nomeJogador, pontos: pontuacaoAtual });
    rankingLocal.sort((a, b) => b.pontos - a.pontos);
    localStorage.setItem('rankingQuizAniversario', JSON.stringify(rankingLocal));

    // 2. Oculta a tela do quiz e exibe a tela de ranking
    document.getElementById('telaQuiz').classList.add('hidden');
    document.getElementById('telaRanking').classList.remove('hidden');

    // 3. Exibe a mensagem individual do usuário
    document.getElementById('mensagemPontuacao').innerHTML = `Parabéns, <strong>${escapeHTML(nomeJogador)}</strong>! Você acertou <strong>${pontuacaoAtual}</strong> de <strong>${perguntasQuiz.length}</strong> perguntas.`;

    const listaRankingHTML = document.getElementById('listaRanking');
    listaRankingHTML.innerHTML = `<div class="p-3 text-center text-xs text-fundoRosa">Atualizando ranking...</div>`;

    // 4. Salva no Supabase e carrega ranking atualizado com todos os participantes
    let rankingFinal = rankingLocal;
    if (typeof dbSalvarRankingFotos === 'function') {
        try {
            await dbSalvarRankingFotos(nomeJogador, pontuacaoAtual);
            const rankingBanco = await dbCarregarRankingFotos();
            if (rankingBanco && rankingBanco.length > 0) {
                rankingFinal = rankingBanco;
            }
        } catch (e) {
            console.warn("Erro ao sincronizar ranking com Supabase, usando local:", e);
        }
    }

    // 5. Renderiza o ranking
    listaRankingHTML.innerHTML = "";
    rankingFinal.forEach((jogador, index) => {
        let posicaoIcone = index === 0 ? "👑" : `${index + 1}º`;
        let item = document.createElement('div');
        item.className = "flex justify-between items-center p-2.5 bg-fundoPreto rounded-lg border border-fundoVermelho/40 text-sm";
        item.innerHTML = `
            <span class="text-fundoRosa font-semibold">${posicaoIcone} ${escapeHTML(jogador.nome)}</span>
            <span class="text-white font-bold bg-fundoVermelho px-2.5 py-1 rounded-md text-xs">${jogador.pontos} pts</span>
        `;
        listaRankingHTML.appendChild(item);
    });
}

// 5. Reinicia o quiz para um novo participante
function reiniciarQuiz() {
    document.getElementById('telaRanking').classList.add('hidden');
    document.getElementById('telaCadastro').classList.remove('hidden');
    document.getElementById('inputNomeConvidado').value = "";
}

// ==========================================
// FUNÇÕES DA RÁDIO FLUTUANTE (OPÇÃO 1)
// ==========================================

function sincronizarUIRadio(tocando) {
    const iconePlay = document.getElementById('iconePlay');
    const iconePlayCard = document.getElementById('iconePlayCard');
    const textoStatusMini = document.getElementById('textoStatusMini');
    const textoBotaoCard = document.getElementById('textoBotaoCard');
    const statusMusica = document.getElementById('statusMusica');
    const discoVinil = document.getElementById('discoVinil');
    const equalizerBars = document.getElementById('equalizerBars');

    if (tocando) {
        if (iconePlay) iconePlay.classList.add('animacao-vinil');
        if (discoVinil) discoVinil.classList.add('animacao-vinil');
        if (iconePlayCard) iconePlayCard.className = "fa-solid fa-pause";
        if (textoStatusMini) textoStatusMini.textContent = "Pausar Rádio";
        if (textoBotaoCard) textoBotaoCard.textContent = "Pausar";
        if (statusMusica) statusMusica.textContent = "Tocando trilha sonora... ♪";
        if (equalizerBars) equalizerBars.classList.remove('hidden');
    } else {
        if (iconePlay) iconePlay.classList.remove('animacao-vinil');
        if (discoVinil) discoVinil.classList.remove('animacao-vinil');
        if (iconePlayCard) iconePlayCard.className = "fa-solid fa-play";
        if (textoStatusMini) textoStatusMini.textContent = "Tocar Música";
        if (textoBotaoCard) textoBotaoCard.textContent = "Tocar";
        if (statusMusica) statusMusica.textContent = "Música pausada";
        if (equalizerBars) equalizerBars.classList.add('hidden');
    }
}

function alternarMusica() {
    const audio = document.getElementById('musicaFesta');
    if (!audio) return;

    // Garante que o arquivo está apontado
    if (!audio.src || audio.src === "" || audio.src.endsWith("/")) {
        audio.src = "musica.mp3";
    }

    if (audio.paused) {
        audio.muted = false;
        if (audio.volume === 0 || audio.volume === 1) audio.volume = 0.2;

        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                sincronizarUIRadio(true);
            }).catch(erro => {
                console.warn("Tentativa de reprodução:", erro);
                // Força o carregamento e tenta novamente
                audio.load();
                audio.play().then(() => {
                    sincronizarUIRadio(true);
                }).catch(erroFinal => {
                    console.error("Falha ao tocar música:", erroFinal);
                    const statusMusica = document.getElementById('statusMusica');
                    if (statusMusica) {
                        statusMusica.textContent = "Dê mais um clique para iniciar!";
                    }
                });
            });
        }
    } else {
        audio.pause();
        sincronizarUIRadio(false);
    }
}

function alterarVolume(val) {
    const audio = document.getElementById('musicaFesta');
    if (audio) {
        audio.volume = parseFloat(val);
    }
}

function toggleCardRadio() {
    const painel = document.getElementById('painelRadio');
    if (painel) {
        painel.classList.toggle('hidden');
    }
}

function fecharCardRadio() {
    const painel = document.getElementById('painelRadio');
    if (painel) {
        painel.classList.add('hidden');
    }
}

// Configurações e sincronização ao carregar o documento
document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('musicaFesta');
    if (audio) {
        audio.volume = 0.2; // Volume inicial em 20%
        audio.addEventListener('play', () => sincronizarUIRadio(true));
        audio.addEventListener('pause', () => sincronizarUIRadio(false));
        audio.addEventListener('ended', () => sincronizarUIRadio(false));
    }
});