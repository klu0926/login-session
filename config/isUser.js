const { model } = require('mongoose')
const userModel = require('../models/userModel')


function isUser(email, password) {

  return userModel.findOne({ email, password })
    .lean()
    .then(user => {
      return user
    })
    .catch(error => {
      console.log(error)
      return false
    })
}

module.exports = isUser


