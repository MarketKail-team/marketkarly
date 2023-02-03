import { getNode } from './getNode.js';
import { isString } from './../utils/typeOf.js';

export function clearContents(node){
  if(isString(node)) node = getNode(node);
  node.textContent = '';
}