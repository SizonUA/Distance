const mobileMenu = document.querySelector('.mobile-menu'),
  menuSidebar = document.querySelector('.menu-sidebar');

// const footerButtons = document.querySelector('.footer-buttons'),
//   buttonItems = document.querySelector('.button-item'),
//   counterTitle = document.querySelector('.counter-title'),
//   counterText = document.querySelector('.counter-text');

// Mobile menu
mobileMenu.addEventListener('click', () => {
  menuSidebar.classList.toggle('menu-sidebar__active');
});

// Yore page footer counter
// footerButtons.addEventListener('click', (event) => {
//   event.preventDefault();
//   console.log("click");
//   console.log('event: ', event);
// })
