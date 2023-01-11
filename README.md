# Detalk Client

> ⚡ The static files of Detalk(a simple comment plugin based on Deta).

> ⚡ 您部署 Detalk 的最快方式。

## 为什么是 Detalk？

- 快，开箱即用。它不需要你写繁琐的配置文件，也不需要你定义麻烦的环境变量。
- 轻，快速加载。前端打包文件仅 60kb, Gzip 压缩后仅 14kb! 同时，主要功能得以保留。
- 易，免费部署。Detalk 在 Deta 平台上可免费快速部署。
- 强，高自定义。Detalk 提供高自定义性，完整 API 支持，同时还具备脚本插件功能。

## 初始化

### 载入

**最推荐的方法：**

```html
<script src="https://cdn.jsdelivr.net/npm/@detalk/static@latest/dist/detalk.js"></script>
<!-- 我们推荐您将 @latest 替换为所需的版本号 -->
```

### 初始化

首先，在页面上需要有一个空白的挂载点。

```html
<div id="detalk"></div>
```

然后，您需要使用下方代码进行最简单的初始化：

```js
detalk.init({
    // 挂载点 (CSS 选择器)
    el: "#detalk", // <div id="detalk"></div>
    // 后端地址
    url: "https://detalk.deta.dev/",
    // 当前页面的路径 (为空默认获取)
    path: window.location.pathname,
});
```

更多信息，请参考：[「初始化 | Detalk.js」](https://detalk.js.org/client/start.html).

## 更多文档

如果需要更多支持文档，或是后端部署方法，请[查看文档](https://detalk.js.org/)。

## 加入讨论群

现在 Detalk 正在开发中，还会增加新功能。

欢迎加入 QQ 讨论群测试讨论，群号：[914564265](https://detalk.js.org/start.html#%E5%8A%A0%E5%85%A5%E8%AE%A8%E8%AE%BA%E7%BE%A4)

## 反馈问题

如果在使用中出现任何问题，请在 GitHub 发起 Issue。

前端问题请前往 [`detalkjs/client`](https://github.com/detalkjs/client)，后端问题请前往 [`detalkjs/server`](https://github.com/detalkjs/client) 仓库。

同时，你也可以[参与 GitHub 讨论](https://github.com/orgs/detalkjs/discussions)。
