import { getNode } from '../../lib/index.js';

const hiddenInfo = getNode('.hidden_info');
const questinMark = getNode('.question__mark');


questinMark.addEventListener('mouseover', () => {
  hiddenInfo.classList.add('is-active');
});
questinMark.addEventListener('mouseleave', () => {
  hiddenInfo.classList.remove('is-active');
});


