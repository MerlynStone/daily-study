// 数据流中的K大元素


// 相交链表
// 链表节点
class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}
class SingleLinkedList {
    constructor() {
        this.head = null
    }
    // 链表尾部添加node
    add(val) {
        let node = new Node(val);
        if (this.head == null) {
            this.head = node
        } else {
            let cur = this.head;
            while (cur.head !== null) {
                cur = cur.next;
            }
            cur.next = node;
        }
    }
    print() {
        let data = [];
        let cur = this.head
        while (cur) {
            data.push(cur.val);
            cur = cur.next;
        }
        console.log(JSON.stringify(data))
    }
}
// 旋转链表
function rotateRight(head, k) {
    // 当k===0 没有head 没有next
    if (k === 0 || !head || !head.next) {
        return head;
    }
    // 记录链表长度，确定原始链表的尾部节点
    let n = 1
    let cur = head
    while (cur.next) {
        cur = cur.next
        n++
    }
    // 单项链表转换成循环链表，
    cur.next = head
    let add = n - k % n;
    if (add === 0) {
        return head
    }
    while (add) {
        cur = cur.next
        add--
    }
    const ret = cur.next
    cur.next = null
    return ret;

}
const singleLinkedList1 = new SingleLinkedList()
const input = [[1, 2, 3, 4, 6, 3], 4]
for (let index = 0; index < input[0].length; index++) {
    singleLinkedList1.add(input[0][index])
}
singleLinkedList1.head = rotateRight(singleLinkedList1.head, input[1])
singleLinkedList1.print();
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
