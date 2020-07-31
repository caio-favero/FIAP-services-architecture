const validateCreation = (request, response, next) => {
  const { produto, endereco, uf, municipio, cep } = request.body

  if (!produto || !endereco || !uf || !municipio || !cep)
    return response.status(400).json({ message: 'payload malformed' })

  delete request.body._id
  delete request.body.dataCriacao
  delete request.body.dataEntrega

  next()
}

module.exports = { validateCreation }
