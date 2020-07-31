const app = require('express')()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8002

app.listen(PORT, () => console.log(`Server ativo na porta ${PORT}`))

require('./src/config/mongoose')

app.use(bodyParser.json())
app.use(require('./src/route'))
