const menu = document.querySelector('.header__menu');
const burger = document.querySelector('.burger');
burger.addEventListener('click', function() {
  this.classList.toggle('active');
  menu.classList.toggle('active');
  document.body.classList.toggle('lock');  
});

function scrollToHash(selector) {
  const top = $(selector).offset().top;
  $('html, body').animate({ scrollTop: top }, 500);
}

$('a[href*="#"]').on('click', function(e) {
  if (this.hash.length > 3) {
    scrollToHash(this.hash);
  }
});

// Загрузка страницы
$(document).ready(function() {
  $('.clients__big-title-first').marquee({ duration: 8000, gap: 50, duplicated: true });
  setTimeout(() => $('.clients__big-title-second').marquee({ duration: 8000, gap: 50, duplicated: true }), 2000);
  setTimeout(() => $('.clients__big-title-third').marquee({ duration: 8000, gap: 50, duplicated: true }), 4000);
});