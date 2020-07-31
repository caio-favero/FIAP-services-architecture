const model = require('../model/pedidoModel')

const pedidoController = {

  list(_, response, next) {
    model.find()
      .then(res => response.json(res))
      .catch(next)
  },

  getByUf(request, response, next) {
    model.find({ uf: { $regex: request.params.uf, $options: 'i' } })
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
      .then(created => response.json(created))
      .catch(next)
  },

}

module.exports = pedidoController


let x = {
  "status": "AguardandoPagamento",
  "dataCriacao": "10/10/2019",
  "dataEntrega": "20/10/2019",
  "produto": "CamisetaHeringBranca",
  "endereco": "Av.Paulista,900",
  "uf": "SP",
  "municipio": "SãoPaulo",
  "cep": "04545-800"
}
