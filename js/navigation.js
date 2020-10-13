const navbar = document.querySelector('.navbar');
window.onscroll = () => {
  if (window.pageYOffset > 163) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
};

const menuOpenBtn = document.querySelector('.bars');
const menuDrawer = document.querySelector('.menuDrawer');
const menuCloseBtn = document.querySelector('.menuDrawer .fa-times');

menuOpenBtn.addEventListener('click', () => {
  menuDrawer.style.right = 0;
});
menuCloseBtn.addEventListener('click', () => {
  menuDrawer.style.right = -100 + '%';
});
