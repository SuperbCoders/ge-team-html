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
  const marquee1 = $('.clients__big-title-first');
  const marquee2 = $('.clients__big-title-second');
  const marquee3 = $('.clients__big-title-third');
  if (marquee1.length) {
    marquee1.marquee({ duration: 8000, gap: 50, duplicated: true });
  }
  if (marquee2.length) {
    setTimeout(() => {
      marquee2.css('display', 'block');
      marquee2.marquee({ duration: 8000, gap: 50, duplicated: true });
    }, 2000);
  }
  if (marquee3.length) {
    setTimeout(() => {
      marquee3.css('display', 'block');
      marquee3.marquee({ duration: 8000, gap: 50, duplicated: true });
    }, 4000);
  }
});