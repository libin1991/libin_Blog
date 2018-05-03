npm insatll webpack    //本地安装，安装后会生成一个node_modules文件夹，并且将package.json的依赖安装到改文件夹下
npm insatll webpack -g    //全局安装，可当CMD 命令

### [npm 重点小结](https://www.cnblogs.com/danghuijian/p/5890098.html)

package.json 好处
 1.以json文件格式定义项目所依赖的包；
 2.确定每个包的使用版本；
 3.项目构建可重复，多人协助公用一套基础代码；
 4.npm init 初始化 【必须含有的两个：name 和 version】
   {
     "name": "react-redux-webpack",
     "version": "1.1.0",
   }

devDependencies    ：开发环境和测试环境所依赖的包列表
dependencies       ：在生产环境使用的依赖包列表

    dependencies下记录的是项目在运行时必须依赖的插件，常见的例如react jquery等，即及时项目打包好了、上线了，
   这些也是需要用的，否则程序无法正常执行。
    devDependencies下记录的是项目在开发过程中使用的插件，例如这里我们开发过程中需要使用webpack打包，
    而我在工作中使用fis3打包，但是一旦项目打包发布、上线了之后，webpack和fis3就都没有用了，可卸磨杀驴。

 

本地安装 npm install --save|--save-dev 分别写入  dependencies|devDependencies 中；
简写：     npm i -S pkg      |  npm i -D pkg


包（package)和模块（module）
包：package.json 文件所描述的文件夹或者文件，符合CommonJS规范
模块：任何被node.js中的require所载入的文件

常用命令:
	npm init //在项目中引导创建一个package.json文件
	npm search mkdir   //寻找包使用npm search命令
	npm help //查看某条命令的详细帮助 
	npm root //查看包的安装路径
	npm config //管理npm的配置路径
	npm prefix -g   //查看全局安装的包位置  -g全局
	npm cache  //管理模块的缓存 ,可以使用下面命令，偶尔清楚一下缓存：      eg: npm cache clean
	npm info webpack   //查看webpack 版本信息
	npm install pkg //安装模块 简写：npm i pkg   ,带版本:  npm install underscore@1.8.2
	npm uninstall //卸载模块   eg: npm uninstall webpack
	npm update   // 更新模块   npm update underscore
	npm outdated  //检查模块是否已经过时
	npm ls   //查看安装的模块 
	npm list  //可以查看全局路径下的所有包    eg:   npm list --global
	          //也可以使用--depth=0来缩短返回的结果   eg:     npm list -g --depth=0
	npm stop  //停止模块
	npm restart  //重新启动模块
	npm test //测试模块 
	npm version //查看模块版本
	npm publish //发布模块
  
  npm uninstall是卸载包的命令，不过很多人安装包的时候知道加--save或者--save-dev命令，而卸载的时候就会忘了加，如果这个包是确定不需要使用的，就可以直接加--save或者--save-dev从package.json中删掉它。卸载全局的包只需要加个-g参数。
  npm outdated命令可以查看有新版本的包的版本情况，如下图所示，current是当前安装的包的版本，wanted是package.json里面写的版本，latest是最新版本：
简写:
	npm i – 安装包
	npm i -g – 安装包到全局下
	npm un – 删除本地下包
	npm up – 更新包
	npm t – 运行测试
	npm ls – 罗列已经安装包
	npm ll or npm la – 罗列包时显示额外信息

    npm i express momemt lodash mongoose  webpack   //也可以一次安装多个包


前端模块化:
    1.IIFE
    var pkg=(function(){
    	...
    	return{
    		fun1:fun1,
    		fun2:fun2
    	}
    })()
    
 特点    :1.挂载在window对象上,常见的如JQuery,依赖全局变量,污染全局;
      2.约定命名空间,人为控制,可靠性没保障;
      3.依赖手动管理执行顺序;
   
    2.AMD和CMD,CommonJS
    
    require(['math'], function (math) {
　　　　math.add(2, 3);
     return{
     	...
     }
　　 });
    
 特点    :1. 全局定义define, require 不需要使用其他全局变量,打包依赖别的模块(r.js)
      2. 模块定义中声明依赖,依赖的加载执行由加载器决定;
      3. 提供打包工具只支持单一规范;  
      4. CommonJS 不适合浏览器端,相比AMD模式,CommonJS更加整洁
         const bar=require('./fs');
         module.export=function(){}
         
         
    3.ES6
     let { stat, exists, readFile } = require('fs');
     import('./dialogBox.js')
		  .then(dialogBox => {
		    dialogBox.open();
		  })
		  .catch(error => {
		    /* Error handling */
		  })
 
    
 特点    :1.相比AMD,CMD暴露方式更加多样;
      2.import()可以在需要的时候，再加载某个模块。
      3.最重要的一点:官方,未来是主流;
      



