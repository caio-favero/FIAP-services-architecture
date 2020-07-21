const app = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(bodyParser.json())

const mongooseConfig = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}

mongoose
  .connect(`mongodb://${process.env.DB_PORT}/${process.env.DB_NAME}`, mongooseConfig)
  .then(() => console.log('MongoDB Conectado'))
  .catch(error => console.log(0, error))

app.listen(process.env.PORT, () => console.log(`Server ativo na porta ${process.env.PORT}`))
