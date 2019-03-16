# e-Book-Store

An app to practice front-end and back-end

---

## Process 1

**通过原生 html,css 构建页面**

### 实现

1. 搭建简单网页结构
2. 原生 html,css 实现
3. index 即主页，brief 即浏览页，info 即详情页

### 切换

分别在三个 html 文件里更改：

```html
<link rel="stylesheet" type="text/css" href="css/style1.css" />
```

```html
<link rel="stylesheet" type="text/css" href="css/style2.css" />
```

## Process 2

**通过 vue+iview 构建页面**

> A Vue.js project

### Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

### 路线图

1. 注册页面。边界条件：同时输入了用户名和密码才可以进入。
2. 主页。注册成功即进入主页。(再刷新一下，因为用 push 跳转过去后不能向下拖动，所以用了 replace 然后再 relocation，不知有什么好办法)
3. 图书浏览页。 目前点击纪实文学可以进入。

### 脚本要求

1. 注册成功会弹出对话框，点击确定即进入主页
2. 在主页和浏览页的标题点击后均会在黑、红间变化

### cnpm install 可能的依赖缺少

1. vue-router
2. iview
