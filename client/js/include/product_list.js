import { getNode, addClass, removeClass } from '../../lib/index.js';

const hiddenInfo = getNode('.hidden_info');
const questinMark = getNode('.question__mark');


//유틸함수 왜 안되는지..?

questinMark.addEventListener('mouseover', () => {
  hiddenInfo.classList.add('is-active');
});
questinMark.addEventListener('mouseleave', () => {
  hiddenInfo.classList.remove('is-active');
});


