const mongoose = require('mongoose')
const { Schema } = mongoose

const PedidoSchema = new Schema({
  status: String,
  dataCriacao: {
    type: Date,
    default: Date.now
  },
  dataEntrega: String,
  produto: String,
  endereco: String,
  uf: String,
  municipio: String,
  cep: String,
  sla: String,
}, { versionKey: false })

module.exports = mongoose.model('Pedidos', PedidoSchema)
