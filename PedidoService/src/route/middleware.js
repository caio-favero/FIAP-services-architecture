const { entregaService } = require('../service')

const validateCreation = (request, response, next) => {
  const { produto, endereco, uf, municipio, cep } = request.body

  if (!produto || !endereco || !uf || !municipio || !cep)
    return response.status(400).json({ message: 'payload malformed' })

  delete request.body._id
  delete request.body.dataCriacao
  delete request.body.dataEntrega

  next()
}

const getSla = (request, response, next) => {
  entregaService(request.body.uf)
    .then(res => {
      request.body.sla = res.sla
      next()
    })
    .catch(() => response.sendStatus(400))
}

const defineDelivery = (request, response, next) => {
  request.body.dataEntrega = moment(new Date(), "DD-MM-YYYY").add(request.body.sla, 'days')

  next()
}

module.exports = { validateCreation, getSla, defineDelivery }
