class LinkNode {
    constructor(element) {
        this.element = element
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }
    append(element) {
        // 尾部添加节点 首项 非首项
        let node = new LinkNode(element)
        let current;
        if (this.head === null) { //首项直接赋值
            this.head = node
        } else {
            current = this.head
            while (current.next) { // 非首项 遍历到末尾追加节点
                current = current.next
            }
            current.next = node
        }
        this.length++

    }
    insert(position, element) {
        // 指定位置添加节点
        if (position >= 0 && position <= this.length) {
            let node = new LinkNode(element)
            let current = this.head, previous, index = 0;
            if (position === 0) {
                node.next = this.head
                this.head = node
            } else {
                while (index++ < position) {
                    previous = current // 插入节点的前一项
                    current = current.next
                }
                node.next = current
                previous.next = node
            }
            this.length++
            return true
        } else {
            return false
        }

    }
    remove(element) { // 移除某个元素
        let current = this.head
        let previous;
        if (current.element === element) {
            this.head = current.next
            return current
        } else {
            while (current.element != element) {
                previous = current
                current = current.next
            }
            previous.next = current.next
            return current
        }
    }
    removeAt(position) { // 移除某个位置的元素
        if (position >= 0 && position <= this.length) {
            let current = this.head
            let index = 0

            if (position === 0) {
                this.head = current.next
            } else {
                while (index++ < position) {
                    previous = current // 删除节点的前一项
                    current = current.next
                }
                previous.next = current.next

            }
            this.length--
            return current.element
        } else {
            return null
        }
    }
    size() {
        return this.length
    }
    isEmpty() {
        return this.length === 0
    }
    indexOf() { }
    toString() { }
    getHead() { } // 用于外部获取列表节点
    print() {
        // 打印所以节点
        let node = this.head
        while (node) {
            console.log(node.element)
            node = node.next

        }
    }
}
let linkList = new LinkedList()
linkList.append('首项1')
linkList.append('首项2')
linkList.append('首项3')
linkList.insert(0, '000')

linkList.print()
console.log(linkList.size())
linkList.remove('首项1')
linkList.print()
console.log(linkList.size())