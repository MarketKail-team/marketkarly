import { getNode } from '../../lib/index.js';
let viewItems = [
  { id: 'product1', thumb: '../../assets/product_list/tangtang_jjolmyeon.jpg' },
  { id: 'product3', thumb: '../../assets/product_list/jyoleudi_sun_cushion.jpg' },
  { id: 'product3', thumb: '../../assets/product_list/milkyqueen_brown_rice.jpg' },
  { id: 'product3', thumb: '../../assets/product_list/baby_laundry_detergent.jpg' },
]
localStorage.setItem('viewitems', JSON.stringify(viewItems))
const viewCurrent = getNode('.view-current')

const items = JSON.parse(localStorage.getItem('viewitems'))
console.log(items)

items.forEach(function (value) {
  console.log(`<div class="swiper-slide"><img src="${value.thumb}" alt="" /></div>`)
  let template = `<div class="swiper-slide"><img src="${value.thumb}" alt="" /></div>`;
  viewCurrent.insertAdjacentHTML('beforeend', template)
})

//클릭했을때  어떻게 localstorage에 저장할것인지
//어떻게 그걸 swiper 안에 접목시킬지