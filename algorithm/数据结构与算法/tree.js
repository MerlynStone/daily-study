class BinarySearchTree {
    constructor() {
        this.root = null
        this.insertNode = function (node, newNode) {
            // 新节点的 key 小于 node 节点的值则放在左边 否则右边
            if (newNode.key < node.key) {
                if (node.left === null) {
                    node.left = newNode
                } else {
                    this.insertNode(node.left, newNode)
                }
            } else {
                if (node.right === null) {
                    node.right = newNode
                } else {
                    this.insertNode(node.right, newNode)
                }
            }
        }
    }
    Node = class {
        constructor(key) {
            this.left = null
            this.key = key
            this.right = null
        }
    }
    insert(key) {
        var newNode = new this.Node(key)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
}
let tree = new BinarySearchTree()
tree.insert(11); tree.insert(7); tree.insert(15); tree.insert(5); tree.insert(3); tree.insert(9); tree.insert(8)
tree.insert(10); tree.insert(13); tree.insert(12); tree.insert(14); tree.insert(20); tree.insert(18); tree.insert(25)
console.log(tree)