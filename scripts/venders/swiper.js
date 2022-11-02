document.addEventListener('DOMContentLoaded',function(){

new MySwiper();
new MySwiper2();

})

class MySwiper{

    constructor(){

    this.swiper = new Swiper('.swiper-1', {
        loop: true,
        effect:'fade',
        speed:2000,
        autoplay:{
          delay:3500,
          disableOnInteraction:false
        }
      });
    }
}

class MySwiper2{

  constructor(){
    this.swiper2 = new Swiper('.swiper-2', {

      autoplay:{
        deylay:2000,
        disableOnInteraction:false
      },
      
      loop:true,
      slidesPerView: 4,
      speed:1000,
        centeredSlides: true,
        spaceBetween: 17,
        pagination: {
          el: ".swiper-pagination-2",
          clickable: true,
        },
    });
  }

}