function isLogin (req, res, next) {
  // 有登入的話
  if (req.session && req.session.isLogin === true) {
    if (req.path !== '/user') {
      res.redirect('/user')
    } else {
      next()
    }
  } else {
    // 沒登入的話
    if (req.path !== '/login') {
      res.redirect('/login')
    } else {
      next()
    }
  }
}

module.exports = isLogin
