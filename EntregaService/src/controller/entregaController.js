const model = require('../model/entregaModel')

const entregaController = {

  consultarPrazoEntrega(request, response, next) {
    model.find({ uf: request.params.uf })
      .then(res => response.json(res))
      .catch(next)
  },

  alterarPrazoEntrega(request, response, next) {
    model.findByIdAndUpdate({ uf: request.params.uf }, { $set: { sla: request.params.prazoEntrega } })
      .then(res => response.json(res))
      .catch(next)
  },

}

module.exports = entregaController
