const menu = document.querySelector(".menu-icon");
const overlay = document.querySelector(".header__overlay");
const nav = document.querySelector(".header__nav");
const body = document.querySelector('body')

menu.addEventListener("click", () => {
  overlay.classList.toggle("activo");
  nav.classList.toggle("activo");
  body.classList.toggle("activo");

  if (menu.classList.contains("no-move")) {
    menu.classList.remove("no-move");
    menu.classList.add("activo");
  } else if (menu.classList.contains("activo")) {
    menu.classList.remove("activo");
    menu.classList.add("no-move");
  }
});



//GSAP
const tl = gsap.timeline({defaults: {duration:0.75, ease:"power1.out"}})

tl.fromTo('.header__logo-wrap', {x:'-200%', opacity:0},{x:0, opacity:1})


const enlaces = document.querySelectorAll('.header__nav-ul .header__nav-li')

enlaces.forEach(enlace => {
  tl.fromTo(enlace,{y:'-100%',opacity:0},{y:0,opacity:1,duration:0.3}, '<35%')
})

tl.fromTo('.hero__img',{y:'100%',opacity:0},{y:0,opacity:1,duration:0.8},'<30%')
tl.fromTo('.hero__title',{x:'50%',opacity:0},{x:0,opacity:1},'<30%')
tl.fromTo('.hero__text-right',{x:'-50%',opacity:0},{x:0,opacity:1},'<')
tl.fromTo('.news',{x:'100%',opacity:0},{x:0,opacity:1,duration:0.6},'<30%')


const tops = document.querySelectorAll('.top__card-wrap')
tops.forEach(top => {
  tl.fromTo(top,{y:'100%',opacity:0},{y:0,opacity:1,duration:0.6}, '<35%')
})