/*const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
users = 
[
  { id: 1, name: 'Moj Ladani' },
  { id: 2, name: 'Jane Smith' }
];


app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});
*/