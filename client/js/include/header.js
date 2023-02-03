import { addClass, removeClass, getNode, css } from '../../lib/dom/index.js';

//  고객센터 숨김 메뉴 등장 & 제거
const helpCenter = getNode('.help-center')

helpCenter.addEventListener('mouseover', () => addClass('.header__submenu', 'is-active'))
helpCenter.addEventListener('mouseleave', () => removeClass('.header__submenu', 'is-active'))


//  배송지 숨김 정보 등장 & 제거
const shippingForm = getNode('.list__shipping-form')

function openShppingForm() {
  addClass('.shipping-form--hidden', 'is-active')
  css('.triangle', 'display', 'block')

}
function closeShppingForm() {
  removeClass('.shipping-form--hidden', 'is-active')
  css('.triangle', 'display', 'none')
}

shippingForm.addEventListener('mouseover', openShppingForm)
shippingForm.addEventListener('mouseleave', closeShppingForm)

// 검색창 clear 버튼 -  Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')

const clearButton = getNode('.search-form__clear-button');
const searchForm = getNode('search-form__input');

function clearButtonShow() {
  clearButton.removeAttribute('style')
}

document.addEventListener('DOMContentLoaded', function () {
  searchForm.addEventListener('keyup', clearButtonShow)
});
