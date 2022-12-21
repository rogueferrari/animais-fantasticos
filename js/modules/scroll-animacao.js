export default function initAnimacaoScroll() {
  // código para  animar elementos ao dá o scroll na tela.
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const windowMetade = window.innerHeight * 0.8;

  function animaScroll() {
    sections.forEach((section) => {
      // método para retornar distancia entre o elemento e extremidades da pagina
      const sectionTop = section.getBoundingClientRect().top;
      const topArredondado = Math.round(sectionTop);
      const isSectionVisible = topArredondado - windowMetade < 0;
      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }
  if (sections.length) {
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
