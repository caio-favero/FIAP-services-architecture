const router = require('express').Router()
const controller = require('../controller/entregaController')

router.get('/consultarPrazoEntrega/:uf', controller.consultarPrazoEntrega)
router.patch('/alterarPrazoEntrega/:uf/:prazoEntrega', controller.alterarPrazoEntrega)

router.use(require('../controller/errorHandlers'))

module.exports = router
