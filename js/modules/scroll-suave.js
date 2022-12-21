// métodos criados para gerar um scroll suave na tela ao clicar em algum link interno
export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    "[data-menu='suave'] a[href^='#']"
  );

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // forma alternativa de gerar scroll na página
    /* const topo = section.offsetTop;
       window.scrollTo({
       top: topo,
       behavior: "smooth",
     });
    */
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
