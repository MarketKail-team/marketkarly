import {
  clearContents,
  getNode,
  getNodes,
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

  categorys.forEach((category) => {
    category.checked = false;
  })

  brands.forEach((brand) => {
    brand.checked = false;
  })

  prices.forEach((price) => {
    price.checked = false;
  })

  sales.forEach((sale) => {
    sale.checked = false;
  })

  types.forEach((type) => {
    type.checked = false;
  })

  excepts.forEach((except) => {
    except.checked = false;
  })
}

resetButton.addEventListener('click', resetHandler)

function categoryHandler() {
  const inputCategory = getNodes('input[name="category"]:checked');
  const selectedElementsCnt = inputCategory.length;
  categoryCnt.innerText = selectedElementsCnt;
}

filterCategorys.forEach((filterCatalog) => {
  filterCatalog.addEventListener('click', categoryHandler)
})

function brandHandler() {
  const inputCategory = getNodes('input[name="brand"]:checked');
  const selectedElementsCnt = inputCategory.length;
  brandCnt.innerText = selectedElementsCnt;
}

filterBrands.forEach((filterBrand) => {
  filterBrand.addEventListener('click', brandHandler)
})

function priceHandler() {
  const inputCategory = getNodes('input[name="price"]:checked');
  const selectedElementsCnt = inputCategory.length;
  priceCnt.innerText = selectedElementsCnt;
}

filterPrices.forEach((filterPrice) => {
  filterPrice.addEventListener('click', priceHandler)
})

function saleHandler() {
  const inputCategory = getNodes('input[name="sale"]:checked');
  const selectedElementsCnt = inputCategory.length;
  saleCnt.innerText = selectedElementsCnt;
}

filterSales.forEach((filterSale) => {
  filterSale.addEventListener('click', saleHandler)
})

function typeHandler() {
  const inputCategory = getNodes('input[name="type"]:checked');
  const selectedElementsCnt = inputCategory.length;
  typeCnt.innerText = selectedElementsCnt;
}

filterTypes.forEach((filterType) => {
  filterType.addEventListener('click', typeHandler)
})

function exceptHandler() {
  const inputCategory = getNodes('input[name="except"]:checked');
  const selectedElementsCnt = inputCategory.length;
  exceptCnt.innerText = selectedElementsCnt;
}

filterExcepts.forEach((filterExcept) => {
  filterExcept.addEventListener('click', exceptHandler)
})