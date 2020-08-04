const axios = require('axios')

module.exports = {

  entregaService(uf) {
    axios.get(`http://${process.env.ENTREGA_HOST}:8000/entregas/consultarPrazoEntrega/${uf}`)
      .then(res => res.data)
      .catch(err => {
        const error = new Error(err)
        error.code = 400

        return error
      })
  }

}
