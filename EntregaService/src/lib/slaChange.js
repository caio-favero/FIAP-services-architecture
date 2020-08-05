const open = require('amqplib').connect(`amqp://rabbitmq:5672`)
const queueName = 'slaUpdate'

const alertOrder = entrega => {
  open
    .then(conn => conn.createChannel())
    .then(ch => {
      return ch.assertQueue(queueName)
        .then(ok => {
          ch.sendToQueue(queueName, Buffer.from(JSON.stringify(entrega)))
        })
    })
    .catch(console.warn)
}

module.exports = { alertOrder }