//参考:http://www.ferecord.com/webpack-summary.html#externals
webpack是当下最热门的前端资源模块化管理和打包工具。它可以将许多松散的模块
按照依赖和规则打包成符合生产环境部署的前端资源。
还可以将按需加载的模块进行代码分隔，等到实际需要的时候再异步加载!

　　 



      
webpack特点:
    1.代码拆分:webpack 有两种组织模块依赖的方式，同步和异步。异步依赖作为分割点，形成一个新的块。在优化了依赖树后，每一个异步区块都作为一个文件被打包。
    2.Loader[一切即模块]:Webpack 本身只能处理原生的 JavaScript 模块，但是 loader 转换器可以将各种类型的资源转换成 JavaScript 模块。这样，任何资源都可以成为 Webpack 可以处理的模块。
    3.智能解析[支持AMD,CommonJS,强大的插件机制,丰富的插件库;]:Webpack 有一个智能解析器，几乎可以处理任何第三方库，无论它们的模块形式是 CommonJS、 AMD 还是普通的 JS 文件。甚至在加载依赖的时候，允许使用动态表达式 require("./templates/" + name + ".jade")。
    4.配置多样化,功能丰富,灵活-->没有固定的配置方法;
    5.快速运行:Webpack 使用异步 I/O 和多级缓存提高运行效率，这使得 Webpack 能够快速增量编译
    6.webpack的内容丰富且杂乱，对于新手并不友好。
    
    本地安装

	$ npm install --save-dev webpack
	$ npm install --save-dev webpack@<version>
	$ npm install --global webpack    //--global 可简写-g,  webpack 命令现在可以全局执行了。
   
    如果你在项目中使用了 npm ，npm 首先会在本地模块中寻找 webpack。这是一个实用的小技巧。

		"scripts": {
		    "start": "webpack --config mywebpack.config.js"
		}  
		
	当你在本地安装 webpack 后，你能够从 node_modules/.bin/webpack 访问它的 bin 版本。
	
	----------------------------------------------------------------
	var webpack = require('webpack');
	module.exports = {
	  entry: './entry.js', //入口文件
	  output: {
	    path: __dirname,//出口路径
	    filename: 'bundle.js'//出口名称
	  },
	  module: {
	    rules: [
	      {test: /\.css$/,use: [ 'style-loader', 'css-loader' ]}
	    ]
	  }
	}
	----------------------------------------------------------------
	
	
	
    
webpack特色:
    1.代码拆分(code splitting)方案:
    webpack ensure属于commonjs中有一个Modules/Async/A规范，里面定义了require.ensure语法有人称它为异步加载，
     也有人说做代码切割， 
       其实说白了，它就是把js模块给独立导出一个.js文件的，然后使用这个
	 模块的时候，webpack会构造script dom元素，由浏览器发起异步请求这个js文件。
	 回调里面的require是我们想要进行分割出去的，即require(’./xx.js’)，把xx.js分割出去，形成一个
	webpack打包的单独js文件。
	  
传统:
    button.click(function() {
	  var head = document.getElementsByTagName('head')[0];
	  var script = document.createElement('script');
	  script.async = true;
	  script.src = "./xx/xx.js"
	  head.appendChild(script);
	});
	
	
webpack:
	button.click(function() {
	  require.ensure([], function() {
	    var myjs = require('./xx/xx')    //xx.js可以不写.js
	  })
	});
	
	//commonjs预加载懒执行
	//上面的用法中，我们给require.ensure的第一个参数传了空数组，实际上这里是可以接收模块名称的，作用就是实现预加载懒执行。用法如下：
	require.ensure(['./xx'], function(require){   //会被浏览器先下载下来，但是并不会执行xx.js模块中的代码
	    var list = require('./xx');  //执行xx.js
	    list.show();
	});
	
	
	//require.include是webpack自己提供的，并没有什么规范做后台，所以是个小角色。它可以实现上面是预加载功能，而不用把模块写在数组中，用法如下：

	require.ensure([], function(require){
	    require.include('./xx');//此处只加载不执行
	});
	
	
	ES6:
	import list from './xx';   //依赖babel转译
	//等价于
	var list = require('./xx');     //require到底加载哪一个模块，只有运行时才知道。
	
	异步:
	click() {
    // 动态引入import()
    import('dateformat-util')   //需要配置babel
	    .then(DateFormat => DateFormat.format(new Date()))
	    .then(str => this.setState({date:str}))
	    .catch(err => console.log("Failed to load moment", err));
    }
	
	
	Promise.all([
	  import('./module1.js'),
	  import('./module2.js'),
	  import('./module3.js'),
	])
	.then(([module1, module2, module3]) => {
	    console.log(module1);
	});
	
  
   2.智能静态分析
   AMD: require 方法声明依赖的时候必须是字符串常亮,不能是表达式,原因是打包之前需要静态分析整个应用的依赖关系,如果传入表达式,
        其值只能在执行期确定,自然就不能确定其依赖关系;
   webpack: 支持简单的表达式: 
        require(isTrue?'jquery':'zepto');
        require('z'+'epto');
        require("ZEPTO.JS".toLocaleLowerCase().slice(0,5));    //'zepto'
        require('./lib'+name+".jsx");
        
        
   3.模块热替换 hot module replacement
   
    传统:修改js 手动刷新
    webpack: 修改一个模块[组件]自动刷新,自动打包压缩合并,内部实现原理:websocket
    
    
   4.非javascript 模块支持,一切皆模块
   
   require('./index.less');
   import '../css/reset.css';
   import imgSrc from '../img/logo.png';   //<img src={imgSrc} />
        
--------------------------------------------------------------------------------------------------------------------------


