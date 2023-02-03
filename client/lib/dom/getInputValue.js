import { refError } from '../error/refError.js';
import { getNode } from './getNode.js';
import { isString } from '../utils/typeOf.js';

export function getInputValue(node){
  if(isString(node)) node = getNode(node);
  if(node.tagName !== 'INPUT') refError('getInputValue 함수는 INPUT ELEMENT만 허용합니다.')

  return node.value
}