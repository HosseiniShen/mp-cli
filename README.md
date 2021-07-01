# 命令启动/关闭微信开发者工具

## 安装

```bash
npm install -D @zm-op/mp-cli --registry http://npm.zmops.cc/
```

## 使用

打开指定项目路径（不指定项目会默认打开`/dist/build/mp-weixin`）

```bash
mp-cli open [projectPath]
```

关闭工具

```bash
mp-cli close [projectPath]
```

### 参数

- -D：测试环境（打开 `/dist/dev/mp-weixin`）
- -Q：关闭开发者工具（不加只会关闭项目）

### 最佳实践

```javascript
const { execFile } = require('child_process')
const fs = require('fs')
const path = require('path')
const os = require('os')

let hasSetup = false
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config.plugins.push({
        apply: (compiler) => {
          compiler.hooks.done.tap('setupDevtool', compilation => {
            if (!hasSetup) {
              const ext = os.platform() === 'darwin' ? '' : '.cmd'
              const mpCli = path.resolve(process.cwd(), `./node_modules/.bin/mp-cli${ ext }`)
              if (fs.existsSync(mpCli)) {
                const child = execFile(mpCli, [ 'open', '-D' ], (error, stdout, stderr) => {
                  if (error) {
                    console.log(error)
                  }
                  hasSetup = true
                })
                child.stdout.pipe(process.stdout)
                process.stdin.pipe(child.stdin)
              }
            }
          });
        }
      })
    }
  }
}
```