常用的插件(plugins):   //  http://blog.csdn.net/sinat_17775997/article/details/70242214
HtmlWebpackPlugin使用：

	npm install html-webpack-plugin --save-dev
	解释：这个插件是简化创建生成html（h5）文件用的，如果你引入的文件带有hash值的话，这个尤为的有用，不需要手动去更改引入的文件名！
	默认生成的是index.html,基本用法为：
	一般配置：
	title: 用于生成的HTML文档的标题,也就是html，head中`<title>ceshi</title>`
	filename: 生成的文件名，default index.html
	template: 模版（填写相对路径，与配置文件的相对路径，例如：'./index.html'
	hash: 增加hash值，使每次生成的都是唯一的不重复的

ExtractTextWebpackPlugin 分离我们的样式文件，例如css,sass,less:
    npm install --save-dev extract-text-webpack-plugin

DefinePlugin 定义变量:
     允许我们创建可在编译时配置的全局常量，这对与需要灵活配置的项目而言非常的重要，举个例子：
	开发中我们需要devtool来查看redux树中stroe中的变量，但是生产环境中不需要，那么就可以这样定义：
	const nodeEnv = process.env.NODE_ENV || 'development';
	const isPro = nodeEnv === 'production';
	new webpack.DefinePlugin({
	    "__dev__": JSON.stringify(isPro) 
	})
	那么在开发环境中__dev__为false，
	
	打包的时候可以在CLI中输入NODE_ENV=production 这样__dev__就为true;

ProvidePlugin 提供识别码[全局变量]:
    通俗点讲就是使用一些字符代替复杂的字符，例如我想用 $ 代表 jQuery, 那么就可以使用这个插件，或着我想用 'av' 代表 './ateon/values' 这个路径，也可以使用这个插件。

	基本用法：
	new webpack.ProvidePlugin({
	  $: 'jquery',
	  jQuery: 'jquery',
	  'av' : './ateon/values'
	})
	在模块中使用， import lives from 'av' === import lives from './ateon/values'

clean-webpack-plugin 清除你的build目录:







///////////////////////////////////////////////////////////////////////////////////////////
        
        
        




