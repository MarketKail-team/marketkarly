const mainSwiper = new Swiper('.swiper-recommend', {
  slidesPerView: 4,
  spaceBetween: 18,
  slidesPerGroup: 4,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-recommend-button-next',
    prevEl: '.swiper-recommend-button-prev'
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  lazy: {
    loadPrevNext: true
  },

  a11y: {
    containerRoleDescriptionMessage: '추천 상품',
    nextSlideMessage: '다음 슬라이드 버튼 입니다',
    prevSlideMessage: '이전 슬라이드 버튼 입니다',
  }
});

const mainSwiper2 = new Swiper('.swiper-best-price', {
  slidesPerView: 4,
  spaceBetween: 18,
  slidesPerGroup: 4,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-best-price-button-next',
    prevEl: '.swiper-best-price-button-prev'
  },
  lazy: {
    loadPrevNext: true
  },
  keyboard: {
    enabled: true,
  },
  a11y: {
    containerRoleDescriptionMessage: '가격 할인 상품',
    nextSlideMessage: '다음 슬라이드 버튼 입니다',
    prevSlideMessage: '이전 슬라이드 버튼 입니다',
  }

});
