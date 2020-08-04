const queueName = 'slaUpdate'
const open = require('amqplib').connect('amqp://localhost')

// Consumer
open
  .then(conn => conn.createChannel())
  .then(ch => {
    console.log(1, ch)
    return ch.assertQueue(queueName).then(ok => {
      console.log(2, ok)
      return ch.consume(queueName, msg => {
        console.log(3, queueName)
        console.log(3, msg)
        if (msg !== null) {
          console.log(4, msg.content.toString())
          ch.ack(msg)
        }
      })
    })
  })
  .catch(console.warn)
