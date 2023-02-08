import { getNode } from '../../lib/index.js';
let viewItems = [
  { id: 'product1', thumb: '../../assets/product_list/tangtang_jjolmyeon.webp' },
  { id: 'product3', thumb: '../../assets/product_list/jyoleudi_sun_cushion.webp' },
  { id: 'product3', thumb: '../../assets/product_list/milkyqueen_brown_rice.webp' },
  { id: 'product3', thumb: '../../assets/product_list/baby_laundry_detergent.webp' },
]
localStorage.setItem('viewitems', JSON.stringify(viewItems))
const viewCurrent = getNode('.view-current')
const productHref = getNode('.swiper-image')
const items = JSON.parse(localStorage.getItem('viewitems'))
// console.log(items)

const asideSwiper = new Swiper('.aside-swiper', {
  direction: 'vertical',
  slidesPerView: 3,
  spaceBetween: 10,
  slidesPerGroup: 3,
  grid: {
    column: 2,
  },
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
  console.log(`<div class="swiper-slide"><img src="${value.thumb}" alt="" /></div>`)
  let template = `<div class="swiper-slide"><img src="${value.thumb}" alt="" /></div>`;
  asideSwiper.appendSlide(template)
})

//클릭했을때  어떻게 localstorage에 저장할것인지
//어떻게 그걸 swiper 안에 접목시킬지

// productHref.addEventListener('click', function (e) {
//   e.preventDefault();
//   asideSwiper.appendSlide(
//     `<div class="swiper-slide"> <img src="${items[0].thumb}" alt="" /> </div>`



