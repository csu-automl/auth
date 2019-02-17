const Joi = require('joi')
const AbstractModel = require('./AbstractModel')

const schema = () => Joi.object({
  clientId: Joi.string().required(),
  clientSecret: Joi.string().required(),
  userId: Joi.string()
})

module.exports = class AuthorizationTokenRequest extends AbstractModel {
  constructor (data, options) {
    super(data, schema, options)
    Object.freeze(this)
  }
}
