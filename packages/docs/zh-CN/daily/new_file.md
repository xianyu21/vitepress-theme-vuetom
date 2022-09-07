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
			

