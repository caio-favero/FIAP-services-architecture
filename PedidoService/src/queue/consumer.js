const queueName = 'slaUpdate'
const open = require('amqplib').connect(`amqp://rabbitmq:5672`)
const model = require('../model/pedidoModel')
const moment = require('moment')

open
  .then(conn => conn.createChannel())
  .then(ch => {
    return ch.assertQueue(queueName)
      .then(() => {
        return ch.consume(queueName, msg => {
          if (msg !== null) {
            const thisMessage = msg.content.toString()
            console.log('consumed::slaUpdate', thisMessage)

            model.find({ status: { $ne: 'ENTREGUE' }, uf: thisMessage.uf })
              .then(res => {
                res.forEach(item => {
                  model.findByIdAndUpdate(item._id,
                    { sla: thisMessage.sla, dataEntrega: moment(item.dataCriacao, "DD-MM-YYYY").add(thisMessage.sla, 'days') },
                    { new: true }
                  )
                })
              })
            ch.ack(msg)
          }
        })
      })
  })
  .catch(console.warn)