React 入门:
    
    虚拟DOM:
    --------------------------------------------------------------------------------
    Web 页面是由一个个 HTML 元素嵌套组合而成的。当使用 JavaScript
	来描述这些元素的时候，这些元素可以简单地被表示成纯粹的 JSON 对象。比如，现在需要描述
	一个按钮（button） ，这用 HTML 语法表示非常简单：
	
	<button class="btn btn-blue">
	   <em>Confirm</em>
	</button>
	
	如果转成 JSON 对象，那么依然包括元素的类型以及属性：
    {
		type: 'button',
		props: {
			className: 'btn btn-blue',
			children: [{
				type: 'em',
				props: {
					children: 'Confirm'
				}
			}]
		}
	}
    这样，我们就可以在 JavaScript 中创建 Virtual DOM 元素了。
    
    diff算法:
        html-->JSON-->DIFF算法(比较两个JSON)-->JSON--->HTML
    
    --------------------------------------------------------------------------------
    #使用JSX
	React.render(
	    <div>    //1.定义标签时，只允许被一个标签包裹。2.  标签一定要闭合。
	        <div>
	            <div>content</div>
	        </div>
	    </div>,
	    document.getElementById('example')
	);
	
	#不使用JSX
	React.render(
	    React.createElement('div', null,
	        React.createElement('div', null,
	            React.createElement('div', null, 'content')
	        )
	    ),
	    document.getElementById('example')
	);
    
       在 JSX 中，不论是 DOM 元素还是组件元素，它们都有属性。不同的是，DOM 元素的属性
	是标准规范属性，但有两个例外—— class 和  for ，这是因为在 JavaScript 中这两个单词都是关键
	词。因此，我们这么转换：
	
 class 属性改为  className ；
 for 属性改为  htmlFor 。

	而组件元素的属性是完全自定义的属性，也可以理解为实现组件所需要的参数。比如：
	
	const Header = ({title, children}) => (
	     <h3 title={title}>{children}</h3>
	);
	
	我们给  Header 组件加了一个  title 属性，那么可以这么调用：
	<Header title="hello world">Hello world</Header>
    
    
    --------------------------------------------------------------------------------






    class BookListContainer extends React.Component {
		/*
		传递默认值写到class后面
		比如userid或username在父页面没有传递值的时候，需要设置默认值
		
		const defaultProps = {
		  nameProp:'这是一个初始化prop'
		};
		BookListContainer.defaultProps = defaultProps;
		
		 */
		static get defaultProps() {
			return {
				nameProp: '我是初始化的props'
			};
		}
		/*
		state和props区别:
		在于props是不可变的，而子组件只能通过props来获取数据。
		而state可以根据与用户交互来改变。这就是为什么有些容器组件需要定义state来更新和修改数据。
		可以将state组件的局部变量.
		*/
		constructor(props, context) {
			//因为子类没有自己的this对象，而是继承父类的this对象
			super(props);   //调用基类的所有的初始化方法,必须调用super之后，才可以使用this关键字，否则会报错
			this.state = {  //初始化state，需要放在构造函数constructor里面
				data: ["我是初始化的state"],
				isToggleOn:true
			};
			
			//在JS中，类方法不会默认绑定this。
			//如果忘记绑定this.handleClick而将其直接传递给onClick，当函数被调用时，this的值是undefined的。
			this.handleClick = this.handleClick.bind(this);  
			this.handleChange = this.handleChange.bind(this);
		    
		}
	
		//组件即将插入到真实的dom节点中
		componentWillMount() {
			//ajax...
			console.log('组件即将插入到真实的dom节点中');
		}
		//组件已经插入到真实的dom节点中
		componentDidMount() {
			//ReactDOM.findDOMNode(this.refs)
			console.log('组件已经插入到真实的dom节点中');
		}
		//组件将要接收到新属性
		componnentWillReceiveProps(nextProps) {
			console.log('组件将要接收到新属性');
		}
		//组件是否要被重新渲染:return true?渲染(默认)：不渲染
		shouldComponentUpdate(nextProps, nextState) {  //React优化点,使用 immutable.js
			console.log('组件是否要被重新渲染:return true?渲染(默认)：不渲染');
			return true;
		}
		//组件即将要被重新渲染
		componentWillUpdate(nextProps, nextState) {
			console.log('组件即将要被重新渲染');
		}
		//组件已经被重新渲染
		componentDidUpdate(nextProps, nextState) {
			console.log('组件已经被重新渲染');
		}
	    //组件即将移除真实的dom节点
		componentWillUnmount() {
			//清除定时器,延迟操作,移除事件等 setInterval,setTimeout
			console.log('组件即将移除真实的dom节点');
		}
		handleClick() {
		    this.setState(prevState => ({     //这是一个同步的
		      isToggleOn: !prevState.isToggleOn
		    }));
		}
	    render() {   //你也可以返回 null 或者 false 来表明不需要渲染任何东西
	        const { nameProp } = this.props;
	         
	        console.log(nameProp);
	        /*<ComponentHeader {...this.props} />*/
	        return(
	            <div className="">
	            
				    <button onClick={this.handleClick}>
				        {this.state.isToggleOn ? 'ON' : 'OFF'}
				    </button>
				    /*使用箭头函数的问题在于这种方式会导致每次渲染LogginButton时都会创建一个不同的回调函数。*/
				    <button onClick={(e) => this.handleClick(e)}>
			            {this.state.isToggleOn ? 'ON' : 'OFF'}
			        </button> 
			        
			        <input type="text" value={this.state.value} onChange={this.handleChange} />
			        
	                <ComponentHeader nameProp={nameProp} userid={123456} username={'我是react'} />
	            </div>
	        );
	    }
	}
	//PropTypes属性验证在类定义后追加属性propTypes
	BookListContainer.propTypes = {  //match只能为object，否则会报错
	    match: PropTypes.object   
	}

   ==================================================================================================
	   React.createClass({
	  propTypes: {
	    // 可以声明 prop 为指定的 JS 基本类型。默认
	    // 情况下，这些 prop 都是可传可不传的。
	    optionalArray: React.PropTypes.array,
	    optionalBool: React.PropTypes.bool,
	    optionalFunc: React.PropTypes.func,
	    optionalNumber: React.PropTypes.number,
	    optionalObject: React.PropTypes.object,
	    optionalString: React.PropTypes.string,
	
	    // 所有可以被渲染的对象：数字，
	    // 字符串，DOM 元素或包含这些类型的数组。
	    optionalNode: React.PropTypes.node,
	
	    // React 元素
	    optionalElement: React.PropTypes.element,
	
	    // 用 JS 的 instanceof 操作符声明 prop 为类的实例。
	    optionalMessage: React.PropTypes.instanceOf(Message),
	
	    // 用 enum 来限制 prop 只接受指定的值。
	    optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),
	
	    // 指定的多个对象类型中的一个
	    optionalUnion: React.PropTypes.oneOfType([
	      React.PropTypes.string,
	      React.PropTypes.number,
	      React.PropTypes.instanceOf(Message)
	    ]),
	
	    // 指定类型组成的数组
	    optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),
	
	    // 指定类型的属性构成的对象
	    optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),
	
	    // 特定形状参数的对象
	    optionalObjectWithShape: React.PropTypes.shape({
	      color: React.PropTypes.string,
	      fontSize: React.PropTypes.number
	    }),
	
	    // 以后任意类型加上 `isRequired` 来使 prop 不可空。
	    requiredFunc: React.PropTypes.func.isRequired,
	
	    // 不可空的任意类型
	    requiredAny: React.PropTypes.any.isRequired,
	
	    // 自定义验证器。如果验证失败需要返回一个 Error 对象。不要直接
	    // 使用 `console.warn` 或抛异常，因为这样 `oneOfType` 会失效。
	    customProp: function(props, propName, componentName) {
	      if (!/matchme/.test(props[propName])) {
	        return new Error('Validation failed!');
	      }
	    }
	  },
	  /* ... */
	});
   
   ==================================================================================================



    

实例化
首次实例化
	getDefaultProps
	getInitialState
	componentWillMount
	render
	componentDidMount
	
实例化完成后的更新
	getInitialState
	componentWillMount
	render
	componentDidMount
	
存在期
组件已存在时的状态改变
	componentWillReceiveProps
	shouldComponentUpdate
	componentWillUpdate
	render
	componentDidUpdate
	
销毁&清理期
    componentWillUnmount
    





