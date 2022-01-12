// 有效的括号
let bracketsStr = '{}{}([])'
let res = true
const stack = [];
const map = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']']
])
for (const str of bracketsStr) {
    if (map.has(str)) {
        if (!stack.length || (stack[stack.length - 1] !== map.get(str))) {
            res = false
            break
        }
        stack.pop()
    } else {
        stack.push(str)
    }
}
console.log(stack.length === 0 || res)
