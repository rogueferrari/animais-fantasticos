export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((numero) => {
      const total = +numero.innerText;
      let start = 0;
      const timer = setInterval(() => {
        const incremento = Math.floor(total / 100);
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 50 * Math.random()); // faz os números carregarem na tela aleatoriamente
    });
  }

  let observer;

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      animaNumeros();
      observer.disconnect(); // disconecta a observação da mudança de atributos
    }
  }
  observer = new MutationObserver(handleMutation);

  const observerTarget = document.querySelector('.numeros');
  observer.observe(observerTarget, { attributes: true });
}
