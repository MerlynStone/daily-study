<!-- 倒序 -->
react构建虚拟DOM  
react-dom将虚拟DOM渲染成真实DOM  
jSX javascript+xml 给JavaScript添加XML的语法扩展  
html超文本编辑语言  
xml自定义标记语言
## JSX本质是什么？
虚拟DOM树  
create-react-app CRA 官方脚手架
react 17 和之前版本在使用时的差异：react 17中增加了JSX-runtime，可以之间将JSX 转换成虚拟dom。如果模块中只使用到了JSX的话可以不引人react
## JSX 注意事项：
1.JSX不是字符串  
2.JSX不是HTML 很多写法和HTML有区别 另外有强制的大小写规则  
3.标签名必须小写，组件名首字母大写  
4.所有的标记必须闭合  
5.在JSX中支持插值表达式-在内容中做插值 在属性中做插值  
- 5.1  在插值表达式中可以接收一个js表达式 变量 运算 函数
- 5.2  如果是在元素内容中做插值，运算符必须是ReactNode  
6 JSX中属性的写法，不一定和HTML一致  
- 6.1 class --->className  
- 6.2 如果属性名由两个及以上的单词组成，一般从第二个单词首字母开始大写
- 6.3注意style的值不是字符串而是对象  
7 JSX最终会变成虚拟DOM JSX在输出的时候必须有且只有一个顶层容器元素 Fragment:<Fragment></Fragment>  或 <></>  
## 类组件  
1.组件必须继承自React.Component
2.组件必须有一个render方法
3.render方法的返回值是该组件的视图
 state状态:  
 1.React的组件类似状态机，状态的值不一样，组件会呈现出不同的显示，当组件的状态有修改时，视图会进行重新渲染  
 2.在React state应该是不可变值，修改state的唯一方式是调用组件的setState方法
 事件：
 1.react 的事件写法 类似js的行间事件
 2.事件名第二个单词的首字母大写
 3.react的事件中的this指向为undefined（使用箭头函数或者绑定undefined）
 4.阻止默认事件要是有event.preventDefault();