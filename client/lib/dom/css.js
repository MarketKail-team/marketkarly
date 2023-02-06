import { getNode } from './getNode.js';
import { typeError, syntaxError } from '../error/index.js';
import { isString } from '../utils/typeOf.js';


export function addClass(node, className) {
  if(isString(node)) node = getNode(node);
  if(!isString(className)) typeError('addClass 함수의 두 번째 인자는 문자 타입이어야 합니다.');

  node.classList.add(className);
}

export function removeClass(node, className) {
  if(isString(node)) node = getNode(node);
  if(!className){
    node.className = '';

    return;
  }
  if(!isString(className)) typeError('addClass 함수의 두 번째 인자는 문자 타입이어야 합니다.');

  node.classList.remove(className);
}

export function toggleClass(node, className) {
  if(isString(node)) node = getNode(node);
  if(!isString(className)) typeError('addClass 함수의 두 번째 인자는 문자 타입이어야 합니다.');

  node.classList.toggle(className);
}

export function replaceClass(node, prevClassName, nextClassName) {
  if(isString(node)) node = getNode(node);
  if(!isString(prevClassName)) typeError('replaceClass 함수의 두 번째 인자는 문자 타입이어야 합니다.');
  if(!isString(nextClassName)) typeError('replaceClass 함수의 세 번째 인자는 문자 타입이어야 합니다.');

  node.classList.replace(prevClassName, nextClassName);
}

function getCss(node, prop) {
  if(isString(node)) node = getNode(node);
  if(!(prop in document.body.style)) syntaxError ('getCSS 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');

  return getComputedStyle(node)[prop]
}

function setCss(node, prop, value) {
  if(isString(node)) node = getNode(node);
  if(!(prop in document.body.style)) syntaxError ('getCSS 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');
  if(!value) syntaxError('setCSS 함수의 세 번째 인자는 필수값 입니다.');

  node.style[prop] = value;
}

export const css = (node, prop, value) => {
  return !value ? getCss(node, prop) : setCss(node, prop, value);
}