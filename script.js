/*Função que muda a classe ativo das sections de acordo com click na imagem,como padrão 
as sections estão como "display:none" com a classe ativo mudam para "display:block" 
com efeitos keyframes*/
function textoAnimais() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}

/*Função por padrão ja habilita o 1ºdt e dd como ativo, faz um forEach em todos os "dt"
e passa um evento de click em cada que chama a função "activeAccordion"
que adiciona uma classe ao "item" com o this, o nextElementSibling pega 
o proximo elemento e para ser adicionado a classe ativo, 
os efeitos estao no CSS*/
function accordionList() {
  const accordionList = document.querySelectorAll('.js-accordion dt')
  if (accordionList.length) {

    accordionList[0].classList.add('ativo')
    accordionList[0].nextElementSibling.classList.add('ativo')

    function activeAccordion(event) {
      // o this faz referecia ao item que foi clicado
      this.classList.toggle('ativo')
      this.nextElementSibling.classList.toggle('ativo')
    }


    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
}
/* FIM DO ACCORDIONLIST */


/* Função pega todas os links internos, executa um forEach e adiciona um evento de click 
chamando a função "scrollToSection", o preventDefault previne que os links funcionem por padrao
pega o atributo "href" que esta na propriedade currentTarget do evento= Exemplo "#animais",
 assim com o document.querySelector(#animais) ele retorna toda a section  podendo deslizar com o scrollIntoView*/

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })
}
/*=======================================================*/

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade < 0); // true ou false

        if (isSectionVisible) { section.classList.add('ativo') }
      })
    }
  }
  window.addEventListener('scroll', animaScroll)

  animaScroll() //Iniar pelo menos uma vez para nao ficar vazio

}







//Executa funções no escopo global
textoAnimais()
accordionList()
initScrollSuave()
initAnimacaoScroll()