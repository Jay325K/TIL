// 필요한 모듈을 가져옵니다.
const express = require('express');
const app = express();

// 로그인 상태를 저장할 변수
let isLoggedIn = false;

// 로그인 API
app.post('/login', (req, res) => {
  // 로그인 로직을 수행합니다.
  // 예시로는 간단히 isLoggedIn 변수를 true로 설정합니다.
  isLoggedIn = true;
  res.send('로그인 성공');
});

// 로그아웃 API
app.post('/logout', (req, res) => {
  // 로그아웃 로직을 수행합니다.
  // 예시로는 간단히 isLoggedIn 변수를 false로 설정합니다.
  isLoggedIn = false;
  res.send('로그아웃 성공');
});

// 로그인 상태 확인 API
app.get('/isloggedin', (req, res) => {
  // isLoggedIn 값을 클라이언트로 전송합니다.
  res.json({ isLoggedIn });
});

// 서버를 시작합니다.
app.listen(5000, () => {
  console.log('서버가 5000번 포트에서 실행 중입니다.');
});
