const axios = require('axios')

module.exports = {

  entregaService(uf) {
    return axios.get(`http://${process.env.DB_HOST}:8002/consultarPrazoEntrega/${uf}`)
      .then(res => {
        console.log('res => ', res)
        return res
      })
      .catch(err => {
        const error = new Error(err)
        error.code = 400
        console.log('error => ', error)
        return error
      })
  }

}
