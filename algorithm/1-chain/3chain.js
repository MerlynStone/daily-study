// 通过两个数据记录相应坐标索引值来实现链表的效果
var data=new Array(10);
var next=new Array(10);
function add(index,point,val) {
    next[index]=point;
    data[point]=val
}
let head=3;
data[3]=0;
add(3,5,1)
add(5,2,2)
add(2,7,3)
add(7,9,100)
// 链表上的节点值依次为0—>1->2->3->100
console.log(data)
console.log(next)
let p=head;
while(p!=undefined){
  console.log(data[p])
    p=next[p]
}