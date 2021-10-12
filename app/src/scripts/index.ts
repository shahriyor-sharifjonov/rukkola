// Header Menu
const headerButton: HTMLButtonElement = document.querySelector(".header__button");
const headerMenu: HTMLUListElement = document.querySelector(".header__mob-menu");
const body :HTMLElement = document.querySelector('body');
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
  checkMenu()
};

function checkMenu(){
  if (menuOpened) 
    body.classList.add('overflow-hidden'); 
  else 
    body.classList.remove('overflow-hidden');
}
headerButton.onclick = menuToggle;

window.onclick = (e: MouseEvent) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};

[].map.call(document.querySelectorAll('[anim="ripple"]'), el=> {
  el.addEventListener('click',e => {
      e = e.touches ? e.touches[0] : e;
      const r = el.getBoundingClientRect(), d = Math.sqrt(Math.pow(r.width,2)+Math.pow(r.height,2)) * 2;
      el.style.cssText = `--s: 0; --o: 1;`;  el.offsetTop; 
      el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};`
  })
})

function openDrop(el){
  el.classList.toggle('active')
}

window.addEventListener('click', function(e:any){
  if(e.target.classList.contains('header__location-li')){
    this.document.querySelector('.header__location-btn').classList.remove('active')
  }
})

var swiper = new Swiper(".header-carousel", {
  slidesPerView: "auto",
  spaceBetween: 0,
  freeMode: 'true',
  pagination: {
    clickable: true
  }
});

var swiper4 = new Swiper(".cart-carousel", {
  slidesPerView: "auto",
  spaceBetween: 0,
  pagination: {
    clickable: true
  }
});

var stickyOffset = $('.sticky').offset().top;

$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= stickyOffset) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

var swiper2 = new Swiper(".carousel__main", {
  spaceBetween: 0,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper3 = new Swiper(".carousel__thumb", {
  spaceBetween: 4,
  grabCursor: true,
  pagination: {
    el: ".carousel__thumb-pagination",
    clickable: true,
  },
  thumbs: {
    swiper: swiper2,
  },
});

var swiper5 = new Swiper(".main-carousel", {
  slidesPerView: 1,
  grabCursor: true,
  pagination: {
    el: ".main-carousel__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".main-carousel-btn-next",
    prevEl: ".main-carousel-btn-prev",
  },
});

$(document).ready(function() {
  $(".accordeon__item > button").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".accordeon__content ")
        .slideUp(200);
    } else {
      $(".accordeon__item > button").removeClass("active");
      $(this).addClass("active");
      $(".accordeon__content ").slideUp(200);
      $(this)
        .siblings(".accordeon__content ")
        .slideDown(200);
    }
  });
});

