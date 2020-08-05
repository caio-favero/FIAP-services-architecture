setTimeout(() => {
  const app = require('express')()
  const bodyParser = require('body-parser')
  const PORT = process.env.PORT || 8001

  app.listen(PORT, () => console.log(`Server ativo na porta ${PORT}`))

  require('./src/config/mongoose')
  require('./src/queue/consumer')

  app.use(bodyParser.json())
  app.use(require('./src/route'))
}, 10000)
