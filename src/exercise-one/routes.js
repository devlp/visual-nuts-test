'use-strict'

const { validate } = require('./schema')
const { handlerGet } = require('./controller')

const routes = [{
  method: 'get',
  path: '/exercise-one/:until',
  middleware: [validate, handlerGet]
}]

module.exports = routes
