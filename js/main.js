'use strict';
{
const headerElement = document.getElementById('header');
document.addEventListener('scroll', () => {
let scrollY = window.pageYOffset;
// console.log('scrollY');

if(scrollY > 140){
  headerElement.classList.add('active');
} else {
  headerElement.classList.remove('active');
}
});
const targetElement = document.querySelectorAll(".animationTarget");
// console.log("画面の高さ", window.innerHeight)
document.addEventListener("scroll", () =>{
//   console.log(targetElement);
for (let i = 0; i < targetElement.length; i++){
  const getElementDistance = targetElement[i].getBoundingClientRect().top
  // if(window.innerHeight)
  if(i === 1){
    console.log(getElementDistance)
  }
  if(window.innerHeight > getElementDistance){
    targetElement[i].classList.add('show');
  }
}
});
let contact_position = $('#contact').offset().top - $(window).height();
let access_position = $('#access').offset().top - $(window).height();
  // #accessが表示された場合
  if(scroll > access_position){
    // #contactが表示されるまでの間は、背景画像をfadeInで表示する
    if(scroll < contact_position){
      console.log("test");
      $('.bg').fadeIn(500);
    } else {
      $('.bg').fadeOut(500);
    }
  // #accessが表示される前の場合
  } else {
    // 背景画像を表示しない
    $('.bg').fadeOut(500);
  }
}
