###移动端踩坑之旅-ios下fixed、软键盘相关问题总结

### [移动端踩坑之旅-ios下fixed、软键盘相关问题总结](https://juejin.im/post/59e725865188257e0c3246bf)

```javascript
// 解决键盘弹出后挡表单的问题
		window.addEventListener('resize', function() {
			if(
				document.activeElement.tagName === 'INPUT' ||
				document.activeElement.tagName === 'TEXTAREA'
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
