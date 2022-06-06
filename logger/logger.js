const winston = require('winston')
const { format, transports } = winston
const path = require('path')

const logFormat = format.printf(info => `${info.timestamp} ${info.level} : ${info.message}`)

const logger = winston.createLogger({
  format: format.combine(
    format.label({ label: path.basename(process.mainModule.filename) }),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    // Format the metadata object
    format.metadata({ fillExcept: ['message', 'level', 'timestamp'] })
  ),
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        logFormat
      )
    }),
    new transports.File({
      filename: 'logs/combined.log',
      format: format.combine(
        format.json(),
        logFormat
      )
    })
  ],
  exitOnError: false
})

module.exports = logger;