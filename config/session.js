const session = require('express-session')
const MongoStore = require('connect-mongo')

if (process.env.NODE_ENV !== "production") {
  require('dotenv').config()
}

const sessionConfig = session({
  secret: "this is my secret",
  store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
  cookie: { maxAge: 300000 },// 5分鐘
  resave: false,
  saveUninitialized: true,
})

module.exports = sessionConfig