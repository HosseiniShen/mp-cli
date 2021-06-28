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
