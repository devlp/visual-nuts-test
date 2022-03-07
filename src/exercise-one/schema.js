const Joi = require('joi')

const schema = Joi.object().keys({
  until: Joi.number().min(1).max(99999999).positive().required()
})

const validate = (req, res) => {
  const { error } = schema.validate(req.params)
  if (error) {
    const { details } = error
    const message = details.map(i => i.message.replace(/"/gi, '')).join(',')
    res.status(400).json({ success: false, statusCode: 400, message })
  }
  return true
}

module.exports = {
  schema,
  validate
}
