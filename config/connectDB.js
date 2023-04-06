const mongoose = require('mongoose')

// use dotenv
if (process.env.NODE_ENV !== 'production') {
  console.log('use dotenv')
  require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection

console.log('connecting to mongoDB...')
db.on('error', error => { console.log(error) })
db.once('open', () => console.log('connected to mongoDB!'))

module.exports = db
