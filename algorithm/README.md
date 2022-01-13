# 算法日常--倒序方式
# 第三套
###  反转链表
###  二叉树反转 2022年1月14日00:23:37
 1.使用数组转二叉树函数  
 2.反转二叉树
 3.前序遍历二叉树转数组
 ```js
 function invertTree(node){
     if(!node)return;
     let tem=node.left;
     node.left=node.right;
     node.right=temp;
     invertTree(node.left)     //递归反转
     invertTree(node.right)
     return node;
 }
 ```  
# 第二套
### 有效的括号 2022年1月12日
```js
let bracketsStr = '{}{}([])'
let res = true
const stack = [];
const map = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']']
])
for (const str of bracketsStr) {
    if (map.has(str)) {
        if (!stack.length || (stack[stack.length - 1] !== map.get(str))) {
            res = false
            break
        }
        stack.pop()
    } else {
        stack.push(str)
    }
}
console.log(stack.length === 0 || res)

```
### 计数排序 2022年1月12日
```js
let arr = [1, 2, 7, 7, 8, 3, 5, 9, 4]
let maxValue = 0;
for (let index = 0; index < arr.length; index++) {
    if (maxValue < arr[index]) {
        maxValue = arr[index]
    }
}
let sortArray = countingSort(arr, maxValue)
console.log(sortArray)
function countingSort(arr, maxValue) {
    var bucket = new Array(arr.length + 1)
    for (let index = 0; index < arr.length; index++) {
        var num = arr[index];
        if (bucket[num] == null) {
            bucket[num] = 1
        } else {
            bucket[num] += 1
        }
    }
    var arrCurrIndex = 0;
    for (let index = 0; index < bucket.length; index++) {
        while (bucket[index] > 0) {
            var num = index;
            arr[arrCurrIndex++] = num;
            bucket[index] -= 1;
        }
    }
    return arr
}
```
### 回文数
```js
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

console.log(isPalindrome(121))

```
### 合并两个增序链表
```js
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
```
### 二叉树的前序遍历
```js
function preOrderTraverse(node){
    if(!node) return [];
    let result = [];
    result.push(node.v)
    result.push(...preOrderTraverse(node.left)    result.push(...preOrde
    rTraverse(node.left)))
    result.push(...preOrderTraverse(node.right))
    return result;
}
```
### 数组转二叉树
```js
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
  root.left   root.left = sortedArrayToBST(nums.slice(0
  , mid)); // 递归生成树的左子树= sortedArrayToBST(nums.slice(0, mid)); // 递归生成树的左子树
  root.right = sortedArrayToBST(nums.slice(mid + 1)); // 递归生成树的右子树
  return root; // 递归结束后返回树
}

var ss = sortedArrayToBST([-10, -3, 0, 5, 9]);
console.log(ss); // 打印结果
```
# 第一套
### 2021.10.29几种排序算法  
```js
// 希尔排序
let arr = [1, 1, 35, 5, 6, 5, 56, 35]
console.log(shellSort(arr))
function shellSort(arr) {
    let len = arr.length
    let gap = Math.floor(len / 2)
    for (gap; gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < len; i++) {
            let tem = arr[i]
            // 未通过交换的方式、通过移动的方式
            for (var j = i - gap; j >= 0 && arr[j] > tem; j -= gap) {
                arr[j + gap] = arr[i]
            }
            arr[j + gap] = tem

        }
    }
    return arr
}
```
```js
// 选择排序
let arr = [5, 2, 1, 2, 1, 23]

function selectionSort(array) {
    let minIndex, tem;
    for (let i = 0; i < array.length - 1; i++) {
        minIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }
        // 找到比开始的小 并进行交互操作
        // 位运算符交换  不能进行位交换

        // array[minIndex]^=array[i]
        // array[i]^=array[minIndex]
        // array[minIndex]^=array[i]
        // 当在同一所引值交换时发生错误
        // let  arr2=[2,2,3,4,6,7];
        // arr2[3]^=arr2[3]
        // arr2[3]^=arr2[3]
        // arr2[3]^=arr2[3]
        // 会出现arr3[3]==0的情况！！！！
        // TODO 了解^运算的原理 
        // 临时数进行交换
        tem = array[i]
        array[i] = array[minIndex]
        array[minIndex] = tem
    }
    return array
}
```
```js
// 快速排序
let arr = [1, 35, 5, 6, 5, 56, 35]
// console.log(quickSort(arr))
quickSort(arr)
console.log(quickSort(arr))
// left /
/ left 左边界 right 右边界 左边界 right 右边界 
function quickSort(array, left, right) {
    var len = array.length
    var partitionIndex // 基准
    var left = left ? left : 0
    var right = right ? right : len - 1
    // 结束条件
    if (left < right) {
        partitionIndex = partition(array, left, right)
        quickSort(array, left, partitionIndex - 1)
        quickSort(array, partitionIndex + 1, right)
    }
    return array
}
// 
function partition(array, left, right) {
    let pivot = left
    let index = pivot + 1
    for (let i = index; i <= right; i++) {//存在相等的值的话
        if (array[i] <= array[pivot]) {
            swap(array, i, index)
            index++
        }

    }
    swap(array, pivot, index - 1)
    return index - 1
}
// 交换
function swap(array, i, j) {
    let tem = array[i];
    array[i] = array[j]
    array[j] = tem
}
```
```js
// 插入排序
function insertionSort(array) {
    const len = array.length
    let preIndex, current
    for (let index = 0; index < len; index++) {
        preIndex = index - 1
        current = array[index]
        while (preIndex >= 0 && array[preIndex] > current) {
            array[preIndex + 1] = array[preIndex]
            preIndex--
        }
        array[preIndex + 1] = current

    }
    return array
}
```
```js
// 冒泡排序
let arr = [1, 1, 35, 5, 6, 5, 56, 35]
console.log(bubbleSort(arr))
function bubbleSort(array) {
    let len = array.length
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (array[i] > array[j]) {
                swap(array, i, j)
            }

        }

    }
    return array
}
// 交换
function swap(array, i, j) {
    let tem = array[i];
    array[i] = array[j]
    array[j] = tem
}
```  
### 快乐数
```js
// 通过哈希表达方式解题
var getNext = function (n) {
    n = String(n)
    let sum = 0;
    for (const num of n) {
        sum += Math.pow(+num, 2)
    }
    return sum
}
var isHappy = function (n) {
    const map = {};
    while (n !== 1) {
        map[n] = true;
        n = getNext(n)
        if (map[n]) {
            return false
        }
    }
    return true
}
```  
### 链表的实现方法
1
```js
//  构造函数
function ListNode(val) {
    this.val = val;
    this.next = null;
}
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
```
2
```js
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
```
3
```js
var data = new Array(10);
var next = new Array(10);
function add(index, point, val) {
  next[index] = point;
  data[point] = val
}
let head = 3;
data[3] = 0;
add(3, 5, 1)
add(5, 2, 2)
add(2, 7, 3)
add(7, 9, 100)
// 链表上的节点值依次为0—>1->2->3->100
```