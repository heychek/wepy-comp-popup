## Popup 组件的使用

1.  安装

```
npm install my-wpy-pop --save
```

2.  引用

```
import Popup from 'my-wpy-pop';
```

3.  声明组件

```
// 声明组件，分配组件id
components = {
    Popup: Popup
}
```

4.  页面使用
    > 将弹窗中的内容放到`<Popup></Popup>`标签中即可,Popup 需要传入 isShow，当 isShow 为 false 时不显示，反之显示

```
<Popup :isShow.sync="isShow">
    <view style="background-color: #fff; width: 500rpx; height: 500rpx;">
        test content
    </view>
</Popup>
```

5.  js 获取点击事件

> 如需获取用户点击蒙层部分事件（有时需要支持用户点击蒙层部分弹窗消失）。则需要在调用时添加`@hide.user="方法名"`，然后在 js 的 method 方法中定义该方法即可

```
<Popup :isShow.sync="isShow" @hide.user="hidePop">
    <view style="background-color: #fff; width: 500rpx; height: 500rpx;">
        test content
    </view>
</Popup>
// js
method = {
    hidePop() {
        // 用户点击蒙层，此方法将被触发
    }
}
```

6.  完整使用示例如下

```
<template>
    <view>
        <Popup :isShow.sync="isShow" @hide.user="hidePop">
            <view style="background-color: #fff; width: 500rpx; height: 500rpx;">
                test content
            </view>
        </Popup>
    </view>
</template>

<script>
    import wepy from 'wepy';
    // js 中引入组件文件
    import Popup from 'my-wpy-pop';

    export default class Index extends wepy.component {
        // 声明组件，分配组件id
        components = {
            Popup: Popup
        }

        method = {
            hidePop() {
                // 用户点击蒙层，此方法将被触发
            }
        }
    }
</script>
```
