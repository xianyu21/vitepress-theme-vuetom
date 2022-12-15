# JavaScript-脚本
一种具有函数优先的轻量级，解释型或即时编译型的编程语言
## toISOString() 
* toISOString() 方法可以使用ISO标准将 Date 对象转换为字符串。
```
new Date().toISOString();
输出: 2022-08-15T03:13:13.909Z
```
## ! 和 !!
！ 是逻辑与运算，并且可以与任何变量进行逻辑与将其转化为布尔值
!! 则是逻辑与的取反运算，尤其后者在判断类型时代码简洁高效，省去了多次判断null、undefined和空字符串的冗余代码
```
(!(~+[])+{})[--[~+""][+[]]*[~+[]] + ~~!+[]]+({}+[])[[~!+[]]*~+[]]

```
## Array.isArray()
Array.isArray() 是 ES6 新增的方法，专门用于数组类型判断，原理同上。
```
let arr = []
console.log(Array.isArray(arr)) // true
```
修改原型链不会对它造成任何影响。
```
let arr = []
arr.__proto__ = function() {}
console.log(Array.isArray(arr)) // true
```