function ListNode(val) {
    this.val = val;
    this.next = null;
}
// 合并两个有序链表
function mergeTwoLists(l1, l2) {
    let fakeHead = new ListNode(0);
    let current = fakeHead
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next
        } else {
            current.next = l2;
            l2 = l2.next
        }
    }
    if (l1) {
        current.next = l1;
    }
    if (l2) {
        current.next = l2;
    }
}
// 使用数组转链表函数 再合并两个有序链表