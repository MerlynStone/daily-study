// 判断是否是回文数
function isPalindrome(x) {
    // 1.字符串反转方法
    // if (x < 0 || x % 10 == 0 && x != 0) {
    //     return false
    // }
    // let str = x.toString().split('').reverse().join('')
    // return x === parseInt(str)
    // 2.数字形式
    if (x < 0 || x % 10 == 0 && x != 0) {
        return false
    }
    let revertedNumber = 0;
    while (x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + x % 10;
        x = Math.floor(x / 10)
    }
    return x === revertedNumber || x === Math.floor(revertedNumber / 10)
}

// console.log(isPalindrome(121))
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
// console.log(JSON.stringify(creatChain([1, 2, 3, 4])))
function TreeNode(val) {
    this.value = val;
}

var sortedArrayToBST = function (nums) {
    if (nums.length === 0) {
        return null;
    }
    if (nums.length === 1) {
        return new TreeNode(nums[0]);
    }
    var mid = parseInt(nums.length / 2); // 计算中间位置,数组下标从0开始，所以parseInt取整
    var root = new TreeNode(nums[mid]);  // 中间位置的元素作为树根
    root.left = sortedArrayToBST(nums.slice(0, mid)); // 递归生成树的左子树= sortedArrayToBST(nums.slice(0, mid)); // 递归生成树的左子树
    root.right = sortedArrayToBST(nums.slice(mid + 1)); // 递归生成树的右子树
    return root; // 递归结束后返回树
}

var ss = sortedArrayToBST([-10, -3, 0, 5, 9]);
console.log(JSON.stringify(ss)); // 打印结果