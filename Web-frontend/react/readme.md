<!-- 倒序 -->
react构建虚拟DOM  
react-dom将虚拟DOM渲染成真实DOM  
jSX javascript+xml 给JavaScript添加XML的语法扩展  
html超文本编辑语言  
xml自定义标记语言
## JSX本质是什么？
createElement()  虚拟DOM树  
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
## React 类组件详解
1.父级向子级通信：  
把数据添加到子组件的属性中，然后子组件从props属性中获取父级传递过来的数据  
2.子级向父级进行通信  
在react 中数据永远只能自上向下进行传递，如果子级向父级传递则需要在父级中定义相关的回调方法，然后讲回调方法传递给子级，子级调用父级的回调来向父级进行通信。(或者使用三方库)  
setState(updater,[callback])  
updater更新数据 function/object
-function  返回值是更新的状态
-object 要更新的状态
-callback 更新成功后的回调function  
-批处理 react通常会集齐一批需要更新的状态，然后一次性更新来保证渲染的性能  
-浅合并 Object.assign()
-调用setState之后 会触发声明周期，重新渲染组件
批处理：
1.正常情况下，在一个操作中多次调用setState react会合并这些更新，只更新一次组件  
state是不可变值修改state的唯一办法是调用setState根据原有的state映射出一个新的state  
setState 在批更新的机制下表现为异步，否则为同步  
setState 可以控制的方法中(react的声明周期中，react事件)表现为异步，在微任务中及DOM中表现为同步 
## 生命周期16.4版本之后  
挂载阶段(mout):  从组件初始化-->组件构建的视图已经渲染到DOM树中  
constructor：组件初始化  
  -static getDerivedStateFromProps(props)将props中的内容关联到state中  
  -注意this问题  
  -render构建虚拟DOM  
  -componentDidMount 组件完成挂载 
   --处理副作用（DOM操作，数据请求）  
更新阶段(update)：从组件开始更新-->组件对应的DOM视图更新完成
    --调用setState会进行组件更新
    --React父组件更新会引起子组件进行更新 
    static getDerivedStateFromProps(nextProps，nextState)  
    shouldComponentUpdate()  
    render()  
    getSnapshotBeforeUpdate(prevProps，prevState)  
    componentDidMount  

卸载阶段(unMount)：组件从DOM中移除  
context 用于实现跨组件信息传递  
provider 用于向包在provider中子孙后代进行信息传递，在provider的 value属性中，定义想要传递的信息  
将provider对应的context对象，绑定在类的contextType属性中，组件实例化是就会查找类的contextType属性，并将对应的context中接收数据，放入到context数据中  
## 函数组件  
function 组件名（props）{
    return 要构造的虚拟DOM
} 注意：函数组件中，没有this(this为underfind)在16.7之前函数组件中没有声明周期和state 所以又被称只为纯渲染组件或无状态组件  
