import mongoose from "mongoose";

const {url: mongoUrl} = require('config/components/mongo-db')

export const init = ({}) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(mongoUrl)
        const db = mongoose.connection
        db.once('open', () => {
            console.log('Connected to mongo db')
            return resolve(mongoose)
        })
        db.on('error', (err) => {
            reject(err)
        })
    })
}
