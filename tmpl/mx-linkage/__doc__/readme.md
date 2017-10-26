## 联动选择组件

#### 使用

<a href="https://magix-components.github.io/magix-components/#!/mx-linkage/index" target="_blank">在线示例</a>

```html
<mx-linkage
    list="<%@list%>"
    splitter='-'
    headers="<%@headers%>"
    placeholder="请选择省市区"
    mx-change="showValue()" />
```

```js
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let me = this;
        me.updater.digest({
            headers: ['省份', '城市', '地区'],
            list: [{
                id: 1,
                text: '浙江省'
            }, {
                id: 2,
                text: '河南省'
            }, {
                id: 3,
                text: '杭州市',
                pId: 1
            }, {
                id: 4,
                text: '周口市',
                pId: 2
            }, {
                id: 5,
                text: '安徽省'
            }, {
                id: 6,
                text: '新疆维吾尔自治区'
            }, {
                id: 7,
                pId: 3,
                text: '余杭区'
            }, {
                id: 8,
                text: '湖州市',
                pId: 1
            }, {
                id: 9,
                text: '长吉县',
                pId: 8
            }]
        });
    },
    'showValue<change>'(e) {
        console.log(e);
    }
});
```

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| list    | 列表数组，对象数组，如[{id:1,text:'a'}] | array |  |
| textKey     | 渲染text时读取的key | string |  |
| valueKey     | 渲染value时读取的key | string |  |
| parentKey     | 数据关联时的父key | string |  |
| disabled     | 是否禁用 | boolean | false |
| selected     | 选中的值 | array | &nbsp; |

#### event
#### change 联动选项变化时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| selected | array | 选中的数据对象 |
