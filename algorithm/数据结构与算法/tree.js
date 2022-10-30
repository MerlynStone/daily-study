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
        this.print = function (value) {
            console.log(value)
        }
        // 中序遍历从小到大--排序应用
        this.inOrderTraverseNode = function (node, callback) {
            if (node !== null) {
                this.inOrderTraverseNode(node.left, callback)
                callback(node.key)
                this.inOrderTraverseNode(node.right, callback)
            }
        }
        // 前序遍历从小到大--排序应用
        this.preOrderTraverseNode = function (node, callback) {
            if (node !== null) {
                callback(node.key)
                this.preOrderTraverseNode(node.left, callback)
                this.preOrderTraverseNode(node.right, callback)
            }
        }
        // 后序遍历从小到大--排序应用
        this.postOrderTraverseNode = function (node, callback) {
            if (node !== null) {
                this.postOrderTraverseNode(node.left, callback)
                this.postOrderTraverseNode(node.right, callback)
                callback(node.key)
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
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback)
    }
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback)
    }
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback)
    }
}
let tree = new BinarySearchTree()
tree.insert(11); tree.insert(7); tree.insert(15); tree.insert(5); tree.insert(3); tree.insert(9); tree.insert(8)
tree.insert(10); tree.insert(13); tree.insert(12); tree.insert(14); tree.insert(20); tree.insert(18); tree.insert(25);
tree.insert(6)
console.log(tree)
console.log(tree.inOrderTraverse(tree.print))
console.log(tree.preOrderTraverse(tree.print))
console.log(tree.postOrderTraverse(tree.print))