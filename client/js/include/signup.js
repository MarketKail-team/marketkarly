import {
  getNode,
  getNodes,
  karlyFetch
} from '../../lib/index.js';

// 이용약관동의 전체 동의 체크 기능
const termsCheckAll = getNode('#termsAll');
let termsChecks = getNodes('input[name=terms]');

termsCheckAll.addEventListener('change', (e) => {
  for (let i = 0; i < termsChecks.length; i++){
    termsChecks[i].checked = e.target.checked;
  }
})


let userPw = getNode('#userPw');
let userPwCheck = getNode('#userPw2');
let userEmail = getNode('#userEmail');

// 이메일과 비밀번호의 유효성을 확인
// - 이메일 조건 : 최소 `@`, `.` 포함
// - 비밀번호 조건 : 8자 이상 입력
function checkPw() {
  if(userPw.value.length < 8) {
    console.log('입력한 비밀번호가 8글자 이상이어야 합니다.');
  }
}
function checkPwSame() {
  if(userPw.value != userPwCheck.value) {
    console.log('비밀번호가 일치하지 않습니다.');
  } else {
    console.log('비밀번호가 일치합니다');
  }
}
function checkEmail() {
  if (!userEmail.includes('.') && !userEmail.includes('@')) {
    console.log('이메일에는 최소 "@"와 "." 이 포함되어 있어야 합니다.');
  }
}
userPw.addEventListener('change', checkPw);
userPwCheck.addEventListener('change', checkPwSame);
userEmail.addEventListener('change', checkEmail);



// 1 회원가입에서 데이터(유니크아이디)를 저장(post) : data.json
// 2 로그인에서 유저 데이터를 가져와서(get)
// 3 로그인에서 인풋에 입력한 아이디/비밀번호 비교
//   ㄴ 이벤트 위임 이용 (모두가 addEventListener, getnode 사용하는 것을 줄이기 위함)
// 4 인풋 데이터랑 일치하는 객체를 찾고, 유니크아이디를 뽑아 로컬스토리지에 저장
// 5 유니크아이디까지 가져왔을 때


// 데이터 연동 테스트
// karlyFetch.post(
//   'http://localhost:3001/users',
//   { id: 'ryung' },
//   { name: '성령' }
// );

