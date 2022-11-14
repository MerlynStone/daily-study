// 1.1两数之和
let arr = [2, 3, 4, 5, 6, 7, 8, 36, 9, 43]
var twoSum = function (nums, target) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        if (hash[target - nums[i]] != undefined) {
            return [hash[target - nums[i]], i]
        }
        hash[nums[i]] = i
    }
    return []
};
let start = new Date().getMilliseconds()
console.log(twoSum(arr, 52))
let end = new Date().getMilliseconds()
console.log(end - start)
// 2.2两数相加 给你两个 非空 的链表，值进行相加 返回新链表
var addTwoNumbers = function (l1, l2) {
    let u = 0, //定义变量两变量和是否大于10
        l3 = new ListNode(0),
        //定义变量存储链表数据 
        p1 = l1,
        p2 = l2,
        p3 = l3; //定义指针，确定当前链表节点数据 
    while (p1 || p2) {
        //求出当前节点上数据和；有且仅当当前节点包含有效数据，否则节点默认为0 
        let sum = ((p1 && p1.val) || 0) + ((p2 && p2.val) || 0) + u;
        //重制标记 
        u = 0; //求出当前节点数据，大于10做标记
        if (sum >= 10) { sum %= 10; u = 1; }
        p3.next = new ListNode(sum);
        //当前l1,l2指针节点数据有效时，指针位置后移 
        p1 && (p1 = p1.next); p2 && (p2 = p2.next); //l3指针节点后移，创建新节点数据 
        p3 = p3.next;
    }
    u && (p3.next = new ListNode(u)); //l3第一个节点默认为0，所以取第二个节点后数据
    return l3.next;
};

// 3无重复字符的最长子串 思路：滑动窗口+unordered_map记录
var lengthOfLongestSubstring = function (s) {
    // 哈希集合，记录每个字符是否出现过
    const occ = new Set();
    const n = s.length;

    // 右指针，初始值为-1，相当于我们在字符串的左边界的左侧，还没有开始移动
    let rk = -1,
        ans = 0;

    for (let i = 0; i < n; i++) {
        if (i != 0) {
            // 左指针向右移动一格，移除一个字符
            occ.delete(s.charAt(i - 1)); // 这一步真的很特别，怎么能想到的
        }
        while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
            // 不断的移动右指针
            occ.add(s.charAt(rk + 1));
            rk++;
        }

        ans = Math.max(ans, rk - i + 1); //这一步真的很牛逼
    }

    return ans;

};