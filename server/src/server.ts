import express from 'express';

const app = express();

app.get('/users', (_, res) => {
  const users = [
    {name: 'JM', age: 27},
    {name: 'Messi', age: 30},
  ];

  return res.json(users);
});

app.listen(3333);