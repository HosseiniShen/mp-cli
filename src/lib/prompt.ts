import * as path from 'path'
import * as inquirer from 'inquirer'
import slash from 'slash'
import { isDarwin } from '../utils/env'

export function inquirPath (): Promise<string | undefined> {
  return new Promise((resolve, reject) => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'path',
        message: '请输入微信开发者工具安装路径',
        description: 'Wechat devtool path'
      }
    ]).then(ret => {
      let retPath = slash(ret.path)
      if (retPath) {
        retPath = retPath.trim()
        const _path = path.resolve(
          retPath,
          isDarwin() ? `MacOS/cli` : `cli.bat`
        )
        return resolve(_path)
      }
      reject()
    }).catch(reject)
  })
}
