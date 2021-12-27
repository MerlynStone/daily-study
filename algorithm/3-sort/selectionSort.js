// 选择排序
let arr=[5,2,1,2,1,23]

function selectionSort(array){
    let minIndex,tem;
    for (let i = 0; i < array.length-1; i++) {
        minIndex=i
        for (let j = i+1; j < array.length; j++) {
            if(array[j]<array[minIndex]){
                minIndex=j
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
        tem=array[i]
        array[i]=array[minIndex]
        array[minIndex]=tem
    }
    return array
}

console.log(selectionSort(arr))
