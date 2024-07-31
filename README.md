Allotment: 实现编辑预览布局拖动改变大小
@monaco-editor/reac：实现编辑器
@typescript/ata：实现代码改变时自动下载 dts 类型包

Context 封装全局数据
点击 tab 的时候切换 selectedFileName，从而切换编辑器的内容

@babel/standalone 做的 tsx 代码的编译，编译过程中需要对 .tsx、.css、.json 等模块的 import 做处理，变成 blob url 的方式
tsx 模块直接用 babel 编译，css 模块包一层代码加到 head 的 style 标签里，json 包一层代码直接 export 即可
react、react-dom/client 这种，用浏览器的 import maps 来引入
iframe.html 的内容替换 import maps 和 src 部分后，同样用 blob url 设置为 iframe 的 src 就可以了

文件增删改功能

监听 iframe 错误信息
css 变量实现主题切换

链接分享原理就是把 files 信息 JSON.stringify 之后保存到 location.hash。
代码下载则是基于 jszip 和 file saver 包实现

用 Performance 分析了页面的 Event Loop，发现有 long task，性能优化的目标就是消除 long task
Web Worker 把 babel 编译的逻辑放到了 worker 线程跑，通过 message 事件和 postMessage 和主线程通信
