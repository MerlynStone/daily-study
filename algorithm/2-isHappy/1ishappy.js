// 通过哈希表达方式解题
var getNext = function (n) {
    n = String(n)
    let sum =0;
    for (const num of n) {
        sum +=Math.pow(+num,2)
    }
    return sum
}
var isHappy =function (n) {
    const map={};
    while (n !==1) {
        map[n]=true;
        n = getNext(n)
        if(map[n]){
            return false
        }
    }
    return true
}
console.log(isHappy(2))
var total=0;
// 计算10万以内的所有快乐说之和
let stime=new Date()
for (let index = 0; index <= 100000; index++) {
    if(isHappy(index)){
        total+=index
    }
    
}
let etime=new Date()
console.log(total)
console.log(etime-stime)