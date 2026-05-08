// Informações pessoais e dados do portfólio
const informacoesPessoais = {
    data_incio: '2023-01-01', // Data de início dos estudos
    data_formatura: '2026-01-01', // Data prevista para formatura
    bio: "Sou um estudante de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e desenvolvimento web. Estou sempre em busca de novos desafios e oportunidades para aprender e crescer na área de TI. Meu objetivo é me tornar um desenvolvedor back-end habilidoso, capaz de criar experiências digitais incríveis e inovadoras."
};

const habilidades = [
    { nome: 'HTML5', icone: 'fab fa-html5' },
    { nome: 'CSS3', icone: 'fab fa-css3-alt' },
    { nome: 'JavaScript', icone: 'fab fa-js' },
    { nome: 'Python', icone: 'fab fa-python' },
    { nome: 'Automação QA', icone: 'fas fa-cog' },
    { nome: 'API REST', icone: 'fas fa-network-wired' },
    { nome: 'Git', icone: 'fab fa-git-alt' },
    { nome: 'GitHub', icone: 'fab fa-github' },
    { nome: 'SQL', icone: 'fas fa-database' },
];

const projetos = [
    {
        nome: 'PlantLens Landing Page',
        descricao: 'Página de identificação de plantas e doenças usando IA fictícia.',
        link: 'https://github.com/RafaelAlvesG/plantlens-landing-page'
    },
    {
        nome: 'Sistema de Estacionamento',
        descricao: 'Sistema com Tkinter/Python conectando em um banco SQlite Local.',
        link: 'https://github.com/RafaelAlvesG/sistema-estacionamento-python'
    }
];


// Função para efeito de digitação bonitinho no front-end
function digitarSubtitulo() {
    const elementoTexto = document.querySelector('.texto-digitando');
    const frases = ['Desenvolvedor Back-end', 'Aprendizado Contínuo', 'Solucionando Problemas'];
    let indiceFrase = 0;
    let indiceLetra = 0;
    let estaApagando = false;

    function digitar() {
        const fraseAtual = frases[indiceFrase];
        if (estaApagando) {
            elementoTexto.textContent = fraseAtual.substring(0, indiceLetra - 1);
            indiceLetra--;
        } else {
            elementoTexto.textContent = fraseAtual.substring(0, indiceLetra + 1);
            indiceLetra++;
        }

        let velocidadeDigitação = estaApagando ? 50 : 100;

        if (!estaApagando && indiceLetra === fraseAtual.length) {
            estaApagando = true;
            velocidadeDigitação = 1500; // Pausa no final da frase
        } else if (estaApagando && indiceLetra === 0) {
            estaApagando = false;
            indiceFrase = (indiceFrase + 1) % frases.length;
            velocidadeDigitação = 500; // Pausa antes da próxima frase
        }
        
        setTimeout(digitar, velocidadeDigitação);

    }
    digitar();
}

// Iniciar as funções
document.addEventListener('DOMContentLoaded', () => {
    digitarSubtitulo();
});
