// 算法 轨道相交---通过哈希表
let headA, headBl;
let listA = [4, 1, 8, 4, 5]
let listB = [5, 0, 1, 8, 4, 5]
function ListNode(val) {
    this.val = val;
    this.next = null;
    this.chainVal = '';
}
function creatChain(arr) {
    return arr.reduceRight((o, i) => {
        if (!(o instanceof ListNode)) {
            let n = o;
            o = new ListNode(o);
            o.chainVal = '';
        }
        let res = new ListNode(i)
        i.next = o
        res.chainVal = i + o.chainVal
        return res;
    })
}
// function getIntersect(headA, headB, skipB) {
//     let visited = new Set();
//     let temp = headA;
//     let num = 0;
//     while (temp !== null) {
//         visited.add(temp.chainVal)
//         // visited ['41845','1845'···'845']
//     }
//     temp = headB
//     while (temp !== null) {
//         if (visited.has(temp.chainVal) && num === skipB) {
//             return temp.val
//             break
//         }
//         temp = temp.next

//     }
//     return null
// }
// // 算法 轨道相交---通过指针
function getIntersect(headA, headB, skipB, listA) {
    if (headA === null || headB === null) return null;
    let pA = headA, pB = headB;
    let num = 0;
    while (pA.chainVal !== pB.chainVal || num === skipB + listA.length - 1) {
        pA = pA.next ? pA.next : headB
        pB = pB.next ? pB.next : headA
        num++
    }
}
headA = creatChain(listA)
headB = creatChain(listB)
console.log(getIntersect(headA, headB, 3))
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
