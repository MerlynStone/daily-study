vue 声明父子周期知识点   
- 父：beforeCreate->created->beforeMount->子：beforeCreate->created->beforeMount->mounted->父：mounted  
组件知识
- 组件上使用v-modal作为输出值，子组件内部props默认是value为响应式值，可使用this.$emit('input',value)向父组件传递值，子组件内部可以使用model:{prop:'visible',event:"close“}进行重命名  vue3modal可以绑定多个  
sync 可以定义多个绑定的值 vue3删除  
插槽：具名插槽   
mixin  局部混用
- 组件数据优先----在data中
- 同名钩子合并成数组，混入对象的钩子优先调用----created  
- 值为对象的选项，合并为一个对象，冲突时取组件对象的值  methods components 
mixin  全局混用
- 全局都会生效
  缺点：命名不清晰、来源不清晰--可通过mixin插槽的方式解决  
自定义指令--声明周期（vue3之后声明周期会统一）
- bind  只调用一次，指令第一次绑定到元素时调用。在这里可进行一次性父初始化设置
- inserted 被绑定元素插入父节点时调用(仅保证父元素节点存在，但不一定已被插入文档中)
- update  所在组件的Vnode更新时调用，但可能发生在其子VNode更新之前，指令的值可能发生了变化也可能没有。但是你可以通过比较更新前后父值来忽略不必要父模板更新
- componentUpdated  指令所在的组件的VNnode及其子VNode全部更新后调用
- unbind  只调用一次，指令解绑定时调用
动态组件的两种实现方式-注册的方式、接受对应的options  
组件内声明周期activated（激活）deactivated（失效）
keep-alive  include 激活包含的组件  exclude  
异步组件 可进行配置项模板加载，组件加载前的状态，加载失败的状态，加载超时的状态   
render(createElement)函数 普通模板不够灵活可使用render函数进行试图的渲染   
什么情况下使用render函数？灵活性、逻辑复杂  
plugin(插件)  install(Vue,options)  vuex vue-router 都是插件
- 添加全局函数
- 添加全局资源、组件、指令
- 混入一些组件选项
- 添加vue的实例方法  
  