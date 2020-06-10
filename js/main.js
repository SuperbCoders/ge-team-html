const menu = document.querySelector('.header__menu');
const burger = document.querySelector('.burger');
burger.addEventListener('click', function() {
  this.classList.toggle('active');
  menu.classList.toggle('active');
  document.body.classList.toggle('lock');  
});

$(document).on('ready', function() {
  
});

function scrollToHash(selector) {
  const top = $(selector).offset().top;
  $('html, body').animate({ scrollTop: top }, 500);
}

$('a[href*="#"]').on('click', function(e) {
  if (this.hash.length > 3) {
    scrollToHash(this.hash);
  }
})