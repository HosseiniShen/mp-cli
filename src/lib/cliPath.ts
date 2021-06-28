import * as os from 'os'
import * as path from 'path'
import * as fs from 'fs'
import Logger from '../utils/logger'

const pathName = path.join(os.homedir(), '.mpclirc')

/**
 * 加载保存的cli执行文件位置
 * @returns 
 */
export function loadCliPath () {
   if (fs.existsSync(pathName)) {
    try {
      return fs.readFileSync(pathName, 'utf-8')
    } catch (error) {
      Logger.error(
        `Loading saved cli path: ` + 
        `${ error.message }`
      )
      process.exit(1)
    }
   }
}

/**
 * 保存的cli执行文件位置
 * @param cliPath 
 */
export function saveCliPath (cliPath: string | undefined) {
  if (!cliPath) return 
  try {
    fs.writeFileSync(pathName, cliPath)
  } catch (error) {
    Logger.error(
      `Saving cli path: ` +
      `${ error.message }`
    )
  }
}
