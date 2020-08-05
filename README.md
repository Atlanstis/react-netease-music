## 启动及使用

#### 安装依赖

`yarn`

#### 启动

`yarn start`

## 配置

### vscode 配置 import @ 路径提示及代码智能提示

> 1、安装插件：Path Intellisense
> 2、配置：
>
> ```
>     "path-intellisense.mappings": {
>         "@": "${workspaceRoot}/src"
>     }
> ```

### 依赖说明

- antd: React UI 框架（[Ant Design 官方文档](https://ant-design.gitee.io/index-cn)）
- axios: 易用、简洁且高效的 http 库
- babel-plugin-import: 对 antd 等库进行按需加载
- less: CSS 预处理语言
- less-loader: webpack 处理 less
- react,react-dom,react-scripts: react 基础库（[React 中文文档](https://zh-hans.reactjs.org/)）
- react-router-dom: React 路由
- react-transition-group: react 动画库
- immutable: 数据结构库 [相关 API](https://juejin.im/post/6844903587458334733)
- redux: JavaScript 状态容器（[Redux 中文文档](https://www.redux.org.cn/)）
- redux-immutable: redux 与 immutable 中间件
- redux-thunk: 拓展 redux 异步处理功能
- react-redux: react 与 react 中间件
- styled-components: css in js（[styled-components 官方文档](https://styled-components.com/docs)）
- customize-cra, react-app-rewired: 覆盖项目默认配置
- resize-observer-polyfill: ResizeObserver 支持
- classnames: 动态绑定 className
- good-storage: 操作 sessionStorage 和 localStorage 的储存库[GitHub 链接](https://github.com/ustbhuangyi/storage#readme)
