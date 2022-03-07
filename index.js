
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const fs = require('fs')

const { PORT } = process.env

const router = express.Router()
router.get('/healths', (req, res, next) => {
  res.json({ status: 'UP' })
})

fs.readdirSync('./src').forEach(folder => {
  const routes = require(`./src/${folder}/routes.js`)
  routes.forEach(route => {
    console.log(`${[route.method.toUpperCase()]} ${route.path}`)
    router[route.method](route.path, route.middleware)
  })
})

const app = express()
app.use(
  morgan('tiny'),
  helmet(),
  express.json(),
  cors({
    exposedHeaders: 'filename'
  }),
  router
)

app.all('*', (req, res) => res.status(404).json({ message: 'The requested URL could not be found or is not present at the moment' }))

const port = PORT || 80
app.listen(port, () => console.log(`Running on http://localhost:${port}`))
