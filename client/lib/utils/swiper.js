export function swiper() {
  const swiper1 = new Swiper('.product-review__swiper', {
    navigation: {
      nextEl: '.product-review__button-next',
      prevEl: '.product-review__button-prev',
    },
    observer: true,
    observeParents: true,
    loopFillGroupWithBlank: true,
    a11y: {
      prevSlideMessage: '이전 슬라이드',
      nextSlideMessage: '다음 슬라이드',
    }
  });
  
  const swiper2 = new Swiper('.product-inquiry__swiper', {
    navigation: {
      nextEl: '.product-inquiry__button-next',
      prevEl: '.product-inquiry__button-prev',
    },
    observer: true,
    observeParents: true,
    loopFillGroupWithBlank: true,
    a11y: {
      prevSlideMessage: '이전 슬라이드',
      nextSlideMessage: '다음 슬라이드',
    }
  });  
}