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

window.addEventListener('click', function(e){
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