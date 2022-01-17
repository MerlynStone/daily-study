vue 声明父子周期知识点   
- 父：beforeCreate->created->beforeMount->子：beforeCreate->created->beforeMount->mounted->父：mounted  
组件知识
- 组件上使用v-modal作为输出值，子组件内部props默认是value为响应式值，可使用this.$emit('input',value)向父组件传递值，子组件内部可以使用model:{prop:'visible',event:"close“}进行重命名  vue3modal可以绑定多个
sync 可以定义多个绑定的值 vue3删除
插槽第六章第2节： 组件化思想 -组件基础 2:0:0