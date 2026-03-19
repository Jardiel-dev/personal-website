// ============================
// BOTÃO MODO ESCURO
// ============================
const botaoTema = document.getElementById('botao-tema');
const body = document.body;

botaoTema.addEventListener('click', () => {
  body.classList.toggle('modo-escuro');

  botaoTema.textContent = body.classList.contains('modo-escuro')
    ? 'Modo Claro ☀️'
    : 'Modo Escuro 🌙';
});

// ============================
// PROJETOS DINÂMICOS
// ============================
const botoes = document.querySelectorAll('.botoes-projetos button');
const descricao = document.getElementById('descricao-projeto');

// estado inicial
descricao.innerHTML = `<p>Selecione um projeto acima para ver a descrição.</p>`;

const projetos = {
  restaurante: {
  titulo: "Sistema de Restaurante",
  texto: "Sistema web com carrinho de compras, controle de quantidade e total dinâmico.",
  link: "https://jardiel-dev.github.io/RESTAURANTE/",
  ativo: true,
  status: "Concluído"
},



 
  banco: {
    titulo: "Sistema Bancário",
    texto: "Sistema bancário com contas, transferências e extrato.",
    link: "#",
    ativo: false,
    status: "Em desenvolvimento"
  },
  cursos: {
    titulo: "Plataforma de Cursos",
    texto: "Plataforma para cursos online com login e progresso.",
    link: "#",
    ativo: false,
    status: "Em desenvolvimento"
  },
 
  lazyLoading: {
    titulo: "Lazy Loading",
    texto: "Projeto demonstrando carregamento de imagens sob demanda.",
    link: "https://jardiel-dev.github.io/5_LAZY_LOADING/",
    ativo: true,
    status: "Concluído"
  },

  todo: {
  titulo: "Todo List Avançado",
  texto: "Aplicação completa de gerenciamento de tarefas com CRUD, busca, filtro e persistência com LocalStorage.",
  link: "https://jardiel-dev.github.io/6_TODO_LIST_AVANCADO/",
  ativo: true,
  status: "Concluído"
}
};



botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const tipo = botao.dataset.projeto;
    const projeto = projetos[tipo];

    let botaoProjeto = `
      <a class="link-projeto desativado" href="#">
        Projeto em desenvolvimento
      </a>
    `;

    if (projeto.ativo) {
      botaoProjeto = `
        <a class="link-projeto" href="${projeto.link}" target="_blank">
          Ver projeto
        </a>
      `;
    }

    descricao.innerHTML = `
      <h3>${projeto.titulo}</h3>
      <p>${projeto.texto}</p>
      <p><strong>🔧 Status:</strong> ${projeto.status}</p>
      ${botaoProjeto}
    `;
  });
});
