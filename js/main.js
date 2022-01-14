'use strict';
{
const headerElement = document.getElementById('header');
document.addEventListener('scroll', () => {
let scrollY = window.pageYOffset;
console.log('scrollY');

if(scrollY > 140){
  headerElement.classList.add('active');
} else {
  headerElement.classList.remove('active');
}
});
const targetElement = document.querySelectorAll(".animationTarget");
console.log("画面の高さ", window.innerHeight)
document.addEventListener("scroll", () =>{
  console.log(targetElement);
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
}
