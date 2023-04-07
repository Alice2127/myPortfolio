// 使用するフレームワーク等の指定
const express = require('express');
const ejs = require('ejs');
const app = express();

// 静的ファイル（画像、動画、CSSファイルなど）を提供するためのミドルウェアの作成
app.use(express.static('public'));

// ルーティングの定義
app.get('/', (req, res) => {
  res.render('hello.ejs');
});

// サーバーの起動
app.listen(3000);
