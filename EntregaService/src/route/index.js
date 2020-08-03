const router = require('express').Router()

router.get('/', (_, response) => response.sendStatus(200))
router.use('/entregas', require('./entrega'))

module.exports = router
