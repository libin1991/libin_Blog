```
setTimeout(function () {
      console.log(1);
    }, 0);
    
    Promise.resolve().then(function () {     //必须通过then才能执行
      console.log(2);
    })
    
    new Promise(function (resolve) {
      console.log(3);
    });
    
    console.log(4);
    

 
3421
```
### [JS 总结之事件循环](https://juejin.im/post/5c244b33e51d45593b4bbd3d)
### [浏览器事件环和Node事件环不得不说的故事！](https://juejin.im/post/5b5f365e6fb9a04fa8673f97)
### [hey，你的Event Loop](https://juejin.im/post/5b63b4cb6fb9a04fb4017f5a)
### [麻烦把JS的事件环给我安排一下！！！](https://juejin.im/post/5b69b07d6fb9a04f86065596)
### [JavaScript运行机制：event-loop](https://juejin.im/post/5b6aea43f265da0f894b956b)
### [一次弄懂Event Loop（彻底解决此类面试问题）](https://juejin.im/post/5c3d8956e51d4511dc72c200)
### [浏览器与Node的事件循环(Event Loop)有何区别?](https://juejin.im/post/5c337ae06fb9a049bc4cd218)
### [JS 事件机制 Event Loop](https://juejin.im/post/5c48380f5188252533160295)
