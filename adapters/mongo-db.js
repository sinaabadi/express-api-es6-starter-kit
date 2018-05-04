const mongoose = require('mongoose')
const {url: mongoUrl} = require('config/components/mongo-db')

const init = ({debug = console.log} = {}) => {
  return new Promise((resolve, reject) => {
    mongoose.connect(mongoUrl)
    const db = mongoose.connection
    db.once('open', () => {
      debug('Connected to mongo db')
      return resolve(mongoose)
    })
    db.on('error', (err) => {
      reject(err)
    })
  })

}
module.exports = {
  init
}