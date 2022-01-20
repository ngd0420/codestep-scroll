'use strict';
{
  // ヘッダー
  const headerElement = document.getElementById('header');
  document.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;
    console.log(scrollY);

    if (scrollY > 140) {
      headerElement.classList.add('active');
    } else {
      headerElement.classList.remove('active');
    }
  });



  // テキスト
  const targetElement = document.querySelectorAll(".animationTarget");
  console.log("画面の高さ", window.innerHeight)
  document.addEventListener("scroll", () => {
      console.log(targetElement);
    for (let i = 0; i < targetElement.length; i++) {
      const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * 1
      if(window.innerHeight)
      // if (i === 1) {
      // }
      if (window.innerHeight > getElementDistance) {
        targetElement[i].classList.add('show');
      }
    }
  });
}

// サイドバー
const sidebarElementOne = document.getElementById('sidebar-box_one');
console.log(sidebarElementOne);
document.addEventListener("scroll", () =>{
  let scrollY = window.pageYOffset;
  console.log(scrollY);
  if(scrollY > 1600){
    sidebarElementOne.classList.add('appear');
  }
});

const sidebarElementTwo = document.getElementById('sidebar-box_two');
document.addEventListener("scroll", () =>{
  let scrollY = window.pageYOffset;
  console.log(scrollY);
  if(scrollY > 1600){
    sidebarElementTwo.classList.add('appear');
  }
});


const galleryTitle = document.querySelector('.gallery-title');
document.addEventListener("scroll", () =>{
  let scrollY = window.pageYOffset;
  console.log(scrollY);
  if(scrollY > 1000){
    galleryTitle.classList.add('fadeIn');
  }
});

const flowerOne = document.getElementById('flower_one');
console.log(flowerOne);
document.addEventListener("scroll", () =>{
  let scrollY = window.pageYOffset;
  console.log(scrollY);
  if(scrollY > 1400){
    flowerOne.classList.add('fadeIn');
  }
});

const flowerTwo = document.getElementById('flower_two');
console.log(flowerTwo);
document.addEventListener("scroll", () =>{
  let scrollY = window.pageYOffset;
  console.log(scrollY);
  if(scrollY > 1800){
    flowerTwo.classList.add('fadeIn');
  }
});

const flowerThree = document.getElementById('flower_three');
console.log(flowerThree);
document.addEventListener("scroll", () =>{
  let scrollY = window.pageYOffset;
  console.log(scrollY);
  if(scrollY > 2200){
    flowerThree.classList.add('fadeIn');
  }
});

const flowerFour = document.getElementById('flower_four');
console.log(flowerFour);
document.addEventListener("scroll", () =>{
  let scrollY = window.pageYOffset;
  console.log(scrollY);
  if(scrollY > 2600){
    flowerFour.classList.add('fadeIn');
  }
});

const flowerFive = document.getElementById('flower_five');
console.log(flowerFive);
document.addEventListener("scroll", () =>{
  let scrollY = window.pageYOffset;
  console.log(scrollY);
  if(scrollY > 3200){
    flowerFive.classList.add('fadeIn');
  }
});

const flowerSix = document.getElementById('flower_six');
console.log(flowerSix);
document.addEventListener("scroll", () =>{
  let scrollY = window.pageYOffset;
  console.log(scrollY);
  if(scrollY > 3300){
    flowerSix.classList.add('fadeIn');
  }
});






//gallery
/*=================================================
Accessの背景画像を表示
===================================================*/
$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  let contact_position = $('#contact').offset().top - $(window).height();
  let access_position = $('#access').offset().top - $(window).height();
  console.log(scroll);
  console.log(contact_position);
  console.log(access_position);

  // #accessが表示された場合
  if (scroll > access_position) {
    console.log("test");
    // #contactが表示されるまでの間は、背景画像をfadeInで表示する
    if (scroll < contact_position) {
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
});