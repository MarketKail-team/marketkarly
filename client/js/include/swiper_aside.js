let viewItems = [
  { id: 'product1', thumb: '../assets/product_list/tangtang_jjolmyeon.webp' },
  { id: 'product3', thumb: '../assets/product_list/jyoleudi_sun_cushion.webp' },
  { id: 'product3', thumb: '../assets/product_list/milkyqueen_brown_rice.webp' },
  { id: 'product3', thumb: '../assets/product_list/baby_laundry_detergent.webp' },
]
localStorage.setItem('viewitems', JSON.stringify(viewItems))
const items = JSON.parse(localStorage.getItem('viewitems'))


const asideSwiper = new Swiper('.aside-swiper', {
  direction: 'vertical',
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.aside-swiper-button-next',
    prevEl: '.aside-swiper-button-prev',
  },
  lazy: {
    loadPrevNext: true
  },
  keyboard: {
    enabled: true,
  },
  a11y: {
    containerRoleDescriptionMessage: '최근 본 상품',
    nextSlideMessage: '다음 슬라이드 버튼 입니다',
    prevSlideMessage: '이전 슬라이드 버튼 입니다',
  }
});

items.forEach(function (value) {
  let template = `<div class="swiper-slide"><a href="#"><img src="${value.thumb}" alt="" /></a></div>`;
  asideSwiper.appendSlide(template)
})



