//  构造函数
function ListNode(val) {
    this.val = val;
    this.next = null;
}
//  创建链表-1
function creatChain(array) {
    const fokedHead = new ListNode(0);
    let current = fokedHead;
    for (let i = 0; i < array.length; i++) {
        current.next = { val: array[i], next: null };
        current = current.next;
    }
    return fokedHead.next
}
//  链表转数组
function creatArray(list) {
    let res = [];
    while (list) {
        res.push(list.val);
        list = list.next;
    }
    return res;
}
let arr = [1, 2, 3, 4, 5]
let headA = creatChain(arr)
console.log(headA)
let array = creatArray(headA)
console.log(array)