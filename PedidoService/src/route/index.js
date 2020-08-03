const router = require('express').Router()

router.get('/', (_, response) => response.sendStatus(200))
router.use('/pedidos', require('./pedido'))

module.exports = router
