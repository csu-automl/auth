const makeUserModel = user => user == null ? null : ({
  ...user.toJSON()
})

module.exports = {
  makeUserModel
}
