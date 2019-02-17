const config = require('config')
const nodemailer = require('nodemailer')
const { promisify } = require('util')
const log = getLogger('Message')

const mailConfig = config.get('mail')

const transport = nodemailer.createTransport(mailConfig.transport)

class Message {
  constructor ({ to, subject, html, from = mailConfig.from }) {
    this.from = from
    this.to = to
    this.subject = subject
    this.html = html
  }

  async send () {
    try {
      log.info(`Send from ${this.from} to ${this.to} message with subject: '${this.subject}'`)
      return await promisify(transport.sendMail.bind(transport))({
        from: this.from,
        to: this.to,
        subject: this.subject,
        html: this.html
      })
    } catch (e) {
      log.warn(e)
    }
  }
}

module.exports = Message
