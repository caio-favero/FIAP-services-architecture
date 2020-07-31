const { request, response } = require("express");

const validateCreation = (request, response, next) => {
  const { produto, endereco, uf, municipio, cep } = request.body

  if (!produto || !endereco || !uf || !municipio || !cep)
    return response.status(400).json({ message: 'payload malformed' })

  next()
}

module.exports = { validateCreation }
