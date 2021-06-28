/**
 * Darwin OS
 * @returns 
 */
export function isDarwin () {
  const platform = process.platform
  return platform === 'darwin'
}
