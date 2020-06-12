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
    marquee1.marquee({ duration: 10000, gap: 20, delayBeforeStart: 0, startVisible: true, duplicated: true });
  }
  if (marquee2.length) {
    marquee2.marquee({ duration: 10000, gap: 20, delayBeforeStart: 0, startVisible: true, duplicated: true });
  }
  if (marquee3.length) {
    marquee3.marquee({ duration: 10000, gap: 20, delayBeforeStart: 0, startVisible: true, duplicated: true });
  }

  const marqueeServices = $('.services__marquee');
  if (marqueeServices.length) {
    marqueeServices.marquee({ duration: 10000, gap: 20, delayBeforeStart: 0, startVisible: true, duplicated: true });
  }
});