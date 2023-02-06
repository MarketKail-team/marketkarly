import { getNodes } from './getNode.js';

export function checkSelected(nodes, cnt, filterName) {
  function filterHandler() {
    const inputElementName = getNodes(`input[name="${filterName}"]:checked`);
    const selectedElementsCnt = inputElementName.length;
    cnt.innerText = selectedElementsCnt;
  }

  nodes.forEach((filterItems) => {
    filterItems.addEventListener('click', filterHandler)
  })
}