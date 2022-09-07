# Function-函数
针对平时常用的函数方法进行一个收集和整理
## 判断对象中是否存在某个属性
```js
@ param {Object} obj 对象
@ param {String} key 属性名
function hasProperty(obj,key){
	return key in obj;
}
```