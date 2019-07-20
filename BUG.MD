### [H5拍照上传填坑汇总](https://juejin.im/post/5bd705abf265da0a8d36dbdc)
### [ios 最新系统bug与解决——微信公众号中弹出键盘再收起时，原虚拟键盘位点击事件无效](https://juejin.im/post/5c07442f51882528c4469769)

### [一文彻底解决iOS中键盘回落后留白问题](https://juejin.im/post/5cff9601f265da1bc5525aae)


```js
window.addEventListener('resize', function() {
    if(
     document.activeElement.tagName === 'INPUT' ||
     document.activeElement.tagName === 'TEXTAREA'||
     document.activeElement.getAttribute('contenteditable')=='true'
    ) {
     window.setTimeout(function() {
      if('scrollIntoView' in document.activeElement) {
       document.activeElement.scrollIntoView();
      } else {
       document.activeElement.scrollIntoViewIfNeeded();
      }
     }, 0);
    }
   });
```
### [修复苹果iOS 原生键盘遮挡input框](https://juejin.im/post/5b0401b2f265da0b71569ca0#comment)
