import {
  getNode,
  replaceClass,
  addClass,
  removeClass
} from '../../lib/index.js';

const category = getNode('.nav__item--category');
const categoryBtn = getNode('.nav__item--category button');
const categoryMap = getNode('.nav__item--category ul')

function openCategoryMap() {
  replaceClass(categoryMap, 'category__map', 'category__map--active');
  replaceClass(categoryBtn, 'category__btn', 'category__btn--active');
}
function closeCategoryMap(){
  replaceClass(categoryMap, 'category__map--active', 'category__map');
  replaceClass(categoryBtn, 'category__btn--active', 'category__btn');
}
category.addEventListener('mouseover', openCategoryMap);
category.addEventListener('mouseleave', closeCategoryMap);
category.addEventListener('click', openCategoryMap);

const navigation = getNode('.nav');
let sticky = navigation.offsetTop - 50;
function toggleNavigation() {
  if (window.pageYOffset > sticky) {
    addClass(navigation, 'nav--sticky');
  } else {
    removeClass(navigation, 'nav--sticky');
  }
}
window.onscroll = function () {
  toggleNavigation();
};