const express = require('express');
const ejs = require('ejs');
const app = express();

app.get('/', (req, res) => {
  res.render('hello.ejs');
});

// サーバーを起動するコードを貼り付けてください
app.listen(3000);
