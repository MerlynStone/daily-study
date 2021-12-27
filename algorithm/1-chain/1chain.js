//  构造函数
function ListNode(val) {
    this.val = val;
    this.next = null;
}
//  创建链表-1
function creatChain(arr) {
    return arr.reduceRight((o, i) => {
        if (!(o instanceof ListNode)) {
            o = new ListNode(o)
        }
        i = new ListNode(i)
        i.next = o;
        return i
    })
}
let arr = [1, 2, 3, 4, 5]
let headA = creatChain(arr)
console.log(headA)