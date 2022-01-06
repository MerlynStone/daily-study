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
