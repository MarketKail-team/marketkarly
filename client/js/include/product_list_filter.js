import {
  checkSelected,
  clearContents,
  getNode,
  getNodes,
  resetSelected,
  toggleClass
} from './../../lib/index.js';

const filterCatalogs = getNodes('.product-filter__catalog');
const filterIcons = getNodes('.product-filter__icon-close');
const filterValues = getNodes('.product-filter__value');
const filterCategorys = getNodes('.product-filter__category>label')
const filterBrands = getNodes('.product-filter__brand>label')
const filterPrices = getNodes('.product-filter__price>label')
const filterSales = getNodes('.product-filter__sale>label')
const filterTypes = getNodes('.product-filter__type>label')
const filterExcepts = getNodes('.product-filter__except>label')
const keyCnts = getNodes('.product-filter__key-cnt')
const categoryCnt = getNode('.product-category-cnt');
const brandCnt = getNode('.product-brand-cnt');
const priceCnt = getNode('.product-price-cnt');
const saleCnt = getNode('.product-sale-cnt');
const typeCnt = getNode('.product-type-cnt');
const exceptCnt = getNode('.product-except-cnt');

const resetButton = getNode('.product-filter__button--reset');

for (let i = 0; i < filterCatalogs.length; i++) {
  filterCatalogs[i].addEventListener('click', function () {
    toggleClass(filterIcons[i], 'product-filter__icon-open');
    toggleClass(filterCatalogs[i], 'filter__filter-border');
    toggleClass(filterValues[i], 'filter-closed');
  })
}

function resetHandler() { 
  const categorys = document.getElementsByName('category');
  const brands = document.getElementsByName('brand');
  const prices = document.getElementsByName('price');
  const sales = document.getElementsByName('sale');
  const types = document.getElementsByName('type');
  const excepts = document.getElementsByName('except');

  keyCnts.forEach((keyCnt) => {
    clearContents(keyCnt);
  })

  resetSelected(categorys);
  resetSelected(brands);
  resetSelected(prices);
  resetSelected(sales);
  resetSelected(types);
  resetSelected(excepts);
}

resetButton.addEventListener('click', resetHandler)

checkSelected(filterCategorys, categoryCnt, 'category');
checkSelected(filterBrands, brandCnt, 'brand');
checkSelected(filterPrices, priceCnt, 'price');
checkSelected(filterSales, saleCnt, 'sale');
checkSelected(filterTypes, typeCnt, 'type');
checkSelected(filterExcepts, exceptCnt, 'except');