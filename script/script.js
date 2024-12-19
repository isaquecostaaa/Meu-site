const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});

function darkMode() {
    const pai = document.getElementById('toggle-dark-mode');
    const image = pai.firstElementChild
    
    image.classList.toggle('dark-mode-button')
    image.classList.toggle('light-mode-button')
    document.body.classList.toggle('light-mode')
  }