说明
生命周期共提供了10个不同的API和2个常用API。

1.getDefaultProps

作用于组件类，只调用一次，返回对象用于设置默认的props，对于引用值，会在实例中共享。

2.getInitialState

作用于组件的实例，在实例创建时调用一次，用于初始化每个实例的state，此时可以访问this.props。

3.componentWillMount

在完成首次渲染之前调用，此时仍可以修改组件的state。

4.render

必选的方法，创建虚拟DOM，该方法具有特殊的规则：

只能通过this.props和this.state访问数据
可以返回null、false或任何React组件
只能出现一个顶级组件（不能返回数组）
不能改变组件的状态
不能修改DOM的输出
5.componentDidMount

真实的DOM被渲染出来后调用，在该方法中可通过this.getDOMNode()访问到真实的DOM元素。此时已可以使用其他类库来操作这个DOM。

在服务端中，该方法不会被调用。

6.componentWillReceiveProps

组件接收到新的props时调用，并将其作为参数nextProps使用，此时可以更改组件props及state。

    componentWillReceiveProps: function(nextProps) {
        if (nextProps.bool) {
            this.setState({
                bool: true
            });
        }
    }
7.shouldComponentUpdate

组件是否应当渲染新的props或state，返回false表示跳过后续的生命周期方法，通常不需要使用以避免出现bug。在出现应用的瓶颈时，可通过该方法进行适当的优化。

在首次渲染期间或者调用了forceUpdate方法后，该方法不会被调用

8.componentWillUpdate

接收到新的props或者state后，进行渲染之前调用，此时不允许更新props或state。

9.componentDidUpdate

完成渲染新的props或者state后调用，此时可以访问到新的DOM元素。

10.componentWillUnmount

组件被移除之前被调用，可以用于做一些清理工作，在componentDidMount方法中添加的所有任务都需要在该方法中撤销，比如创建的定时器或添加的事件监听器。

11.forceUpdate()   //强刷,可以无视shouldComponentUpdate返回值

forceUpdate([function callback])
如果 render() 方法从 this.props 或者 this.state 之外的地方读取数据，你需要通过调用 forceUpdate() 告诉 React 什么时候需要再次运行 render()。
如果直接改变了 this.state，也需要调用 forceUpdate()。

调用 forceUpdate() 将会导致 render() 方法在相应的组件上被调用，并且子级组件也会调用自己的 render()，但是如果标记改变了，那么 React 仅会更新 DOM。

通常情况下，应该尽量避免所有使用 forceUpdate() 的情况，在 render() 中仅从 this.props 和 this.state 中读取数据。这会使应用大大简化，并且更加高效。

12.ReactDOM.findDOMNode  //相当于Jquery的Ready,只在mounted组件中调用,其他调用React.findDOMNode()就会抛出异常
  this.refs 获得的是虚拟DOM，而ReactDOM.findDOMNode 获得的是实际DOM。
  
  ReactDOM.findDOMNode(this)
  ReactDOM.findDOMNode(this.refs.xx)
 
  
如果组件已经挂载到了 DOM 上，该方法返回相应的本地浏览器 DOM 元素。从 DOM 中读取值的时候，该方法很有用，比如获取表单字段的值和做一些 DOM 操作。
当 render 返回 null 或者 false 的时候，this.findDOMNode() 返回 null。






无状态组件,也叫静态组件(没有生命周期) [只要有可能，尽量使用无状态组件]:
        const Greeting = ({ name, style }) => {
		    return <div style={style}>{name}</div>
		};
		
		function Button({ color = 'blue', text = 'Confirm' }) {
			return (
				<button className={`btn btn-${color}`}>
				    <em>{text}</em>
				</button>
			);
		}
无状态组件只传入  props 和  context 两个参数；也就是说，它不存在  state ，也没有生命周
期方法，组件本身即上面两种 React 组件构建方法中的  render 方法。不过，像  propTypes 和
defaultProps 还是可以通过向方法设置静态属性来实现的。
在适合的情况下，我们都应该且必须使用无状态组件。无状态组件不像上述两种方法在调用
时会创建新实例，它创建时始终保持了一个实例，避免了不必要的检查和内存分配，做到了内部
优化。

无状态组件的创建形式使代码的可读性更好，并且减少了大量冗余的代码，精简至只有一个render方法，
大大的增强了编写一个组件的便利，除此之外无状态组件还有以下几个显著的特点：

1.组件不会被实例化，整体渲染性能得到提升
2.因为组件被精简成一个render方法的函数来实现的，由于是无状态组件，所以无状态组件就不会在有组件实例化的过程，无实例化过程也就不需要分配多余的内存，从而性能得到一定的提升。
3.组件不能访问this对象
     无状态组件由于没有实例化过程，所以无法访问组件this中的对象，例如：this.ref、this.state等均不能访问。若想访问就不能使用这种形式来创建组件
4.组件无法访问生命周期的方法
     因为无状态组件是不需要组件生命周期管理和状态管理，所以底层实现这种形式的组件时是不会实现组件的生命周期方法。所以无状态组件是不能参与组件的各个生命周期管理的。
     无状态组件只能访问输入的props，同样的props会得到同样的渲染结果，不会有副作用




		
