## 启动及使用

> `yarn` `yarn start`

## 参考

1. [Ant Design 官方文档](https://ant.design/index-cn)
2. [React 中文文档](https://zh-hans.reactjs.org/)

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
>
> 3、在项目 package.json 所在同级目录下创建文件 jsconfig.json：
>
> ```
> {
>     "compilerOptions": {
>         "target": "ES6",
>         "module": "commonjs",
>         "allowSyntheticDefaultImports": true,
>         "baseUrl": "./",
>         "paths": {
>           "@/*": ["src/*"]
>         }
>     },
>     "exclude": [
>         "node_modules"
>     ]
> }
> ```
