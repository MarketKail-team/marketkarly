import {
  getNode,
  karlyFetch,
  saveStorage,
} from '../../lib/index.js';

async function request() {
  const response = await fetch('http://localhost:3001/sign-up',
    {
      method: 'GET',
    });
  const data = await response.json();
  saveStorage('uniqueId', data.slice(-1)[0].id);
}


// json-server로 input값 보내기
const signupBtn = getNode('.signup-form__button--submit');
const signupForm = getNode('#signupForm');

let signFormData = new FormData(signupForm);

function registerHandler() {
  karlyFetch.post('http://localhost:3001/sign-up', signFormData)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
}

request()

signupBtn.addEventListener('submit', registerHandler)