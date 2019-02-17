const Joi = require('joi')
const AbstractModel = require('./AbstractModel')

const schema = () => Joi.object({
  name: Joi.string(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  baseURL: Joi.string().uri({
    scheme: [
      'http', 'https'
    ]
  }).required()
})

module.exports = class SignUpRequest extends AbstractModel {
  constructor (data, options) {
    super(data, schema, options)
    this.email = this.email.toLowerCase()
    Object.freeze(this)
  }
}
