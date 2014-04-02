define(function(require,exports,module) {
    var $ = require('zepto');
    // 编辑
    function edit(){
        var editingCls = "editing";
        var listEl = $(".js-list");
        var navEl = $("nav");
        var act = listEl.hasClass(editingCls)?"removeClass":"addClass";
        // list加上编辑状态
        listEl[act](editingCls);
        //nav加上编辑状态
        navEl[act](editingCls);
    }
    // 删除
    function del(){
        var chk_value =[];    
        $('input[name="ck"]:checked').each(function(){    
            chk_value.push($(this).val());    
        });
        if(chk_value.length){
            $.post('del.htm',{ids:chk_value.join(",")},function(data){
                if(data.success){

                }else{

                }
            });
        }
    }
    $("#J_NavBtn").bind('click', function(e){
        var target = $(e.target);
        
        if(target.hasClass("edit")){
            edit();
        }else if(target.hasClass("del")){
            del();
        }
    });
});