import { getNode } from '../../lib/index.js';

const hiddenInfo = getNode('.hidden_info');
const questinMark = getNode('.question__mark');

function showHiddenInfo() {
  hiddenInfo.classList.add('is-active');
}
function hideHiddenInfo() {
  hiddenInfo.classList.remove('is-active');
}


questinMark.addEventListener('mouseover', showHiddenInfo);
questinMark.addEventListener('mouseleave', hideHiddenInfo);
questinMark.addEventListener('click', showHiddenInfo);


