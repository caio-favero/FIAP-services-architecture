const mongoose = require('mongoose')

const mongooseConfig = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}

const
  user = 'user',
  password = 'password',
  uri = 'uri.com.br',
  name = 'name',
  replicaSet = 'replicacete'


const connectionStr = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`

console.log(1, connectionStr)
console.log(1, `mongodb://${user ? user + ':' + password + '@' : ''}${uri}/${name}${replicaSet ? '?replicaSet=' + replicaSet : ''}`)

mongoose.connect(connectionStr, mongooseConfig)
mongoose.connection.on('error', err => {
  console.log('Connection lost', err)
  mongoose.connect(connectionStr, mongooseConfig)
})
mongoose.connection.once('open', () => console.log('Connected to mongodb'))
mongoose.connection.on('disconnected', () => mongoose.connect(connectionStr, mongooseConfig))
