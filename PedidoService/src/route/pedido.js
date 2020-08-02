const router = require('express').Router()
const controller = require('../controller/pedidoController')
const { validateCreation, getSla } = require('./middleware')

router.get('/', controller.list)
router.get('/listarPedidoPorUF/:uf', controller.getByUf)
router.get('/listarPedidoPorId/:id', controller.getById)

router.post('/criarPedido', validateCreation, getSla, controller.create)

router.use(require('../controller/errorHandlers'))

module.exports = router
