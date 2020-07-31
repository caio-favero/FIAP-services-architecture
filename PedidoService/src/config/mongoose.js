const mongoose = require('mongoose')
const DB_HOST = process.env.DB_HOST || 'localhost',
  DB_PORT = process.env.DB_PORT || 27017,
  DB_NAME = process.env.DB_NAME || 'pedido'

const mongooseConfig = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}

const connectionStr = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

mongoose.connect(connectionStr, mongooseConfig)
mongoose.connection.on('error', err => {
  console.log('Connection lost', err)
  mongoose.connect(connectionStr, mongooseConfig)
})
mongoose.connection.once('open', () => console.log('Connected to mongodb'))
mongoose.connection.on('disconnected', () => mongoose.connect(connectionStr, mongooseConfig))
