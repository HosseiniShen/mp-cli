import { ExecFileOptions } from 'child_process'
import { loadCliPath, saveCliPath } from './cliPath'
import { inquirPath } from './prompt'
import { execute } from '../utils/execFile'
import Logger from '../utils/logger'

/**
 * @class MPCli
 * @description
 */
export default class MPCli {
  private static cliPath: string;

  /**
   * 获取cli可执行文件
   * @returns 
   */
  private static async getCliPath () {
    if (this.cliPath) return this.cliPath

    let cliPath: string | undefined = loadCliPath()
    if (!cliPath) {
      try {
        cliPath = await inquirPath()
      } catch (error) {
        process.exit(1)
      }
      saveCliPath(cliPath)
    }

    if (!cliPath) {
      Logger.error('devtool cli not found')
      process.exit(1)
    }

    this.cliPath = cliPath
    return cliPath
  }

  static async run (args: Array<string>, options: ExecFileOptions = {}) {
    let cliPath = await this.getCliPath()
    await execute(cliPath, args, options)
  }
}
