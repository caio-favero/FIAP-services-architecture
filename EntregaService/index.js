const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
require('./config/mongoose')

app.listen(process.env.PORT, () => console.log(`Server ativo na porta ${process.env.PORT}`))
