const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const users = [];

// 사용자 목록 조회
app.get('/users', (req, res) => {
  res.json(users);
});

// 특정 사용자 조회
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

// 새로운 사용자 생성
app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.json(newUser);
});

// 특정 사용자 정보 업데이트
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  const userIndex = users.findIndex(user => user.id === parseInt(userId));
  if (userIndex === -1) return res.status(404).send('User not found');
  users[userIndex] = { ...users[userIndex], ...updatedUser };
  res.json(users[userIndex]);
});

// 특정 사용자 삭제
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  const userIndex = users.findIndex(user => user.id === parseInt(userId));
  if (userIndex === -1) return res.status(404).send('User not found');
  const deletedUser = users.splice(userIndex, 1);
  res.json(deletedUser);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
