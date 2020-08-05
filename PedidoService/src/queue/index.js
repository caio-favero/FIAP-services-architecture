const queueName = 'slaUpdate'
const open = require('amqplib').connect('amqp://localhost')
const model = require('../model/pedidoModel')

open
  .then(conn => conn.createChannel())
  .then(ch => {
    return ch.assertQueue(queueName).then(ok => {
      return ch.consume(queueName, msg => {
        if (msg !== null) {
          const thisMessage = msg.content.toString()

          model.updateMany(
            { status: { $ne: 'ENTREGUE' }, uf: thisMessage.uf },
            { sla: thisMessage.sla },
            { new: true }
          )
          ch.ack(msg)
        }
      })
    })
  })
  .catch(console.warn)
