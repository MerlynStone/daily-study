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
// 交换
function swap(array, i, j) {
    let tem = array[i];
    array[i] = array[j]
    array[j] = tem
}