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