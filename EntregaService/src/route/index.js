const router = require('express').Router()

router.get('/test', (_, response) => response.sendStatus(200))
router.use('/', require('./entrega'))

module.exports = router
