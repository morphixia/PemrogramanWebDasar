const btnMenu = document.querySelector('.btn-menu');
const navMenu = document.querySelector('.nav-menu');

btnMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
