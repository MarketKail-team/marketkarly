import { attr } from '../../lib/dom/attr.js';
import { bindEvent } from '../../lib/dom/bindEvent.js';
import { getNode } from '../../lib/dom/getNode.js';

const swiper = new Swiper('.main-banner-swiper', {
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: '.main-banner__pagination',
    type: 'fraction',
    clickable: true,
  },
  navigation: {
    nextEl: '.main-banner__button-next',
    prevEl: '.main-banner__button-prev',
  },
  a11y: {
    prevSlideMessage: '이전 슬라이드',
    nextSlideMessage: '다음 슬라이드',
    slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
  },
});

// .main-banner__button-next, main-banner__button-prev 작업중
// bindEvent('.main-banner img', 'mouseenter', attr('.main-banner__button-next', 'class', 'a11yHidden'));
// bindEvent('.main-banner img', 'mouseenter', attr('main-banner__button-prev', 'class', 'a11yHidden'));
