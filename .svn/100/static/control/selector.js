// ui selector daqiu
define(function(require,exports,module){
    $ = require('zepto');
    $.fn.uiseletor=function(){
        this.each(function(){
            //console.log()
            var uiEl = $(this),
                uiTextEl = uiEl.find(".ui-btn-text"),
                selectEl = uiEl.find("select"),
                selectedIndex = selectEl.get(0).selectedIndex;
            
            uiTextEl.html(selectEl.get(0).options[selectedIndex].text);
            selectEl.change(function(){
                var index = $(this).get(0).selectedIndex;
                var text = $(this).get(0).options[index].text;
                uiTextEl.html(text);
            });
        });
        return this;
    }

    $.fn.uiradio=function(){
        this.each(function(){
            //console.log()
            var radioWrapEl = $(this), //每个radioWrapEl作为一组
                radioEls = radioWrapEl.find(".ui-radio-inp");
            var checkthis = function(el){
                $(el).parent(".ui-radio-inner").addClass("ui-radio-checked")
            }
            var uncheckthis = function(){
                radioWrapEl.find('.ui-radio-checked').removeClass("ui-radio-checked");
            }

            radioEls.each(function(){
                if($(this).prop("checked")){
                    checkthis(this);
                }
            });
            
            //radioEls.each(function(){
                
            radioEls.change(function(){
                uncheckthis();
                checkthis(this);
            });
            //});
        });
        return this;
    }
    return $;
});