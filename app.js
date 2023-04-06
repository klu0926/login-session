const express = require('express')
const handlebars = require('express-handlebars')
const Router = require('./router')


const app = express()
const PORT = process.env.PORT || 3000

// view engine
app.engine('handlebars', handlebars({
  defaultLayout: "main"
}))
app.set('view engine', 'handlebars')

// middleware
app.use(express.urlencoded({ extended: true }))
app.use(Router)

// server start
app.listen(PORT, () => {
  console.log('server is live')
})


