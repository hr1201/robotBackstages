# RobotBackstages

## 演示链接：
[https://backages.rarrot.ren](https://backstages.rarrot.ren/)

优化建议：
1. 将`vue-amazing-ui`给替换掉，由于当时`element-plus`的国际化配置失败，所以直接使用了`vue-amazing-ui`的日历，但是占用内存相当大(262.04kb)，所以可以用回`element-plus`的日历组件，或者自己实现一个。(首要)
2. 字体的样式`ZCOOLKuaiLe-Regular`直接下载下来了，但是内存过大，所以可以替换为cdn形式。
3. 可以通过将vite.config.ts中的`visualizer.open`设置为`true`来查看内存占用。
4. 可以使用pwa离线缓存技术：
- 可以添加到主屏幕，利用manifest实现
- 可以实现离线缓存，利用service worker实现
- 可以发送通知，利用service worker实现
