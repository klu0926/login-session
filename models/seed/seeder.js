const userModel = require('../userModel')
const data = require('../users.json')
const db = require('../../config/connectDB')


console.log('creating seed...')

db.once('open', () => {
  userModel.create(data)
    .then(() => {
      console.log('seed created!')
    })
    .catch(error => console.log(error))
})


