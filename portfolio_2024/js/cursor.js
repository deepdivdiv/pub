
$(document).ready(function() {

  gsap.set(['.cursor'],{xPercent:-50,yPercent:-50});
  
  let cur = document.querySelector('.cursor');
  let linkBtn = document.querySelectorAll('a[target="_blank"]');
  let imgTarget = document.querySelectorAll('img');
  let slideCursor = document.querySelectorAll('.swiper-slide');

  window.addEventListener('mousemove',e => {
      gsap.to(cur,0.2,{x:e.clientX,y:e.clientY});
  });
  slideCursor.forEach(slideEach => {
    slideEach.addEventListener('mouseenter', function() {
      cur.classList.add('slideGrab');
    });
    slideEach.addEventListener('mouseleave', function() {
      cur.classList.remove('slideGrab');
    });
  })

  imgTarget.forEach(imgEach => {
    imgEach.addEventListener('mouseenter', function() {
      cur.classList.add('imgTarget');
    });
    imgEach.addEventListener('mouseleave', function() {
      cur.classList.remove('imgTarget');
    });
  })

  linkBtn.forEach(linkEach => {
    linkEach.addEventListener('mouseenter', function() {
      cur.classList.remove('slideGrab');
      cur.classList.add('hover');
    });
    linkEach.addEventListener('mouseleave', function() {
      cur.classList.remove('hover');
      if (linkEach.closest('.swiper-slide:hover')) {
        cur.classList.add('slideGrab');
      }
    });
  })

});