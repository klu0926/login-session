const Router = require('express').Router()
const isUser = require('../config/isUser')
const isLogin = require('../config/isLogin')
const sessionConfig = require('../config/session')

Router.use(sessionConfig)

// root GET
Router.get('/', (req, res) => {
  res.redirect('/login')
})

// 登入GET
Router.get('/login', isLogin, (req, res) => {
  if (res.locals.isLogin === true) {
    return res.redirect('/user')
  }
  res.render('login')
})

// 登入POST
// 把 session middleware放入
Router.post('/login', async (req, res) => {
  const { email, password } = req.body

  // 預設login為false
  req.session.isLogin = false

  // 沒有輸入帳密
  if (email.trim() === '' || password.trim() === '') {
    console.log('no input')
    res.locals.message = 'Please enter email and password.'
    return res.redirect('/login')
  }

  // 驗證帳密
  const user = await isUser(email, password)

  // 找到使用者
  if (user) {
    console.log('user found')
    console.log(user)

    // 帳密驗證通過 就配發一個sessionId (轉到一個/session頁面來配置)
    req.session.isLogin = true
    req.session.firstName = user.firstName
    req.session.email = user.email
    req.session.save(() => {
      // 卻保存好後再繼續
      console.log('done saving session')
      return res.redirect('/user')
    })

    // 找不到使用者
  } else {
    console.log("can't find user")
    res.locals.message = "Can't find your user account."
    return res.render('login')
  }
})

Router.get('/user', isLogin, (req, res) => {
  res.locals.firstName = req.session.firstName
  res.locals.email = req.session.email
  console.log(res.locals)
  res.render('user')
})

Router.post('/logout', (req, res) => {
  req.session.destroy()
  res.clearCookie('connect.sid')
  res.redirect('/login')
})

module.exports = Router
