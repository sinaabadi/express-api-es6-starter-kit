const {init} = require('adapters/mongo-db')

module.exports = async ({app, debug = console.log}) => {
  try {
    const mongoose = await init({debug})
    app.set('mongoose', mongoose)
    const UserModel = require('models/user')({mongoose})
    return  {
      UserModel
    }
  } catch (e) {
    debug(`Error on connecting to the database -> ${e.stack}`)
    process.exit(1)
  }
}