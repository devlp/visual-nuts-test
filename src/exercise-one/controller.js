const { exerciseOne } = require('./service')

const handlerGet = (req, res, next) => {
  try {
    const result = exerciseOne(req.params.until)
    res.json(result)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports = { handlerGet }
