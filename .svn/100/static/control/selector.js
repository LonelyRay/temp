// ui selector daqiu
define(function(require,exports,module){
    $ = require('zepto');
    $.fn.uiseletor=function(){
        this.each(function(){
            //console.log()
            var uiEl = $(this),
                uiTextEl = uiEl.find(".ui-btn-text"),
                defaultVal = uiTextEl.attr('data-tip'),
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
    return $;
});