Array as children 把数组数据渲染出来
	经常会遇到处理数组数据的情况，可以用下面的方式简单的渲染出来。
	  const List = [1, 2, 3, 4, 5];
	  render() {
	      return (
	          (<ul>
	              {List.map((item,index) => (
	              	//key在兄弟中必须是唯一的,他们不需要 全局唯一 。两个不同的数组中的key可以相同,key的是供React使用的，但并不会传递给组件,也就无法读到props.key
	                   <li key={index}>{item}</li>   
	              ))}
	          </ul>)
	      )     
	  }
	  

封装基础类组件
比如 <input type="text" > 每次写很麻烦吧，可以封装一个成一个组件

  const input = (props) => {
      return <input type = {props.type} {...props} />
  }
  


Layout Component 布局组件
组件可以分成很多类类，有的是布局类，有的是功能类。下面是一种布局类的组件。

  <FlexContainer>
    <div style={{ flex: 1 }}>{this.props.leftSide}</div>
    <div style={{ flex: 2 }}>{this.props.rightSide}</div>
  </FlexContainer>
  



Higher Order Component 高阶组件
高阶组件很像decorator，提升组件的能力。比如你想一些组件里面使用一下功能，react-router 中

  import { withRouter } from 'react-router'
  withRouter(SomeComponent)
例子：

  var Enhance = ComposedComponent => class extends React.Component {
    componentDidMount() {
      this.setState({ name: "李狗子" });
    }
    render() {
      return <ComposedComponent {...this.props} name = {this.state.name} />;
    }
  };
  
  
  
  

受控组件，不受控组件
项目中经常会用到这两种情况如：
受控组件，更新的时候需要使用this.setState

  constructor() {
      super();
      this.state = {value: ""}
  }
  render() {
      return <input type="text" value={this.state.value} />
  }
不受控组件，主要需要通过ref来获取input的值。

  render() {
      return <input type="text" ref="myInput" />
  }
两种方法都可以在特定的场合去使用，个人觉得数据相对重要的页面需要使用受控组件会比较合适。



渲染列表:
   
   const numbers = [1, 2, 3, 4, 5];
   const listItems = numbers.map((number,key) =>
		<li key={key}>{number}</li>
	);
    ...
    return(
		<ul
			{listItems}
		</ul>
	)
    


使用三元表达式
项目中经常有判断语句，用三元表达式可以很方便的写出想要的逻辑

  const demo = ({ isOK }) => {
      return isOK 
      ? <p> Yes </p> 
      : <p> No </p>
  };
给setState传入function
可以使用function来更新state

  this.setState((prevState, props) => ({
      return ...
  }));





通过ref属性获取component
场景：下面的例子是初始化组件后，让input默认获取光标。ref最终指向的已经渲染好的DOM节点，或者是react class的实例。具体可以看官方的文档

  componentDidMount() {
      this.input.focus();
  }
  render() {
      return (
          <input
            ref={comp => { this.input = comp; }}
          />
      )
  }
  
  
  
  
var CheckLink = React.createClass({
  render: function() {
    // 这样会把 CheckList 所有的 props 复制到 <a>
    return <a {...this.props}>{'√ '}{this.props.children}</a>;
  }
});  
  
不建议使用...props传递数据
一个非常错误的做法比如：

  <Component {...props} />
  props上面如果有非常多的属性，会造成非常昂贵的计算。正确的应该

  <Component name = { props.name } />
  
  
  
  
  
Mixins
组件是 React 里复用代码最佳方式，但是有时一些复杂的组件间也需要共用一些功能。有时会被称为 跨切面关注点。React 使用 mixins 来解决这类问题。

一个通用的场景是：一个组件需要定期更新。用 setInterval() 做很容易，但当不需要它的时候取消定时器来节省内存是非常重要的。React 提供 生命周期方法 来告知组件创建或销毁的时间。下面来做一个简单的 mixin，使用 setInterval() 并保证在组件销毁时清理定时器。

var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.map(clearInterval);
  }
};

var TickTock = React.createClass({
  mixins: [SetIntervalMixin], // 引用 mixin
  getInitialState: function() {
    return {seconds: 0};
  },
  componentDidMount: function() {
    this.setInterval(this.tick, 1000); // 调用 mixin 的方法
  },
  tick: function() {
    this.setState({seconds: this.state.seconds + 1});
  },
  render: function() {
    return (
      <p>
        React has been running for {this.state.seconds} seconds.
      </p>
    );
  }
});

React.render(
  <TickTock />,
  document.getElementById('example')
);  






异步的setState:

class MyComponent extends React.Component{
   constructor(props) {
     super(props)
     this.state ={
     value:0
        }
   }
	handleClick = () => {
	      this.setState({value:1})
	           console.log('在handleClick里输出' + this.state.value);
	}
	render(){
	           console.log('在render()里输出' + this.state.value);
	return (<div>
	          <button onClick ={this.handleClick}>按钮</button>
	        </div>)
	      }
	}
export default MyComponent


输出:
   在handleClick里输出0
    在render()里输出1
    
    
    
    
handleStateChange1 = () => {
       this.setState({value:1})
       console.log('在handleClick里输出' + this.state.value);
}
handleStateChange2 = () => {
       this.setState({value:2})
       console.log('在handleClick里输出' + this.state.value);
}
handleStateChange3 = () => {
       this.setState({value:3})
       console.log('在handleClick里输出' + this.state.value);
}
handleClick = () => {
      this.handleStateChange1();
      this.handleStateChange2();
      this.handleStateChange3();
}


