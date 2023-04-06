const userModel = require('../userModel')
const data = require('../users.json')
const db = require('../../config/connectDB')


console.log('deleting all data...')

db.once('open', () => {
  userModel.deleteMany({})
    .then(() => {
      console.log('all data deleted!')
    })
    .catch(error => {
      console.log(error)
    })
})
