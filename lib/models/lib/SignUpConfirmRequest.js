const Joi = require('joi')
const AbstractModel = require('./AbstractModel')

const schema = () => Joi.object({
  check: Joi.string().required()
})

module.exports = class SignUpConfirmRequest extends AbstractModel {
  constructor (data, options) {
    super(data, schema, options)
    Object.freeze(this)
  }
}
