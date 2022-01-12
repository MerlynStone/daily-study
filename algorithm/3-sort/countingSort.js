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