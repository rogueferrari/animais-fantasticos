export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.8;

    this.animaScroll = this.animaScroll.bind(this);
  }
  // código para  animar elementos ao dá o scroll na tela.

  animaScroll() {
    this.sections.forEach((section) => {
      // método para retornar distancia entre o elemento e extremidades da pagina
      const sectionTop = section.getBoundingClientRect().top;
      const topArredondado = Math.round(sectionTop);
      const isSectionVisible = topArredondado - this.windowMetade < 0;
      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  init() {
    this.animaScroll();
    window.addEventListener('scroll', this.animaScroll);
  }
}
