// 快速排序
let arr = [1, 35, 5, 6, 5, 56, 35]
// console.log(quickSort(arr))
quickSort(arr)
console.log(quickSort(arr))
// left 左边界 right 右边界 
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