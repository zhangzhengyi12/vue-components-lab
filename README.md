# Lab

这是一个我的基本组件实验室，想手动实现类似于ElementUi里面的部分基本组件，了解各种组件的通信,函数式组件的用法，作用域插槽等内容。

## radio 组件

主要用到了组件树查找 父子组件通信 model动态绑定
```html
<radio-group v-model="radioTest">
      <radio-item label="aaa"/>
      <radio-item label="bbb"/>
      <radio-item label="ccc" disabled/>
</radio-group>
```

## message 组件

手动render函数 自定义挂载方法封装,可以接受类型，延迟，以及直接插入VNode等，模仿了ElementUi

```js
 methods: {
    showMessageS() {
      this.$message({
        type: "success",
        showClose: true,
        content: "cooojflkasdjfklads?"
      });
    },
    showMessageE() {
      let h = this.$createElement;
      this.$message({
        type: "error",
        showClose: true,
        content: h("i", "hahahahahh")
      });
    }
  }
```