输出:
	   在handleClick里输出0
	   在handleClick里输出0
	   在handleClick里输出0
	   



这时setState的第二个参数就派上用场了，第二个参数是state更新完毕的回调函数
	this.setState({  
	  count: this.state.count + 1
	}, () => {
	  this.setState({
	    count: this.state.count + 1
	  });
	});
	   
	   
	   
	   
React为了性能和其它原因，setState 这个 API 很容易被误用。
	setState 不会立刻改变 React 组件中 state 的值
	setState 通过引发一次组件的更新过程来引发重新绘制
	多次 setState 函数调用产生的效果会合并	   

解决方式:
	this.setState((prevState, props) => ({
	  count: prevState.count + props.increment
	}));
	
	要修复它，请使用第二种形式的 setState() 来接受一个函数而不是一个对象。 该函数将接收先前的状态作为第一个参数，将需要更新的值作为第二个参数：
	// Correct
	this.setState((prevState, props) => ({
	  counter: prevState.counter + props.increment
	}));
	
	上方代码使用了箭头函数，但它也适用于常规函数：
	// Correct
	this.setState(function(prevState, props) {
	  return {
	    counter: prevState.counter + props.increment
	  };
	});
	 
	 
	 优化:
	 async func() {
	  ...
	  await this.setStateAsync({count: this.state.count + 1});
	  await this.setStateAsync({count: this.state.count + 1});
	}

/////////////////////////////////////////////////////////////////////////////    
 hideKeyboard() {
    this.setState({...this.state, showKeyboard: false});
  }

/////////////////////////////////////////////////////////////////////////////   

live-server 快速搭建服务:

    本地开发常常需要搭建临时的服务，第一时间我们会想到用http-server
    
    但现在流行修改文件浏览器自动刷新，好像叫hot socketing（热拔插），这时候又得用到live-reload。

	既然装逼就要装到底，服务启动了，我想浏览器自动打开我的项目，再用个opener。
	
	现在只要使用live-server就能实现这三个插件的所有功能，而且很简单就能启动一个看起来很专业的本地服务。
	
	你只需要全局安装live-server：
	
	npm install -g live-server
	在项目根目录执行这条命令，一般会把它放在package.json的scripts下的server中，然后执行npm run server：

	"scripts": {
	  "server": "live-server ./ --port=9090"
	}





React性能优化:

     React 做性能优化时有一个避免重复渲染的大招，就是使用 shouldComponentUpdate()，
      但它默认返回 true，即始终会执行 render() 方法，然后做 Virtual DOM 比较，
        并得出是否需要做真实 DOM 更新，这里往往会带来很多无必要的渲染并成为性能瓶颈。
        
    1.当然我们也可以在 shouldComponentUpdate() 中使用使用 deepCopy 和 deepCompare 来避免无必要的 render()，
      但 deepCopy 和 deepCompare 一般都是非常耗性能的。
      
    function deepCopy(p, c) {
		var c = c || {};
		for(var i in p) {
			if(typeof p[i] === 'object') {
				c[i] = (p[i].constructor === Array) ? [] : {};
				deepCopy(p[i], c[i]);
			} else {
				c[i] = p[i];
			}
		}
		return c;
	}

	function deepCompare(obj1, obj2) {
		if(Object.keys(obj1).length !== Object.keys(obj2).length) {
			return false;
		}
		for(const key in obj1) {
			if(typeof obj1[key] === 'object') {
				return deepCompare(obj1[key], obj2[key])
			} else {
				if(obj1[key] !== obj2[key]) {
					return false;
				}
			}
		}
        return true;
	}
	
    2.Immutable 则提供了简洁高效的判断数据是否变化的方法，只需 === 和 is 比较就能知道是否需要执行 render()，
      而这个操作几乎 0 成本，所以可以极大提高性能。修改后的 shouldComponentUpdate 是这样的：
      
      
      import { is } from 'immutable';

	shouldComponentUpdate: (nextProps = {}, nextState = {}) => {
	  const thisProps = this.props || {}, thisState = this.state || {};
	
	  if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
	      Object.keys(thisState).length !== Object.keys(nextState).length) {
	    return true;
	  }
	
	  for (const key in nextProps) {
	    if (!is(thisProps[key], nextProps[key])) {
	      return true;
	    }
	  }
	
	  for (const key in nextState) {
	    if (thisState[key] !== nextState[key] || !is(thisState[key], nextState[key])) {
	      return true;
	    }
	  }
	  return false;
	}
	
	3.使用lodash:   
	import 'lodash'
	shouldComponentUpdate(nextProps, nextState) {
        if (_.isEqual(this.props, nextProps) || !_.isEmpty(this.props)) {
            return false
        }
        return true
    }
	
	
////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
react阻止冒泡事件:


合成事件:
在jsx中直接绑定的事件，如

    <a ref="aaa" onClick={(e)=>this.handleClick(e)}>更新</a>
    
这里的handleClick事件就是合成事件!

