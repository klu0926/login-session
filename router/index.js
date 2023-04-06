const Router = require('express').Router()


Router.get('/', (req, res) => {
  res.redirect('/login')
})


Router.get('/login', (req, res) => {
  res.render('login')
})


Router.post('/login', (req, res) => {
  const { email, password } = req.body
  console.log("email: ", email, " ", "password: ", password)

  res.render('login')
})


module.exports = Router