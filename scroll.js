function initAnimacaoScrollDireita() {
  const sections = document.querySelectorAll('.js-scroll-direita');
  if(sections.length) {
    const windowMetade = window.innerHeight * 0.9;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible)
          section.classList.add('ativo');
        else 
          section.classList.remove('ativo');
      })
    }
    

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}
initAnimacaoScrollDireita();

function initAnimacaoScrollesquerda() {
    const sections = document.querySelectorAll('.js-scroll-esquerda');
    if(sections.length) {
      const windowMetade = window.innerHeight * 0.9;
  
      function animaScroll() {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const isSectionVisible = (sectionTop - windowMetade) < 0;
          if(isSectionVisible)
            section.classList.add('ativo');
          else 
            section.classList.remove('ativo');
        })
      }
  
      animaScroll();
  
      window.addEventListener('scroll', animaScroll);
    }
  }
  initAnimacaoScrollesquerda();


  function initAnimacaoScrollCentro() {
    const sections = document.querySelectorAll('.js-scroll-centro');
    if(sections.length) {
      const windowMetade = window.innerHeight * 0.9;
  
      function animaScroll() {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const isSectionVisible = (sectionTop - windowMetade) < 0;
          if(isSectionVisible)
            section.classList.add('ativo');
          else 
            section.classList.remove('ativo');
        })
      }
  
      animaScroll();
  
      window.addEventListener('scroll', animaScroll);
    }
  }
  initAnimacaoScrollCentro();


  
  