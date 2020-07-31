const mongoose = require('mongoose')
const { Schema } = mongoose

const EntregaSchema = new Schema({
  uf: String,
  sla: Number
}, { versionKey: false })

module.exports = mongoose.model('Entregas', EntregaSchema)
