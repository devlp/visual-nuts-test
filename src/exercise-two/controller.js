const { exerciseTwo } = require('./service')

const handlerGet = (req, res, next) => {
  try {
    const result = exerciseTwo()
    res.json(result)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports = { handlerGet }
