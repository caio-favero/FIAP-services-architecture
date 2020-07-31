const router = require('express').Router()

router.use('/entregas', require('./entrega'))

module.exports = router
