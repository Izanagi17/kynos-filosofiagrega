function carregarConteudo(arquivo) {
    fetch(arquivo)
    .then(res => res.text())
    .then(html => {
        document.querySelector('.conteudo').innerHTML = html;
    });
}

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".conteudo section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, {
    threshold: 0.2
  });

  sections.forEach(sec => observer.observe(sec));
});

// Informações sobre os filósofos
const autoresInfo = {
  // Filósofos pré-socráticos
  tales: `
    <h3>Tales de Mileto</h3>
    <p>Considerado o primeiro filósofo ocidental, Tales acreditava que a água era o princípio fundamental de todas as coisas. Também foi matemático e astrônomo.</p>
  `,
  anaximandro: `
    <h3>Anaximandro</h3>
    <p>Discípulo de Tales, propôs o "ápeiron" (ilimitado ou indefinido) como origem de tudo, em vez de um elemento físico.</p>
  `,
  anaximenes: `
    <h3>Anaxímenes</h3>
    <p>Para Anaxímenes, o ar era o princípio de tudo. Ele acreditava que as transformações do ar originavam todos os seres.</p>
  `,
  heraclito: `
    <h3>Heráclito</h3>
    <p>Famoso pela frase "Tudo flui", defendia que o fogo era o princípio fundamental e que a mudança é a essência do universo.</p>
  `,
  parmenides: `
    <h3>Parmênides</h3>
    <p>Contrapôs Heráclito, afirmando que a verdadeira realidade é imutável e que as mudanças são ilusões dos sentidos.</p>
  `,
  pitagoras: `
    <h3>Pitágoras</h3>
    <p>Conhecido pelo Teorema de Pitágoras, fundou uma escola que via os números como essência de todas as coisas.</p>
  `,
  empedocles: `
    <h3>Empédocles</h3>
    <p>Propôs que tudo é composto por quatro elementos: terra, água, ar e fogo, unidos e separados por forças de amor e ódio.</p>
  `,
  anaxagoras: `
    <h3>Anaxágoras</h3>
    <p>Introduziu a ideia de "Nous" (mente cósmica) como princípio organizador do universo e afirmou que tudo contém uma parte de tudo.</p>
  `,
  democrito: `
    <h3>Demócrito</h3>
    <p>Desenvolveu a teoria atômica, afirmando que tudo é formado por átomos indivisíveis e vazio.</p>
  `,
  xenofanes: `
    <h3>Xenófanes</h3>
    <p>Criticou a religião antropomórfica e propôs a existência de um deus único, eterno e imutável.</p>
  `,
  zenao: `
    <h3>Zenão de Eleia</h3>
    <p>Conhecido pelos paradoxos que desafiam a ideia de movimento e pluralidade, defendendo as ideias de Parmênides.</p>
  `,

  // Filósofos Socráticos
  socrates: `
    <h3>Sócrates</h3>
    <p>Considerado o pai da filosofia moral, buscava o autoconhecimento e a verdade através do diálogo e da maiêutica. Não deixou escritos.</p>
  `,
  platao: `
    <h3>Platão</h3>
    <p>Discípulo de Sócrates, fundou a Academia e desenvolveu a Teoria das Ideias, distinguindo o mundo sensível do mundo das ideias.</p>
  `,
  aristoteles: `
    <h3>Aristóteles</h3>
    <p>Discípulo de Platão, fundou o Liceu e contribuiu para diversas áreas do saber, como lógica, ética, política, biologia e metafísica.</p>
  `,

  // Filósofos Estoicismo
  marcoaurelio: `
    <h3>Marco Aurélio</h3>
    <p>Imperador romano e filósofo estoico, autor das "Meditações", obra sobre autocontrole e virtude.</p>
  `,
  zenao: `
    <h3>Zenão de Cítio</h3>
    <p>Fundador do estoicismo, ensinava a viver de acordo com a razão e a natureza, buscando a virtude como bem supremo.</p>
  `,
  epiteto: `
    <h3>Epiteto</h3>
    <p>Filósofo estoico, ex-escravo, ensinava sobre liberdade interior e aceitação do destino.</p>
  `,
  seneca: `
    <h3>Sêneca</h3>
    <p>Filósofo, dramaturgo e político romano, escreveu cartas e tratados sobre ética, virtude e serenidade.</p>
  `,
  cleantes: `
    <h3>Cleantes de Assos</h3>
    <p>Segundo líder da escola estoica, conhecido pelo "Hino a Zeus" e por desenvolver a física estoica.</p>
  `,
  crisipo: `
    <h3>Crisipo de Solis</h3>
    <p>Terceiro líder do estoicismo, sistematizou a lógica e a ética estoica, tornando-se um dos principais pensadores da escola.</p>
  `,
  panecio: `
    <h3>Panécio de Rodes</h3>
    <p>Introduziu o estoicismo em Roma, adaptando-o à cultura romana e influenciando Cícero.</p>
  `,
  posidonio: `
    <h3>Posidônio de Apameia</h3>
    <p>Filósofo, astrônomo e geógrafo, ampliou o estoicismo com estudos sobre ciência e ética.</p>
  `,

  // Filósofos Epicurismo
  epicuro: `
    <h3>Epicuro</h3>
    <p>Fundador do epicurismo, defendia a busca do prazer moderado e a ausência de perturbações como caminho para a felicidade.</p>
  `,
  metrodoro: `
    <h3>Metrodoro de Lâmpsaco</h3>
    <p>Discípulo e amigo de Epicuro, ajudou a desenvolver e divulgar o pensamento epicurista.</p>
  `,
  hermarco: `
    <h3>Hermarco de Mitilene</h3>
    <p>Sucessor de Epicuro na liderança da escola, escreveu sobre ética e religião.</p>
  `,
  lucrecio: `
    <h3>Lucrécio</h3>
    <p>Poeta e filósofo romano, autor de "Da Natureza das Coisas", obra que expõe o epicurismo em versos.</p>
  `,
  filodemo: `
    <h3>Filodemo de Gádara</h3>
    <p>Filósofo e poeta, importante divulgador do epicurismo em Roma, escreveu sobre ética e poesia.</p>
  `,
  diogenesenoanda: `
    <h3>Diógenes de Enoanda</h3>
    <p>Filósofo epicurista que mandou gravar ensinamentos de Epicuro em um grande muro de pedra em Enoanda.</p>
  `,

  // Fechar informações sobre alguém
  X: `
  
  `
};


$(document).ready(function() {
  $('.autor-link').on('click', function(e) {
    e.preventDefault();

    const autor = $(this).data('autor');
    const conteudo = autoresInfo[autor] || '<p>Informações não disponíveis. <br><br> Alguma dica? <br> Acesse: <a href="contato.html">contato</a></p>';

    $('#info-autor').html(conteudo).hide().fadeIn(666);
  });
});

// Script Contato

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-contato');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');

    if (form) {
        form.addEventListener('submit', function (e) {
            // Exibe mensagem de sucesso apenas se o formulário for válido
            if (form.checkValidity()) {
                mensagemSucesso.style.display = 'block';
                setTimeout(() => {
                    mensagemSucesso.style.display = 'none';
                }, 4000);
            }
        });
    }
});