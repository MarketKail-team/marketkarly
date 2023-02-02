const mainSwiper = new Swiper('.swiper-recommend', {
    slidesPerView: 4,
    spaceBetween: 18,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true
    // },
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.swiper-recommend-button-next',
      prevEl: '.swiper-recommend-button-prev'
    }
  });
  mainSwiper = new Swiper('.swiper-best-price', {
    slidesPerView: 4,
    spaceBetween: 18,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true
    // },
    navigation: {
      nextEl: '.swiper-best-price-button-next',
      prevEl: '.swiper-best-price-button-prev'
    },
    observer: true,
    observeParents: true,
  });

  // 최근본상품 버튼 동작 안됨 - 수정필요
  const swiperAside = new Swiper(".swiper-aside", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".aside-swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".aside-swiper-button-next",
      prevEl: ".aside-swiper-button-prev",
    }, observer: true,
    observeParents: true,
  });