import chalk from 'chalk'
import stripAnsi from 'strip-ansi'

enum LoggerLevel {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR'
}

export default class Logger {
  static log (message: string = '') {
    console.log(message)
  }

  static info (message: string = '') {
    console.log(this.format(chalk.bgBlue.black(LoggerLevel.INFO), message))
  }

  static warn (message: string = '') {
    console.log(this.format(chalk.bgYellow.black(LoggerLevel.WARN), message))
  }

  static error (message: string = '') {
    console.log(this.format(chalk.bgRed(LoggerLevel.ERROR), message))
  }

  private static format (label: string, message: string = '') {
    return message.split('\n').map((line, i) => (
      i === 0
        ? `${ label } ${ line }`
        : line.padStart(stripAnsi(label).length)
    )).join('\n')
  }
}
