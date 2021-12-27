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
let arr = [1, 3, 6, 26, 365, 23]
console.log(insertionSort(arr))