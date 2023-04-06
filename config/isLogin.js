function isLogin(req, res, next) {

  console.log(req.session)

  if (req.session && req.session.isLogin === true) {
    //有登入的話就繼續
    res.redirect('/user')
  } else {
    //沒登入的話就跳回login
    next()
  }
}

module.exports = isLogin
