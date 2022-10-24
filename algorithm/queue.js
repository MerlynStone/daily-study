//  队列 enqueue 入队 dequeue 出队  front 队首 end  队尾
class Queue {
    constructor() {
        this.item = []
    }
    enqueue(element) {
        this.item.push(element)
    }
    dequeue() {
        return this.item.shift()  // 队首删除
    }
    size() {
        return this.item.length   // 队首删除
    }
    // ……
}
//  优先队列 存储的是节点对象  
function PriorityQueue() {
    let items = []
    function QueueElement(element, priority) {
        this.element = element
        this.priority = priority
    }
    this.enqueue = function (element, priority) {
        let queueElement = new QueueElement(element, priority)

        let added = false
        for (let i = 0; i < items.length; i++) {
            if (queueElement.priority < items[i].priority) {
                items.splice(i, 0, queueElement)
                added = true
                break
            }
        }

        if (!added) {
            items.push(queueElement)
        }
    }
    this.print = function () {
        for (let index = 0; index < items.length; index++) {
            console.log(`${items[index].element} --- + ${items[index].priority}`)
        }
        console.log(JSON.stringify(items))

    }

}
let priority = new PriorityQueue()
priority.enqueue('mm', 2)
priority.enqueue('ll', 1)
priority.enqueue('ml', 3)
priority.enqueue('ml', 1)
priority.print()

// 循环队列 击鼓传花 
function hotPotato(nameList, num) {
    let queue = new Queue()
    // 入列
    for (let index = 0; index < nameList.length; index++) {
        queue.enqueue(nameList[index])
    }
    console.log(queue.size())

    let eliminated = ''
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue()) //出列 再入列
        }
        eliminated = queue.dequeue()
        console.log(eliminated + '出列')
    }
    return queue.dequeue()  //最后一个出列

}
let names = ['1', '2', '3', '5', '7']
let winner = hotPotato(names, 3)
console.log(winner)