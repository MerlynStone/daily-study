// function Stack() {
//     let items = []
//     this.push = function (element) {
//         items.push(element)
//     }
//     this.pop = function () {
//         return items.pop()
//     }
//     this.peek - function () { // 返回栈顶的元素
//         return items[items.length - 1]
//     }
//     this.isEmpty = function () {
//         return items.length > 0
//     }
//     this.clear = function () {
//         items = []
//     }
//     this.size = function () {
//         return items.length
//     }
//     this.print = function () {
//         console.log(items.toString())
//     }
// }
// let stack = new Stack()
// stack.push(1)
// stack.push(2)
// stack.pop()
// stack.size()
// console.log(stack.size())
// console.log(stack.print())

// es6
// class Stack {
//     constructor() {
//         this.items = []
//     }
//     push(element) {
//         this.items.push(element)
//     }
//     pop() {
//         return this.items.pop()
//     }
//     print() {
//         console.log(this.items.toString())
//     }

// }
// let stack2 = new Stack()
// stack2.push(3)
// stack2.push(4)
// console.log(stack2.print())

// 限定作用域 使用weakMap 闭包
let Stack = (function name() {
    let items = new WeakMap() // 私有属性
    class Stack {
        constructor() {
            items.set(this, []) //
        }
        push(element) {
            let s = items.get(this)
            s.push(element)
        }
        print() {
            let s = items.get(this)
            console.log(s.toString())
        }
        // ...
    }
    return Stack
})()
let stack3 = new Stack()
let stack4 = new Stack()
stack3.push(5)
stack3.push(6)
stack4.push(7)
stack4.push(8)
stack3.print()
stack4.print()
// 应用 进制转换
function baseConverter(decNumber, base) {
    var remStack = new Stack(),
        rem, baseString = '',
        digits = '0123456789ABCDEF'
    while (decNumber > 0) {
        rem = Math.floor(decNumber % base) // 取余
        remStack.push(rem)
        decNumber = Map.floor(decNumber / base)
    }
    while (!remStack.isEmpty()) {
        baseString += digits(remStack.pop())
    }
    return baseString;
}