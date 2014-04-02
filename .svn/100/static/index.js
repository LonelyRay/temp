;(function(doc){
    var _s= doc.querySelectorAll("script");
    var path;
    for(var i=0;i<_s.length;i++){
        if(_s[i].src && /sea\.js/.test(_s[i].src)){
            path=_s[i].src;break;
        }
    }
    path = path.split("lib/sea.")[0];
    seajs.config({
        alias: {
            'zepto': path+'lib/zepto',
            'juicer':path+'lib/juicer'
        },
        paths: {
            'static': "http://aa/",
        },
        base:path,
        debug: 1
    });

    define(function(require,exports,module) {
        setTimeout(function(){ window.scrollTo(0, 1); }, 100);//hide the address bar
        var $ = require("zepto");
        //require("./search");
        //require("./slider");
        require("lazy");
    })

})(document);
