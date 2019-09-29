import express from 'express'

const router = express.Router()

module.exports = ({}) => {
    router.get('/', async function (req: any, res: any, next: any) {
        try {
            res.json({message: 'Hello :) this is API v1'})
        } catch (e) {
            next(e)
        }
    })
    return router
}
