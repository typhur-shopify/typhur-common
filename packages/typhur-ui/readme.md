# 发布包

1. 项目根目录创建 `.npmrc` 文件
   ```js
   @typhur-shopify:registry=https://npm.pkg.github.com/
   //npm.pkg.github.com/:_authToken=YOUR_TOKEN
   ```
   - `@typhur-shopify`为当前库所属的组织，对应的`package.json`中的包名也应该以`@组织名/packagename`命名
   - `YOUR_TOKEN`需要在 github 中生成，Settings -> Developer settings -> Personal access tokens -> Generate new token;需要选中 repo、write:packages、read:packages 权限
2. 提交代码到仓库后使用 npm 命令发布

   ```text
   npm login --registry=https://npm.pkg.github.com/
   npm publish
   ```

   - login 的时候，username 就是你的 github 用户名，password 是前面生成的`YOUR_TOKEN`
