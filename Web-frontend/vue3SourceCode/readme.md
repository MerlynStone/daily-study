## 调试环境搭建
#### 1.克隆项目
安装依赖 pnpm    
npm install -g pnpm
nvm 管理node版本
nvm isntall v16.13.1
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
 > vue  
 >> reactivity 响应式  
 > compiler-dom ——compiler-core  编译器  
 >runtime-dom_——runtime-core  运行时


## vue初始流程分析
* createApp() 应用程序实例创建过程：如何创建实例，实例长什么样？  
  createAppAPI()函数
  实例是对象 {use(),component(){},mount(){}}
  【知识点】工厂函数
* app.mount() 挂载过程：挂载都做了什么？  
  1创建根节点虚拟vnode  
  2.执行render  生成的vnode传递给patch函数转换成dom，并追加到宿主元素  
  结论：传入组件数据和状态转换为dom并追加到宿主元素  
查看调用栈及调试
###  vue2与vue3初始化方式的变化及原因？
* 函数方式创建实例
* 实例方法
* 简化API，一致性增强
* 动机：ts强类型支持更好，避免全局污染，简化，增强一致性，利于程序变的更小
###  vue3更新流程分析
* setupRenderEffect建立更新机制
* 当前组件响应式数据发生变化重新执行函数更新
* 函数内部会调用patch
### vue3 composition API（逻辑复用、可维护性、消灭this）
- setup（props，{emit，slots，attrs }）
- 声明周期钩子
- getCurrentInstance
- Project/inject   
执行的时刻，为什么没有created钩子？  
传入的setup参数中props，ctx是什么？  
如果和data中的数据冲突Vue3怎么处理？  
在setup中声明周期的钩子是如何工作的

体验：结合reactivity API
### vue3 reactivity API 探究
# 进度到 VUE 3.0 6-1