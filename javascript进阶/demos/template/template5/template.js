/**
 * 模板引擎第五版
 */

var settings = {
    // 求值
    evaluate: /<%([\s\S]+?)%>/g,
    // 插入
    interpolate: /<%=([\s\S]+?)%>/g,
};

var escapes = {
    "'": "'",
    '\\': '\\',
    '\r': 'r',
    '\n': 'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
};

var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;


var template = function(text) {

    var source = "var __p='';\n";
    source = source + "with(obj){\n"
    source = source + "__p+='";

    var main = text
    .replace(escapeRegExp, function(match) {
        return '\\' + escapes[match];
    })
    .replace(settings.interpolate, function(match, interpolate){
        return "'+\n" + interpolate + "+\n'"
    })
    .replace(settings.evaluate, function(match, evaluate){
        return "';\n " + evaluate + "\n__p+='"
    })

    source = source + main + "';\n }; \n return __p;";

    console.log(source)

    var render = new Function('obj',  source);

    return render;
};

var results = document.getElementById("container");

var data = {
    users: [
        { "name": "Byron", "url": "http://localhost" },
        { "name": "Casper", "url": "http://localhost" },
        { "name": "Frank", "url": "http://localhost" }
    ]
}

var text = document.getElementById("user_tmpl").innerHTML
var compiled = template(text);
results.innerHTML = compiled(data);