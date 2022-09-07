# uView2
uView UI，是全面兼容nvue的uni-app生态框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水
## u-picker
### 在头条小程序下确定和取消按钮丢失
不确定什么问题
解决方法: 添加对应点击事件即可

## u-datetime-picker
### 在头条小程序下 报错
![image](/public/daily/toJson.png)

解决办法: 在methods下添加
```
toJSON(){}
```