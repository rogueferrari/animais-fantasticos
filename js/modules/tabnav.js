export default function initTabNav() {
  // função criado para isolar o código no escopo dela
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  // função criada para adicionar uma classe ao elemento quando passar um número como argumento.
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add('ativo', direcao);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    // função criada p ao clique, add o index do element clicado dentro do argumento da função acima
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
