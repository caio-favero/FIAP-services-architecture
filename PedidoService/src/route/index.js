const router = require('express').Router()

router.use('/pedidos', require('./pedido'))

module.exports = router
