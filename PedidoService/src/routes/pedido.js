const router = require('express').Router()
const controller = require('../controller/pedidoController')
const { validateCreation } = require('./middleware')

router.get('/listarPedidoPorUF/:uf', controller.getByUf)
router.get('/listarPedidoPorId/:id', controller.getById)
router.post('/criarPedido', validateCreation, controller.create)
router.use(require('../controller/errorHandlers'))
