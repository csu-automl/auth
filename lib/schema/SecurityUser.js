const keystone = require('keystone')
const Types = keystone.Field.Types

const SecurityUser = new keystone.List('SecurityUser')

SecurityUser.add({
  name: { type: String, initial: true },
  email: { type: Types.Email, initial: true, required: true, unique: true, index: true },
  password: { type: Types.Password, initial: true, required: true },
  isConfirmed: { type: Types.Boolean, initial: true }
}, 'Permissions', {
  isAdmin: { type: Boolean, label: 'Is Superuser', index: true, initial: true }
})

SecurityUser.schema.pre('save', function (next) {
  if (this.name == null || this.name === '') {
    this.name = this.email.substring(0, this.email.lastIndexOf('@'))
  }
  this.email = this.email.toLowerCase()
  next()
})

// Provide access to Keystone
SecurityUser.schema.virtual('canAccessKeystone').get(function () {
  return this.isAdmin && this.isConfirmed
})

SecurityUser.defaultColumns = 'name, email, isConfirmed, isAdmin'
SecurityUser.register()
