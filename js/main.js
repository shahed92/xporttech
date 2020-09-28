let navItem = document.querySelectorAll('.nav-item');

let navbarToggle = document.querySelector('.navbar-toggler');
let toggleMenu = document.querySelector('#navbarNavDropdown');

////toggle nav
navbarToggle.addEventListener('click', () => {
  toggleMenu.classList.toggle('show');
});

///end toggle nav

navItem.forEach((btn) => {
  btn.addEventListener('click', function () {
    navItem.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
  });
});

//////pop up form
const popUpBtn = document.querySelector('.pop-up-btn');
const form = document.querySelector('form');
const closeBtn = document.querySelector('.close-btn');

popUpBtn.addEventListener('click', () => {
  form.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
  form.style.display = 'none';
});
