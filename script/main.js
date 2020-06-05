const mobileMenu = document.querySelector('.mobile-menu'),
  menuSidebar = document.querySelector('.menu-sidebar');

mobileMenu.addEventListener('click', () => {
  menuSidebar.classList.toggle('menu-sidebar__active');
})
