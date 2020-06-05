# demo

> A Vue.js Demo project

## 手动添加的依赖
- vux、vux-loader：使用vux组件库
- vuex：状态管理-store
- less、less-loader：配合使用vux的less样式

## 三方库注意事项
### VUX 最新为2.9.4
2020-6-4

+ VUX 必须配合 vux-loader 使用
+ less@3.x 有严重的兼容问题，请暂时使用 less@^2.7.3。
+ 暂未适配 vue-cli@3.x，请知悉。
+ vux支持less-loader最大版本为5.0.0，高版本会报错：loaderContext.getResolve is not a function

