define(function(require,exports,module) {
    var $ = require('zepto');
    var pageNum = 1;
    
    function bind(el, wrap){
        el.bind('click', function(){
            pageNum++;
            //$.get('./', {p:pageNum}, function(data){
                console.log("当前页数："+pageNum);
                //mock
                var data = {
                    success:true,
                    list:[
                        {
                            title:"里公里公里公里公里",
                            pic:"200_114.png",
                            price:"23.9",
                            info:'2000公里 2009上牌',
                            link:"###",
                            sers:['rz','db']
                        }
                    ]
                }
                if(data.success){
                    console.log(12314)
                    render(data, wrap);
                }
            //})
        });
    }

    function render(data,wrap){
        var tpl = '{@each list as item}\
            <li>\
                <div class="if">\
                    <div class="ifwrap">\
                        <b>${item.info}</b>\
                        <p><a href="${item.link}">${item.title}</a></p>\
                        <div class="ifbot">\
                            <em class="price">${item.price}<span>万</span></em>\
                            <span class="r">\
                                {@each item.sers as ser}\
                                <s class="ser-${ser}"></s>\
                                {@/each}\
                            </span>\
                        </div>\
                    </div>\
                </div>\
                <span class="pic">\
                    <a href="${item.link}">\
                        <img src="${item.pic}">\
                    </a>\
                </span>\
            </li>\
            {@/each}';
        
        require.async('juicer', function(juicer){
            wrap.append($(juicer(tpl).render(data)))
            console.log("loadOk")
        });
        
    }

    exports.init = function(data){
        var btn = $('.btnload'), wrap = $('.clist');
        if(!btn[0] || !wrap[0]) return;

        bind(btn,wrap); //绑定点击

        if(data){
            //第一次默认数据
            render(data,wrap)
        }
    }
});