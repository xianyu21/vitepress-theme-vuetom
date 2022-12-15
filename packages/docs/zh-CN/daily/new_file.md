### npm包管理工具 npm-check

> npm-check

会检查项目中没有使用过的包、有更新的包、推荐安装的包

>>  npm-check -u 

会根据检测出需要更新的包出现一个交互界面，我们可以根据需要更新dependencies，会同步更新package.json

### vue的.env文件中如何添加新变量
```
定义其他变量必须以 VUE_APP_ 开头
且改完必须重新 npm run dev

```

### 插件

![image](https://img-cdn-aliyun.dcloud.net.cn/stream/plugin_screens/zui-calendar_0.jpg?image_process=quality,q_70&v=1658286529)

[日历展示](https://ext.dcloud.net.cn/plugin?id=8835)




[vue中使用mqtt详细教程（兼容ie）](https://blog.csdn.net/qq_39370934/article/details/107378126)
[Vue中对watch的理解（尤其是immediate和deep属性）](https://blog.csdn.net/qq_40323256/article/details/101907326)
```
this.$u.api.getDictList().then(res => {
	for (var name in res.data) {
		this.tabbar.push(res.data[name])
	}
	for (var name in res.data) {
		this.menuName.push(name)
	}
})
```
			
			
			onHide() {
				this.ifOnShow = true
			},
			onShow() {
				if (this.ifOnShow) {
					this.getCarList(true)
				}
			},
			
			const app = getApp().globalData;
			
			
			
			JSON.parse
			
			
			
			['history'].includes(type)
			
			JSON.parse(JSON.stringify(obj));
			
			<view class="main" @click.stop="$emit('click',item.id)">
			
			
			searchFunc(){
			  let pages = getCurrentPages()
			  let page = pages[pages.length - 2]
			  page.$vm.searchText = this.search.text
			  page.$vm.refresh()
			  this.router.back()
			}
			
// 获取折扣 -- 使用对象配置/策略模式
const getDiscount = (userKey) => {
    // 我们可以根据用户类型来生成我们的折扣对象
    let discounts = {
        '普通会员': 0.9,
        '年费会员': 0.85,
        '超级会员': 0.8,
        'default': 1
    }
    return discounts[userKey] || discounts['default']
}
console.log(getDiscount('普通会员')) // 0.9

// 获取折扣 -- 使用对象配置/策略模式
const getDiscount = (userKey) => {
    // 我们可以根据用户类型来生成我们的折扣对象
    let discounts = new Map([
        ['普通会员', 0.9],
        ['年费会员', 0.85],
        ['超级会员', 0.8],
        ['default', 1]
    ])
    return discounts.get(userKey) || discounts.get('default')
}
console.log(getDiscount('普通会员')) // 0.9

let strategies = new Map([
    ['A', 4],
    ['B', 3],
    ['C', 2]
])
const calculateBonus = (performanceLevel, salary) => { 
    return strategies.get(performanceLevel) * salary
}
calculateBonus( 'B', 20000 ) // 输出：60000
// 以绩效_部门的方式拼接键值存入
let strategies = new Map([
    ['A_D', 4 * 1.2],
    ['B_D', 3 * 1.2],
    ['C_D', 2 * 1.2],
    ['A_F', 4 * 0.9],
    ['B_F', 3 * 0.9],
    ['C_F', 2 * 0.9]
])
const calculateBonus = (performanceLevel, salary, department) => { 
    return strategies.get(`${performanceLevel}_${department}`) * salary
}
calculateBonus( 'B', 20000, 'D' ) // 输出：72000
