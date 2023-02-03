import { getNode } from './getNode.js'
import { addClass, removeClass } from './css.js'
import { isString } from '../utils/typeOf.js';


export function showAlert(node,text = '에러입니다.',timeout = 1500){

  if(isString(node)) node = getNode(node);
  node.textContent = text;

  addClass(node,'is-active');
  setTimeout(()=>{
    removeClass(node,'is-active');
  },timeout)
}