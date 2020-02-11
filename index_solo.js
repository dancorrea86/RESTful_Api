const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/', (req, res) => {
  const value = req.body.username;
  console.log(value)
  res.send('Obrigado por participar');
});

app.listen(3000, 10, () => { console.log('ola') });