import { getNode, karlyFetch, saveStorage } from '../../lib/index.js';

const loginBtn = getNode('.login-form__button--login');
const loginForm = getNode('#loginForm');

let loginFormData = new FormData(loginForm);

function loginHandler() {
  karlyFetch.post('http://localhost:3001/sign-in', loginFormData)
    .then(res => res.json())
    .then(res => {
      console.log(res)
    })
}

loginBtn.addEventListener('submit', loginHandler)