const mongoose, { Schema } = require('mongoose')

const PedidoSchema = new Schema({
  status: String,
  dataCriacao: String,
  dataEntrega: String,
  produto: String,
  endereco: String,
  uf: String,
  municipio: String,
  cep: String
}, { versionKey: false })

module.exports = mongoose.model('Pedidos', PedidoSchema)
