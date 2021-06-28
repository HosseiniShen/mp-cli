import ora from 'ora'
import chalk from 'chalk'
import MPCli from './cli'
import { getDefaultPath } from '../utils/projectPath'
import Logger from '../utils/logger'

/**
 * 打开指定项目
 * @param {*} projectPath 
 */
export async function open (projectPath: string | undefined, mode: boolean) {
  projectPath = projectPath || getDefaultPath(mode)
  Logger.info(`启动项目路径：${ projectPath }`)
  const spinner = ora(chalk.green('正在启动开发者工具...\n')).start()
  try {
    await MPCli.run([ 'open', '--project', projectPath ])
  } catch (error) {
    
  }
  spinner.stop()
}

/**
 * 关闭开发者工具
 * @param projectPath 
 * @param mode 
 * @param quit 
 */
export async function close (projectPath: string | undefined, mode: boolean, quit: boolean) {
  projectPath = projectPath || getDefaultPath(mode)
  const args = [ 'close' ]
  if (!quit) {
    
  }
  if (quit) {
    args.push('quit')
  } else {
    Logger.info(`关闭项目路径：${ projectPath }`)
    args.push('--project', projectPath)
  }
  const spinner = ora(chalk.yellow('正在关闭开发者工具...\n')).start()
  try {
    await MPCli.run(args)
  } catch (error) {
    
  }
  spinner.stop()
}
