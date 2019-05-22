### [hexo next主题深度优化](https://mmmmmm.me/archives/)
### [简洁轻便的博客平台: Hexo详解](https://blog.csdn.net/kingice1014/article/details/52924523)
### [Hexo博客主题推荐](https://www.jianshu.com/p/bcdbe7347c8d)
### [hexo的Next创建tags](https://blog.csdn.net/lcyaiym/article/details/76762105?locationNum=5&fps=1)
### [2018最新版Hexo博客Next主题6.0配置优化](https://blog.csdn.net/qq_32454537/article/details/79482896)
### [Hexo-NexT配置超炫网页效果](https://www.jianshu.com/p/9f0e90cc32c2)
### [梦魇小栈](https://github.com/ihoey/blog)
## [chunge16.github.io](https://github.com/chunge16/chunge16.github.io)
### [使用Hexo+Github一步步搭建属于自己的博客（基础）](https://www.cnblogs.com/fengxiongZz/p/7707219.html)
### [使用Hexo+Github一步步搭建属于自己的博客（进阶）](https://www.cnblogs.com/fengxiongZz/p/7707568.html)
### [手把手教你用Hexo+Github 搭建属于自己的博客](https://blog.csdn.net/gdutxiaoxu/article/details/53576018)
### [手把手教你用Hexo+Github 搭建属于自己的博客](https://blog.csdn.net/gdutxiaoxu/article/details/53576018)
### [2018最新版hexo+Github搭建个人博客教程（2018-1-22 更新）](https://blog.csdn.net/qq_32454537/article/details/79482908)
## [用Hexo + github搭建自己的博客 --- 再也不用羡慕别人了！](https://blog.csdn.net/Hoshea_chx/article/details/78826689)
## [Hexo个人免费博客(一) 从零到发布Github](https://blog.csdn.net/linshuhe1/article/details/52415449)
## [Hexo 最常用的几个命令](https://blog.ihoey.com/posts/Hexo/2015-08-28-hello-world.html)
### [Hexo NexT主题添加点击爱心效果](https://asdfv1929.github.io/2018/01/26/click-love/)
### [Hexo-NexT配置超炫网页效果](https://www.jianshu.com/p/9f0e90cc32c2)
> 配置Deployment
### [Hexo 最常用的几个命令](https://blog.csdn.net/dxxzst/article/details/76135935)
> 同样在_config.yml文件中，找到Deployment，然后按照如下修改：

### [如何使用Github+Hexo快速搭建个人博客](https://juejin.im/post/5c4dac03f265da613c0a2811)
```
deploy:
  type: git
  repo: git@github.com:yourname/yourname.github.io.git
  branch: master
```
> 比如我的仓库的地址是git@github.com:gdutxiaoxu/gdutxiaoxu.github.io.git，所以配置如下
```
deploy:
  type: git
  repo: git@github.com:gdutxiaoxu/gdutxiaoxu.github.io.git
  branch: master
```
> 写博客、发布文章
> 新建一篇博客，执行下面的命令：
```
hexo new post "article title"
```
新建一个页面，命名为tags。命令如下：
```
hexo new page "tags"
```
> 这时候在我的 电脑的目录下 F:\hexo\source\ _posts 将会看到  article title.md 文件

> 用MarDown编辑器打开就可以编辑文章了。文章编辑好之后，运行生成、部署命令：
```
hexo g   // 生成
hexo s   // 本地启动
hexo d   // 部署发布
hexo clean    //清除缓存文件 db.json 和已生成的静态文件 public

当然你也可以执行下面的命令，相当于上面两条命令的效果

hexo d -g #在部署前先生成

注意需要提前安装一个扩展：
npm install hexo-deployer-git --save
 ```

```
# 本地预览
hexo s

# 删除旧的静态文件，即 public 文件
hexo clean

# 生成新的静态文件，即 public 文件（或者 hexo g）
hexo generate

# 部署到远程站点，即 GitHub（或者 hexo d）
hexo deploye

# 当然你也可以执行下面的组合命令
hexo d -g
```
