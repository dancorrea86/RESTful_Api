const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/', (req, res) => {
  const value = req.body.name;
  console.log(value)
});

app.listen(3000, 10, () => { console.log('ola') });