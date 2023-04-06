# 【選修】帳密檢查機制 with session (AC 2-3 A14)


## About - 介紹
帳號密碼驗證機制練習：使用express, mongoDB, mongoose, handlebars
保存使用者登入狀態練習：使用express-session,connect-mongo

## Features - 功能

1. 使用者可以使用email跟password進行登入
2. 使用者登入後再依定時間內會維持登入狀態，進入任一頁面都會直接跑進/user頁面
3. 使用者可以在/user頁面手動登出

## Prerequisites - 環境建置與需求

* Node.js
* dotenv "16.0.3"
* Express "^4.18.3"
* Express-handlebars "^3.1.0"
* Mongoose "7.0"
* express-session: "^1.17"
* connect-mongo: "^5.0"

## Installation and execution - 安裝與執行步驟

1.開啟Terminal, Clone此專案至本機:
```
git clone https://github.com/klu0926/login-session.git
```

2.進入存放此專案的資料夾
```
cd login_session
```

3.安裝 npm 套件
```
npm install
```

4.安裝nodemon (如果已經有可跳過)
```
npm install -g nodemon
```

5.使用種子檔案
```
npm run seed
```

6.啟動伺服器 (這會使用 nodemon 啟動專案)
```
npm run dev 
```

7.當 terminal 出現以下字樣，表示伺服器已啟動並成功連結
```
server live on http://localhost:<PORT>
```

7.打開瀏覽器輸入http://localhost:3000 來使用本專案

