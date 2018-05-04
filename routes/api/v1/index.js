const express = require('express')
const router = express.Router()

module.exports = ({UserModel}) => {
  router.get('/', async function (req, res, next) {
    try {
      res.json({message: 'Hello :) this is API v1'})
    }catch (e){
      next(e)
    }
  })

  return router
}
