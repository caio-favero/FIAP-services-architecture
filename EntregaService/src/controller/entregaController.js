const model = require('../model/entregaModel')
const { alertOrder } = require('../lib/slaChange')

const entregaController = {

  consultarPrazoEntrega(request, response, next) {
    model.find({ uf: request.params.uf })
      .then(res => response.json(res))
      .catch(next)
  },

  alterarPrazoEntrega(request, response, next) {
    model.findOneAndUpdate(
      { uf: request.params.uf },
      { $set: { sla: request.params.prazoEntrega, uf: request.params.uf } },
      { upsert: true }
    )
      .then(res => alertOrder(res))
      .then(res => response.json(res))
      .catch(next)
  },

}

module.exports = entregaController
