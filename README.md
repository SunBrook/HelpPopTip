# HelpPopTip
帮助气泡提示框，目前为简易版本雏形，后期扩展定制通用版本



## 代码调用

1. 引用相应 css 和js
2. 问号提示位置 `#help_wrapper`
3. 补充提示文本数组，初始化消息提示框



```html
<link rel="stylesheet" href="css/helpPopTip.css">
<script src="js/helpPopTip.js"></script>

<div id="help_wrapper"></div>

<script type="text/javascript">
    //提示内容列表
    var tip_array = [
        "提示1：<strong>善良</strong>很重要",
        "提示2：接下来，<strong>坚持</strong>很重要",
        "提示3：<strong>Long may the sun shine</strong>"
    ];

    //初始化消息提示框
    initHelpPopTip(tip_array);
</script>
```



## 功能限制

- 位置限制，提示位置只能待在右上角，仅向左展开

- 颜色限制，默认为蓝色

- 个数限制，一个页面只能有一个

  
## 后期规划

1. 配置化
   1. 显示位置
   2. 显示方向
   3. 弹框宽高颜色
   4. 提示消息文本样式
2. 解除个数限制，单个页面可以创建多个提示文本
3. 创建和销毁提示框

  