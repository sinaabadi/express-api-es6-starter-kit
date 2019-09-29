import {init} from '../adapters/mongo-db'

module.exports = async ({app}: { app: any }) => {
    try {
        const mongoose = await init({})
        app.set('mongoose', mongoose)
        const UserModel = require('models/user')({mongoose})
        return {
            UserModel
        }
    } catch (e) {
        console.error(`Error on connecting to the database -> ${e.stack}`)
        process.exit(1)
    }
}
