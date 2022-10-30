class DoublyLinkedNode {
    constructor(element) {
        this.next = null
        this.prev = null
        this.element = element
    }
}
class DoublyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null  //新增 尾指针
    }
    length() {
        return this.length
    }
    insert(position, element) {
        // 检查越界
        if (position >= 0 && position <= this.length) {
            let node = new DoublyLinkedNode(element)
            let current = this.head
            let previous, index = 0
            if (position == 0) { // 在第一位增加
                if (!this.head) { // 链表新增第一个的情况
                    this.head = node
                    this.tail = node
                } else {
                    // node 为要插入的新节点 current为之前的head
                    node.next = current
                    current.prev = node
                    this.head = node
                }
            } else if (position === this.length) {
                // 在最后一项添加current为之前的 tail  node 为要插入的新节点
                current = this.tail
                current.next = node
                node.prev = current
                this.tail = node


            } else {
                // 中间插入
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                // 下面顺序无关
                node.next = current
                node.prev = previous
                current.prev = node
                previous.next = node
            }
            this.length++
            return true
        } else {
            return false
        }
    }
    removeAt(position) {
        let current = this.head
        let previous, index = 0
        if (position > -1 && position < this.length) {
            if (position === 0) {
                this.head = current.next
                // 只有一项的时候 更新 tail
                if (this.length === 1) {
                    this.tail = null
                } else {
                    this.head.prev = null
                }
            } else if (position === this.length - 1) {
                current = this.tail
                this.tail = current.prev//current = current.prev
                this.tail.next = null
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
                current.next.prev = previous
            }
            this.length--
            return current.element
        } else {
            return null
        }
    }
    print() {
        let current = this.head
        let elementStr = ''
        while (current.next) {
            current = current.next
            elementStr += current.element + '-'
        }
        console.log(elementStr)
        return elementStr
    }
}
let doubly = new DoublyLinkedList()
doubly.insert(0, '000')
console.log(doubly.length)
doubly.insert(0, '111')
doubly.insert(2, '222')
doubly.insert(1, '中间11')

console.log(doubly.length)
console.log(doubly.print())

doubly.removeAt(2)
console.log(doubly.length)
console.log(doubly.print())
