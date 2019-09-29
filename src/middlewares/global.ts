import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

export default ({app}: { app: any }) => {
    app.use(logger('dev'))
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use(cookieParser())
}
