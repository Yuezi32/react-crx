# react-crx

基于React+Antd开发Chrome Extension的项目Demo

本项目架构实现了以下功能：

- 集成Stylus
- 集成React+Ant Design
- 集成mock.js
- 集成react-router-dom
- 解决Ant Design全局样式污染问题
- 实现Ant Design按需加载
- 将popup、content、background目录互相独立，便于团队协作开发维护
- 按照Chrome Extension最终生成目录要求配置webpack
- 封装axios，可以将API请求委托给background script执行，从而实现跨域请求
- 设置.env.development环境变量，便于在开发环境下禁止委托background script发起请求
- 实现了popup、content、background简单Demo

## 教程

📚📚本项目代码有详细的讲解教程。精心编排，超值干货！手把手带你体验React+Antd开发Chrome插件完整流程📚📚

😃😃请关注作者**微信公众号「卧梅又闻花」**，阅读文章《React+Antd开发Chrome插件教程》😃😃

❤️❤️文章教程是作者花费大量时间精心编排准备的，您的支持是作者写作的最大动力源泉❤️❤️

## 安装

git clone至本地，执行npm install或cnpm install安装依赖。

## 开发调试

执行：
```
yarn start
```

即可在开发环境预览调试popup页面

如果需要在开发环境预览调试content script，

修改src/popup/index.js

引入content script
```
    import React, { Fragment } from 'react'
    import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
    import Login from './pages/login'
    import Home from './pages/home'
    import './popup.styl'
+   import '@/content'
```

## build项目

执行：
```
yarn build
```
即可生成最终Chrome Extension文件。

## 精简最终build文件

build生成的最终文件，对于插件来说，有很多是不必要的。

可删除以下文件：
```
    ├─ /images
    ├─ /static
    |  ├─ /css
    |  |  ├─ content.css
-   |  |  ├─ content.css.map
    |  |  ├─ main.css
-   |  |  └─ main.css.map
    |  ├─ /js
    |  |  ├─ background.js
-   |  |  ├─ background.js.LICENSE.txt
-   |  |  ├─ background.js.map
    |  |  ├─ content.js
-   |  |  ├─ content.js.LICENSE.txt
-   |  |  ├─ content.js.map
    |  |  ├─ main.js
-   |  |  ├─ main.js.LICENSE.txt
-   |  |  └─ main.js.map
    |  ├─ /media
-   ├─ asset-manifest.json
    ├─ favicon.ico
    ├─ index.html
    ├─ insert.js
    ├─ manifest.json
-   ├─ precache-manifest.xxxxxxx.js
-   ├─ service-worker.js
```
