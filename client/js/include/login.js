import { getNode, karlyFetch, saveStorage } from '../../lib/index.js';

// fetch 통신 작동 여부 확인
/* async function render() {

  let response = await karlyFetch.get('http://localhost:3001/users');

  response.data.forEach((item) => {
    console.log(item.id);
    saveStorage
  })
}

render() */

const loginBtn = getNode('.login-form__button--login');
const loginForm = getNode('#loginForm');

let loginFormData = new FormData(loginForm);

async function signinId() {
  let response = await karlyFetch.get('http://localhost:3001/sign-in');

  return response.data
}

signinId()
  .then( res => 
    res.forEach((item) => {
      saveStorage('userId', item.userId)
    })
  )

function loginHandler() {
  karlyFetch.post('http://localhost:3001/sign-in', loginFormData)
}

loginBtn.addEventListener('submit', loginHandler)