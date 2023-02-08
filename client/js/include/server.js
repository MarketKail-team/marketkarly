import {
  getNode,
  karlyFetch,
  randomText
} from '../../lib/index.js';

// fetch 통신 작동 여부 확인
async function render() {

  let response = await karlyFetch.get('http://localhost:3001/sign-up');

  response.data.forEach((item) => {
    let idNum = item.id
    console.log(idNum);

    return idNum
  })

  // let idNum = response.data[1].id

  // return idNum
}
console.log(render());

// console.log(render());

// let currentId =  render().then(res => console.log(res))

// json-server로 input값 보내기
const signupBtn = getNode('.signup-form__button--submit');
const signupForm = getNode('#signupForm');

let signFormData = new FormData(signupForm);

function registerHandler() {
  let res = karlyFetch.post('http://localhost:3001/sign-up', signFormData);

  console.log(res.data);
}

let cnt = 1;
function adduniqueId() {
  let uri = `http://localhost:3001/sign-up/${cnt}`
  karlyFetch.patch(uri, { 'uniqueId' : randomText() })
  cnt += 1;
}

/* function registerHandler(e) {
  e.preventDefault();
  fetch('http://localhost:3001/sign-up',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
   	body : JSON.stringify({
      userId : this.state.userId,
      userPw: this.state.userPw,
      userPw2: this.state.userPw2,
      userName: this.state.userName,
      userEmail: this.state.userEmail,
      userPhone: this.state.userPhone,
      isMan: this.state.userGender,
      isWoman: this.state.userGender,
      isNone: this.state.userGender,
      userBirthYear: this.state.userBirthYear,
      userBirthMonth: this.state.userBirthMonth,
      userBirthDay: this.state.userBirthDay,
      userPrecommanderIdhone: this.state.extra,
      eventName: this.state.extra,
      termsAll: this.state.termsAll,
      terms1: this.state.terms,
      terms2: this.state.terms,
      terms3: this.state.terms,
      terms4: this.state.terms,
    })
      .then(res => res.json())
      .then(console.log(res))
    
  })
}
 */

karlyFetch.patch('http://localhost:3001/sign-up/1', { 'uniqueId' : randomText() })

signupBtn.addEventListener('submit', registerHandler)

// 랜덤 문자열 만들기
// console.log(randomText());

/* let respone = karlyFetch.get('http://localhost:3001/sign-up')
console.log(respone.data.id); */
