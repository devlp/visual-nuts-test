'use-strict'

const { handlerGet } = require('./controller')

const routes = [{
  method: 'get',
  path: '/exercise-two',
  middleware: [handlerGet]
}]

module.exports = routes
