define(function(require,exports,module) {
    var $ = require('zepto');
    var addedCls = "added";//已添加图的标识
    var mulForm = {
        el:null,
        //建立临时form 用于清除file或异步传图
        create:function (){
            this.el = $("<form>",{
                "enctype":'multipart/form-data',
                "encoding":'multipart/form-data',
                "method":"post",
                "action":"abc"
            });
            $("body").append(this.el);
        },

        // 复制file
        copyInputs : function (inpEl) {
            var self = this;
            var next = inpEl.next(),
                parent = inpEl.parent();
            
            self.temInputs = next ?
                function() {
                    inpEl.insertBefore(next);

                } : function() {
                parent.append(inpEl);
            };
            this.el.append(inpEl);
        },
        //file重置
        resume: function  () {
            this.el.reset();
            this.temInputs();
            this.config.inpEl.value = ""
        },
        upload:function(inpEl){
            var self = this;
            if(!self.el){
                self.create();
            }else{
                self.resume();
            }
            self.copyInputs(inpEl);
            $.post("abc.htm",self.el.serialize(),function(data){
                self.resume();
                if(data.success){

                }else{
                    
                }
            });
        }
    }
    
    // 删除操作
    function delPic(uiFileEl){
        uiFileEl.removeClass(addedCls);
        uiFileEl.find("img").remove();
    }

    

    /**
     * 建立一個可存取到該file的url
     * PS: 瀏覽器必須支援HTML5 File API
     */
    function getObjectURL(file) {
        var url = null, win = window ; 
        if (win.createObjectURL!=undefined) { // basic
            url = win.createObjectURL(file) ;
        } else if (win.URL!=undefined) { // mozilla(firefox)
            url = win.URL.createObjectURL(file) ;
        } else if (win.webkitURL!=undefined) { // webkit or chrome
            url = win.webkitURL.createObjectURL(file) ;
        }
        return url ;
    }

    // 上传
    function uppicUiInit(uppicEl){
        uppicEl.bind('click', function(e){
            var target = $(e.target);
            var targetName = target[0].tagName;
            if(targetName != "LI" && targetName!="UL" && targetName !="EM"){
                var uiFileEl = target.parent("li");
                if(target[0].tagName == "S"){
                    if(uiFileEl.hasClass(addedCls)){
                        delPic(uiFileEl);
                    }
                }
            }
        });
        uppicEl.find("input[type=file]").bind('change', function(e){
            var objUrl = getObjectURL(this.files[0]);
            var uiFileEl = $(this).parent('li');
            uiFileEl.append('<img src="'+ objUrl +'">');
            uiFileEl.addClass("added"); 
            mulForm.upload($(this));     
        });
    }
    

    exports.init = function(cfg){
        if(cfg.uppicEl && cfg.uppicEl[0]){
            uppicUiInit(cfg.uppicEl);
        }
    
    }
});