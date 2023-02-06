import {
  getNode,
  getNodes
} from '../../lib/index.js';

// 이용약관동의 전체 동의
const termsCheckAll = getNode('#termsAll');
let termsChecks = getNodes('input[name=terms]');

termsCheckAll.addEventListener('change', (e) => {
  for (let i = 0; i < termsChecks.length; i++){
    termsChecks[i].checked = e.target.checked;
  }
})