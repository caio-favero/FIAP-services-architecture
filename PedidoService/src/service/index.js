module.exports = {
  entregaService(uf) {
    return axios.get(`entrega/consultarPrazoEntrega/${uf}`)
      .then(res => {
        console.log(res)
        return res
      })
      .catch(err)
  }
}
