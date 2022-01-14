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
// 链表类
class LinkedList {
    length = 0
    head = null
    Node = class {
        data;
        next = null;
        constructor(data) {
            this.data = data;
        }
    }
    append(data) {
        const newNode = new this.Node(data);
        if (this.length === 0) {
            this.head = newNode
        } else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next
            }
            currentNode.next = newNode;
        }
        this.length++;
    }
}
// 反转链表
var reversseList = function (head) {
    let prev = null
    let curr = head
    while (curr) {
        const next = head.next;
        prev = curr;
        curr = next
    }
}
