import { isNumber, isObject } from './typeOf.js';

const defaultOptions = {
  shouldReject: false,
  timeout : 1000,
  data : '성공',
  errorMessage : '알 수 없는 오류가 발생했습니다.'
}

export function delayP(options = {}) {

  let config = { ...defaultOptions }

  if(isNumber(options)){
    config.timeout = options;
  }

  if(isObject(options)){
    config = { ...config, ...options };
  }

  const { shouldReject, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!shouldReject){
        resolve(data);
      }else{
        reject(errorMessage);
      }
    }, timeout);
  })
}