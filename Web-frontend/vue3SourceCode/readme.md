## 调试环境搭建
#### 1.克隆项目
安装依赖 pnpm    
npm install -g pnpm
nvm 管理node版本
```bash
git clone git@github.com:vuejs/vue-next.git
```
#### 2.配置脚本 安装依赖
可以编辑package.json 文件可以选择删除pupteer依赖  
pnpm install  
配置脚本：dev: ***  --sourecemap
#### 3.打包
pnpm dev
#### 4.起服务
pnpm serve  
打开vue/example/composition/todomvc.html
#### 5.调试

开发者工具source  ctrl+p 打开todo主页  
打断点createApp 找到源码文件reveal in slidebar
## vue源码的整体架构
### 目录结构
.eslintrc代码质量管控  .prettierrc代码格式化  jest.config单元测试
#### packages
#### scripts  rollup 打包
 scripts/dev.js  
# 进度到 vue3.0 1-4