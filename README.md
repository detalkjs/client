# Detalk Static

> ⚡ The static files of Detalk(a simple comment plugin).

> ⚡ 您部署 Detalk 的最快方式。

## 如何使用

在浏览器中，通常，您需要引入我们提供的 JavaScript 文件。它会暴露 `window.detalk` 接口。

```html
<script src="https://cdn.jsdelivr.net/npm/@detalk/static@latest/dist/detalk.js"></script>
<!-- 我们推荐您将 @latest 替换为所需的版本号 -->
```

然后，您需要使用下方代码初始化：

```js
detalk.init({
    // 挂载点 (CSS 选择器)
    el: "#app", // <div id="app"></div>
    // 后端地址
    url: "https://detalk.deta.dev/",
    // 当前页面的路径
    path: window.location.href,
});
```

> 通常，一个页面只能挂载一个 Detalk。否则部分组件可能会出现错误。

