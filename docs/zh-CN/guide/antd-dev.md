# 开发 `ant-design` 组件

## 一、开发环境
1. 进入组件项目：`packages/ant-design`
2. 安装依赖：`pnpm install`
3. 执行命令：`pnpm dev`

dev端口: 3933

## 二、组件开发流程

- 组件目录位于工程：`packages/ant-design/components`。可参照已有组件进行新组件开发。


1. 单个组件中，提供 `index` 组件入口，并提供 `install` 方法,具体如下代码。
  ```js
  import Button from './button'

  export const ZoneButton = Button

  export default ZoneButton

  export * from './'
  ```

2. 在当前项目 `components` 目录的入口 `index` 中导出组件。
  ```js
  export * from './button'
  export * from './table'
  export * from './AutoComplete'
  // ...
  ```

3. 根目录 `index.js` 中，将所有文件全部导出
```js
  export * from './components'
```

## 三、demo组件注意事项
开发调试的时候，都是通过使用 demo组件 来开发调试组件，在当前项目启动的 dev server，访问的是 demo组件 而非组件库中的组件。
