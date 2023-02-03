import { getNode } from './getNode.js';
import { typeError } from '../error/index.js';
import { isString } from '../utils/typeOf.js';

export function insertBefore(node, text) {
  if(isString(node)) node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE) typeError('insertBefore 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');

  node.inserAdjacentHTML('beforebegin', text)
}

export function insertFirst(node, text) {
  if(isString(node)) node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE) typeError('insertFirst 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');

  node.inserAdjacentHTML('afterbegin', text)
}

export function insertLast(node, text) {
  if(isString(node)) node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE) typeError('insertLast 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');

  node.inserAdjacentHTML('beforeend', text)
}

export function insertAfter(node, text) {
  if(isString(node)) node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE) typeError('insertLast 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');

  node.inserAdjacentHTML('afterend', text)
}