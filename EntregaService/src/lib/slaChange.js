const open = require('amqplib').connect(`amqp://rabbitmq:5672`)
const queueName = 'slaUpdate'

const alertOrder = entrega => {
  open
    .then(conn => conn.createChannel())
    .then(ch => {
      console.log(1, ch)
      return ch.assertQueue(queueName)
        .then(ok => {
          console.log(2, ok)
          ch.sendToQueue(queueName, Buffer.from(entrega))
        })
    })
    .catch(console.warn)
}

module.exports = { alertOrder }
