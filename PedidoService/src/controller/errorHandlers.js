const handleErrors = (err, request, response, next) => {
  const axiosStatus = err.response && err.response.status
  let status = err.status || axiosStatus || 500
  const message = {
    err: err.message,
    url: request.url,
    status,
  }

  if (status === 500) {
    message.stack = err.stack
  }

  if (isDuplicated(message))
    status = 400

  if (status !== 404 || !isDuplicated(message)) {
    logger.error('AppController', message)
  }

  response
    .status(status)
    .json([
      {
        message: err.message,
        logref: err.logref,
        error_description: err.error_description,
      },
    ])

  next()
}

module.exports = handleErrors

const isDuplicated = message => (message.err || '').includes('E11000')