原生事件:
通过js原生代码绑定的事件，如
document.body.addEventListener('click',e=>{
    // 通过e.target判断阻止冒泡
    if(e.target&&e.target.matches('a')){
              return;
	    }
		console.log('body');
	})
或:
this.refs.update.addEventListener('click',e=>{
            console.log('update');
        });

阻止冒泡事件分三种情况:
A、阻止合成事件间的冒泡，用e.stopPropagation();
handleClick(e){
	// 阻止合成事件间的冒泡
	e.stopPropagation();
	this.setState({count:++this.state.count});
}
testClick(){
	console.log('test')
}

 
<div ref="test" onClick={()=>this.testClick()}>
<p>{this.state.count}</p>
<a ref="update" onClick={(e)=>this.handleClick(e)}>更新</a>



B、阻止原生事件与最外层document上的事件间的冒泡，用
handleClick(e){
// 阻止原生事件与最外层document上的事件间的冒泡
        e.nativeEvent.stopImmediatePropagation();

this.setState({count:++this.state.count});
    }
 
<div ref="test">
<p>{this.state.count}</p>
<a ref="update" onClick={(e)=>this.handleClick(e)}>更新</a>
</div>



C.阻止合成事件与除最外层document上的原生事件上的冒泡，通过判断e.target来避免

<div
  className="code"
  style={{ display: this.state.active ? 'block' : 'none' }}
  onClick={this.handleClickQr}
>

document.body.addEventListener('click',e=>{
// 通过e.target判断阻止冒泡
componentDidMount() {
  document.body.addEventListener('click', e => {
    if (e.target && e.target.matches('div.code')) {
      return;
    }

    this.setState({
      active: false,
    });
  });
}

componentWillUnmount() {
  document.body.removeEventListener('click');
  document.querySelector('.qr').removeEventListener('click');
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

使用pureRender，避免组件没有意义的渲染，配合immutable，减少渲染。

使用react-css-modules,解决了命名混乱，全局污染以及依赖管理的问题，多人协同开发有时候难免会发生样式上的冲突。
有个需要注意的地方，下面的2个顺序如果颠倒，就会出错。

@connect(mapStateToProps, mapDispatchToProps)
@CSSModules(styles)

############################################################################################

react-router 4.0 :

1.react-router 4.0升级不少内容，详细可看官网
https://reacttraining.com/react-router/web/example/basic
https://reacttraining.com/react-router/web/api/Route/Route-render-methods

2.安装所必须要的包：

npm install --save-dev react-router

npm install --save-dev react-router-dom

所有安装成功的包都可以在package.js里面查看版本。

对于接受参数采用 { this.props.match.params.id }

如下例子：<Route path="list/:id"></Router> 
        <Link to="list/123456"></Link>

获取参数值的方式是：{ this.props.match.params.id }




############################################################################################

redux:   //http://www.chardlau.com/2017/06/28/use-redux-in-react/


redux
安装redux
安装依赖的命令如下：

npm install --save redux react-redux redux-thunk  
npm install --save-dev redux-logger  
redux不用说了，我是把它当成一个本地数据库使用，react-redux帮助你完成数据订阅，
redux-thunk可以放你实现异步action，redux-logger是redux的日志中间件。


关于redux与代码布局
在开始介绍之前我想先就redux的使用发表一些自己的看法：

前文说了我把redux当成一个本地数据库，因此我倾向于把redux封装类似于mvc中的Model的角色，独立为一层。
这与另一种观点——我在公司的项目更倾向于把每个页面当成一个独立模块，每个模块维护自己的reducer和action的观点，
有所出入。

我的做法可以更好地实现reducer的复用。而对我自己来说更重要的好处是集中修改。更适合小项目或者独自开发一个项目的场景。



使用redux
无论代码怎么布局，使用redux的方法主要还是三步曲：创建store、创建action、创建reducer。
而在这之后才是与业务或者组件相关的数据处理和展示。






babel-core babel6 的基础模块

babel-eslint ESLint 是前端JS代码检测利器。而 babel-eslint 则允许你检测所有的 Babel 代码。

babel-loader 这个包允许你使用 Babel 和 webpack 转译（Transpiling） JavaScript 文件。

babel-plugin-react-transform 这个插件通过任意转换的方式去封装 React 组件。换句话说，你可以随心所欲的摆弄你的组件了。

babel-plugin-transform-runtime 在 Babel 转换过程中，详细的展示引用的相关辅助工具和内置命令，并自动的聚合填充你的代码而不会污染全局。

babel-preset-es2015 此预设包含了所有的 es2015 插件。

babel-preset-react 此预设包含了所有的 React 插件,用于编译JSX用。

babel-preset-stage-0 此预设包含了 stage 0 中的所有插件。

eslint JavaScript 语法检测利器：分析出你代码潜在的错误和非标准用法。

eslint-plugin-react ESLint 中关于 React 语法检测的插件。

react-transform-hmr 一个 React 转换装置，该装置通过引用 Hot Module Replacement API 使热重载 React 的类成为可能。

react-transform-catch-errors 呈现你 React 组件的错误信息。

webpack-dev-server 为 wepack app 提供一个服务器，如果你的代码有任何变化，浏览器将自动刷新显示，极大的方便前期开发。

babel-runtime Babel 自带的运行环境。

babel-preset-react-hmre  React组件局部刷新,让Babel知道HMR(热替换)
