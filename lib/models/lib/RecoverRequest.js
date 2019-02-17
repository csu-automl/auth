const Joi = require('joi')
const AbstractModel = require('./AbstractModel')

const schema = () => Joi.object({
  email: Joi.string().email().required(),
  baseURL: Joi.string().uri({
    scheme: [
      'http', 'https'
    ]
  }).required()
})

module.exports = class SignInRequest extends AbstractModel {
  constructor (data, options) {
    super(data, schema, options)
    this.email = this.email.toLowerCase()
    Object.freeze(this)
  }
}
