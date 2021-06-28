import * as path from 'path'

/**
 * 默认打开的小程序项目
 * @param isDev 
 * @returns 
 */
export function getDefaultPath (isDev: boolean) {
  const mode = isDev ? 'dev' : 'build'
  return path.join(process.cwd(), `./dist/${ mode }/mp-weixin`)
}
