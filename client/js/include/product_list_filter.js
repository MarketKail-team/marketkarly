import {
  getNode,
  getNodes,
  toggleClass
} from './../../lib/index.js';

const filterCatalogs = getNodes('.product-filter__catalog');
const filterIcons = getNodes('.product-filter__icon-close');
const filterValues = getNodes('.product-filter__value');

for (let i = 0; i < filterCatalogs.length; i++) {
  filterCatalogs[i].addEventListener('click', function () {
    toggleClass(filterIcons[i], 'product-filter__icon-open');
    toggleClass(filterCatalogs[i], 'filter__filter-border');
    toggleClass(filterValues[i], 'filter-closed');
  })
}
