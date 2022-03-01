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
接收一个props参数返回一个reactNodes  
function 组件名（props）{
    return 要构造的虚拟DOM
} 注意：函数组件中，没有this(this为underfind)在16.7之前函数组件中没有声明周期和state 所以又被称只为纯渲染组件或无状态组件  
-使用函数组件时，尽量减少在函数中声明子函数，否则组件每次更新时都会重新创建这个函数  
React hooks（钩子）  
react 16.8新增的功能，无须编写类即可使用状态和其他React功能   
*** 函数组件更新，会重新执行整个函数  
### 常用hook
- useState
  const [state,setState] = useState(initialState)  
  const [状态,修改状态的方法] = useState(初始值)
  - 在同一个组件中可以使用useState定义多个状态
  - 注意useState返回的状态是引用类型，setState方法不会进行对象合并
  - 注意useState返回的setState方法同样是异步方法
- useEffect
- useRef
- useMemo  
hooks只能放在函数组件中（或自定义hook）最外层不可放在if for 等  
useEffect（副作用DOM操作，数据请求）---主要用来处理组件中的副作用逻辑，用于替代声明周期，类似于Vue中的watch  
useEffect(()=>{
  effect:副作用函数
  return()=>{
    cleanup 清理函数
  }
},[input]) input依赖参数  
挂载阶段：从上到下执行函数组件，如果碰到useeffect将其中的的effect存储到一个队列中，当组件挂载函数挂载完成之后按照队列顺序执行effect函数，并接收cleanup函数存贮到以后新的队列   
更新阶段：从上到下执行函数组件，如果碰到useeffect将其中的的effect存储到一个队列中，当组件更新完成之后，会将之前存执的cleanup函数队列按照顺序执行，然后执行effect队列，并将新的effect存贮到新的队列时。在更新阶段会观察依赖参数的值有么有变化，如果不变化就不执行对象的cleanup和effect
卸载阶段：找到之前存执的cleanup函数队列，依次执行  
依赖参数：null 组件每次更新都执行  
[] 组件更新不执行  
[1,2,3]只要有一个更新就执行
常见副作用处理的地方：  
1.componentDidMount: 
2.componentDidUpdate:
3.componentWillMount:
```js
const isMount = useRef(false)
useEffect(()=>{
  // 挂载完成及更新完成之后执行
});
useEffect(()=>{
  if(isMount.current){
    // 组件更新完成
  } else{
    isMount.current=true
  }
});
useEffect(()=>{
  // 挂载完成及更新完成之后执行
  return()=>{
    // 组件即将卸载执行
  }
}[]);
 ```
useRef  
- 类似createRef  
- 除了可以保存实例之外，还可以保存组件更新前的一些数据
    - 当ref存贮的是数据时，数据不会随着组件的更新而自动更新
```js
const pCountEl = useRef(); // <p ref={pCountEl}></p>
const preCount = useRef(count);
useEffect(()=>{
  console.log(pCountEl.current.innerHTML)
  console.log(preCount.current) //
  preCount.current = count  //手动更新
}[count])
```
## meno 
用于优化父组件更新引起的子组件更新问题  
memo本质是一个高阶组件
NewCmp = memo(Cmp,compare:()=>false|true)  
调用memo会返回一个新的组件（b组件），调用新组件，新组件内部会调用我们传入的组件（a组件），当父组件更新时，b组件会调用compare函数，如果该函数返回值为false，则更新a组件  ，否则不更新a组件  
高阶组件：一个普通函数，该函数有一个特征，参数接收一个组件，并返回一个新组件  
useMemo  
```js
const price = useMemo(()=>{
  return ()=>{
    return count*18
  }
},[count])
// 只更新count对应的视图 性能优化向
```
useMemo：当依赖参数有变化时，执行相应函数，并返回函数的返回值-类似vue computed 计算属性  
useCallback-useMemo进化版  
useMemo  
```js
const price = useCallback(()=>{
  return count*18
},[count])
// 只更新count对应的视图 性能优化向
```
### 自定义hook
```js
function useScroll(){
  const [y, setY] = useState(0);
  useEffect(()=>{
    setY(window.scrollY);
    window.onscroll=()=>{
      setY(window.scrollY);
    }
    return ()=>{
      window.onscroll=null
    },[]);
  };
  return [y,(newY)=>{
    window.scrollTo(window.scrollY,newY)
    setY(y)
  }];
}
export {useScroll}
// 使用
const Y = useScroll();
```
## redux
## react-router 
版本之间api使用方法变化很大以https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md  
默认匹配 url以当前path为开始时则匹配  
exact精准匹配 url===path||url===path/    
strict严格匹配 url===path 必须基于exact精准匹配  
多路径匹配[]  
动态路由   
history action： pop：地址栏直接输入地址或刷新，或从其他站点跳转过来  
```js
// 路由鉴权  封装组件
<Route ... render={(=>{
  if(user){
    return AboutDetail
  } else{
    return 404
  }
})} />
```
useHistory  获取history对象  
useLocation 获取location对象  
useParms  获取动态路由参数  
useRouteMatch  获取match对象  
 
## 修改或添加CRA环境中webpack配置
- 运行 npm run eject
- -使用第三方工具来对CRA中webpack配置做扩展
- craco 
   - 安装
- react-app-rewired
- customize-cra  
## 封装功能组件 
```js
// 路由表
const routes = [
  {
    path:['/'],['/home'],
    exact:true,
    render(props){
      return <HomeView {...props} />
    }
  },
  {
    path:['/getstart'],
    exact:true,
    render(props){
      return <Get StartView {...props} />
    }
  },
];
export {routes}
// 使用
{routes.map(item,index)=>{
  return <Route key={index} exact={item.exact} path={item.paht} render={(props)=>{
    return item.render(props)
  }}>
}}
```
### 基于Hooks的异步请求

### 渲染组件（Render Props）
术语“render props”是指一种简单的技术，用于使用一个值为函数的props在React组件之间的代码共享，带有渲染属性（Render Props）的组件需要一个返回React元素并调用它的函数，而不是实现自己的渲染逻辑
### 高阶组件
### 路由守卫
### 路由按需加载