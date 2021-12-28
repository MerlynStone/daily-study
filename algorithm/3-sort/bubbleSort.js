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