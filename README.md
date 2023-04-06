# 【選修】帳密檢查機制 with session (AC 2-3 A14)


## Screenshot - 畫面截圖
![screenshot](public/images/screenshot.png)


## About - 介紹
帳號密碼驗證機制練習，使用express. mongoDB, mongoose, handlebars


## Features - 功能

1. 使用者可以使用email跟password進行登入

## Prerequisites - 環境建置與需求

* Node.js
* dotenv "16.0.3"
* Express "^4.18.3"
* Express-handlebars "^3.1.0"
* Mongoose "7.0"

## Installation and execution - 安裝與執行步驟

1.開啟Terminal, Clone此專案至本機:
```
git clone https://github.com/klu0926/login-wip.git
```

2.進入存放此專案的資料夾
```
cd login
```

3.安裝 npm 套件
```
npm install
```

4.安裝nodemon (如果已經有可跳過)
```
npm install -g nodemon
```

5.啟動伺服器 (這會使用 nodemon 啟動專案)
```
npm run dev 
```

6.當 terminal 出現以下字樣，表示伺服器已啟動並成功連結
```
server live on http://localhost:<PORT>
```

7.打開瀏覽器輸入http://localhost:3000 來使用本專案


## NPM Scripts - 腳本
* 建立 seed
```
npm run seed
```

