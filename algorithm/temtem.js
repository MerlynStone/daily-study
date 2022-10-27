// 单链表
class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }
    Node = class {
        element;
        next = null;
        constructor(element) {
            this.element = element;
        }// 这样写
        // constructor(element) {
        //     this.element = element;
        //     this.next = null;
        // }
    }
    append(element) {
        let node = new this.Node(element)
        // 是否为空链表 空直接创建，非空追加到末尾
        if (this.head == null) {
            this.head = node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.length++
    }
    insert(position, element) {
        let index = 0;
        let node = new this.Node(element)
        let current = this.head
        // 空直接赋值 首位 末尾 其他位
        if (position > 0 && position < this.length) {
            if (position === 0) {
                this.head = node
            } else {
                let previous;
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = node
                node.next = current
            }
            this.length++
            return true

        } else {
            return false
        }
    }
    removeAt(position) {
        let index = 0;
        let current = this.head
        let previous
        if (position >= 0 && position < this.length) {
            if (position === 0) {
                this.head = this.head.next
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
                this.length--
                return current.element
            }
        }
    }
    getHead() {
        return this.head
    }
}
let list = new LinkedList()
list.append('name')
list.append('age')
list.append('your')
list.insert(2, '2222')
console.log(list.removeAt(3))
console.log(list.getHead())

