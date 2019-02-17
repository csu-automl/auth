const Joi = require('joi')
const AbstractModel = require('./AbstractModel')

const schema = () => Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
})

module.exports = class RecoverRequest extends AbstractModel {
  constructor (data, options) {
    super(data, schema, options)
    this.email = this.email.toLowerCase()
    Object.freeze(this)
  }
}
