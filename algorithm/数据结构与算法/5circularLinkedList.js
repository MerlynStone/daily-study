// 循环列表
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}
class CircularLinkedList {
    constructor(element) {
        this.head = new Node(1)
        this.element = element
        this.next = null
    }
    create(elements) {
        let current = this.head
        for (let index = 0; index < elements.length; index++) {
            let element = elements[index];
            let node = new Node(element)
            current.next = node
            current = current.next  // 移动指针
        }
        current.next = this.head
    }
    print() {
        let index = 0
        let current = this.head
        while (index++ < 10) {
            current = current.next
            console.log(current.element)
        }
    }

}
let circle = new CircularLinkedList()
circle.create([2, 3, 4, 5])
console.log(circle.print())

// 有环链表
// 先创建有环链表
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}
// 1 - 2 - 3 
//----- 5- 4 
let linkHead = new Node(1)
linkHead.next = new Node(2)
linkHead.next.next = new Node(3)
linkHead.next.next.next = new Node(4)
linkHead.next.next.next.next = new Node(5)
linkHead.next.next.next.next.next = new Node(6)
linkHead.next.next.next.next.next.next = linkHead.next.next
// console.log(linkHead)
// 
function isCircularLinked(head) {
    if (head === null) return null;
    if (head.next === null) return null;
    let p = head, q = head // p快 q慢 快慢指针
    // 先执行再判断
    do {
        p = p.next.next
        q = q.next
    } while (p != q && p && q.next)
    if (q == null || p.next == null) return false
    console.log(p) //相遇点
    q = head
    while (p != q) {
        q = q.next
        p = p.next
    }
    console.log(p)  // 起始点
    // return p
}
isCircularLinked(linkHead)