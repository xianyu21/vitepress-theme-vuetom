# Pinia
Pinia（发音为 /piːnjʌ/，类似于英语中的“peenya”）是最接近有效包名 piña（西班牙语中的_pineapple_）的词。 菠萝实际上是一组单独的花朵，它们结合在一起形成多个水果。 与 Store 类似，每一家都是独立诞生的，但最终都是相互联系的。 它也是一种美味的热带水果，原产于南美洲。
## 多条数据修改-$patch
```
对象
store.$patch({
	count:store.count+2,
	msg:store.msg === 'hello world'?'疫情':'hello world'
})
函数
store.$patch((state)=>{
	state.count = state.count+2
	state.msg = state.msg === 'hello world'?'疫情':'hello world'
})
```
## getter 调用是对象 
页面使用
store.xx
## Actions 调用是 函数
页面使用
store.xx()

*可以直接调用 store 的任何方法
*action之间的相互调用，直接用 this 访问即可。
*store之间的相互调用