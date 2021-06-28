import { execFile, ExecFileOptions, ExecFileException } from 'child_process'
import Logger from './logger'

export function execute (command: string, args: Array<string>, options: ExecFileOptions = {}) {
  return new Promise((resolve, reject) => {
    execFile(command, args, options, (error: ExecFileException | null, stdout: string, stderr: string) => {
      if (error) {
        Logger.error(error.message)
        return reject(error)
      }

      if (stderr) {
        Logger.warn(stderr)
      }

      Logger.info(stdout)
      resolve(stdout)
    })
  })
}
