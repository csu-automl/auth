const Joi = require('joi')
const AbstractModel = require('./AbstractModel')

const schema = () => Joi.object({
  password: Joi.string().required()
})

module.exports = class RecoverPasswordRequest extends AbstractModel {
  constructor (data, options) {
    super(data, schema, options)
    Object.freeze(this)
  }
}
