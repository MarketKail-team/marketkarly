import { getNode } from './getNode.js';
import { isString } from './../utils/typeOf.js';
import { typeError, syntaxError } from './../error/index.js';

function getAttr(node, prop) {
  if (isString(node)) node = getNode(node);

  return node.getAttribute(prop);
}

function setAttr(node, prop, value){
  if (isString(node)) node = getNode(node);
  if (!isString(prop)) typeError('setAttr 함수의 두 번째 인자는 문자 타입이어야 합니다.');
  if(prop.includes('data')){
    let rest = prop.slice(5);
    node.dataset[rest] = value;
  }
  if(!value) syntaxError('setAttr 함수의 세 번째 인자는 필수입니다.');

  node.setAttribute(prop, value);
}

// value가 없으면 getAttr / value가 있으면 setAttr
export function attr(node, prop, value){
  return !value ? getAttr(node, prop) : setAttr(node, prop, value);
}