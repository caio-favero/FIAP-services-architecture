const model = require('../model/pedidoModel')

const pedidoController = {

  getByUf(request, response, next) {
    model.find({ uf: request.params.uf })
      .then(res => response.json(res))
      .catch(next)
  },

  getById(request, response, next) {
    model.findById({ uf: request.params.id })
      .then(res => response.json(res))
      .catch(next)
  },

  create(request, response, next) {
    model.create(request.body)
      .then(created = response.json(created))
      .catch(next)
  },

}
module.exports = pedidoController
