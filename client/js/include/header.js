import { addClass, removeClass, getNode, css } from '../../lib/dom/index.js';

//  고객센터 숨김 메뉴 등장 & 제거
const helpCenter = getNode('.help-center')

function openHeaderSubmenu() {
  addClass('.header__submenu', 'is-active')
}
function closeHeaderSubmenu() {
  removeClass('.header__submenu', 'is-active')
}

helpCenter.addEventListener('mouseover', openHeaderSubmenu)
helpCenter.addEventListener('mouseleave', closeHeaderSubmenu)
helpCenter.addEventListener('click', openHeaderSubmenu)
helpCenter.addEventListener('blur', closeHeaderSubmenu)

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
shippingForm.addEventListener('click', openShppingForm)
// shippingForm.addEventListener('blur', closeShppingForm)

// 검색창 clear 버튼 
const clearButton = getNode('.search-form__clear-button');
const searchForm = getNode('.search-form__input');

function showClearButton() {
  if (searchForm.value) {
    clearButton.style.visibility = 'visible'
  } else {
    clearButton.style.visibility = 'hidden'
  }
}
function hiddenClearButton() {
  clearButton.style.visibility = 'hidden'
}

searchForm.addEventListener('input', showClearButton)
clearButton.addEventListener('click', hiddenClearButton)