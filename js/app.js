const menuBtn = document.querySelector(`.menu-btn`);
const navMenu = document.querySelector(`.nav-menu`);

//////// menu-btn
let menuOpen = false;
menuBtn.addEventListener(`click`, function () {
  navMenu.classList.toggle(`active`);
  if (!menuOpen) {
    menuBtn.classList.add(`open`);
    menuOpen = true;
  } else {
    menuBtn.classList.remove(`open`);
    menuOpen = false;
  }
});
navMenu.addEventListener(`click`, function () {
  navMenu.classList.remove(`active`);
  menuBtn.classList.remove(`open`);
  menuOpen = false;
});
/////
const eventsGallery = document.querySelector('.events-gallery');
const allEvents = document.querySelectorAll('.events-gallery a');
window.addEventListener('scroll', function () {
  if (window.scrollY > eventsGallery.offsetTop - 400) {
    for (var i = 0; i < allEvents.length; i++) {
      allEvents[i].classList.add('add-flip');
    }
  }
});
