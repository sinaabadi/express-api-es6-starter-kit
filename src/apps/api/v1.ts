import express from "express";
import globalMiddleware from '../../middlewares/global'
// import initMongoDb from '../../middlewares/init-mongo-db.ts'
export default async ({}) => {
    const app = express()
    globalMiddleware({app})
    // const {UserModel} = await initMongoDb({app})
    const indexRouter = require('routes/api/v1/index')({})
    app.use('/', indexRouter)

// catch 404 and forward to error handler
    app.use(function (req, res, next) {
        return res.status(404).json({message: 'Route note found'})
    })

// error handler
    app.use(function (err: any, req: any, res: any, next: any) {
        let resMessage
        const {
            status = 500,
            message = 'Please try again later',
            stack = ''
        } = err

        if (process.env.APP_ENV === 'production') {
            resMessage = 'Please try again later'
        } else {
            resMessage = message
        }
        console.log(stack)
        return res.status(status).json({message: resMessage})
    })

    return app
}
