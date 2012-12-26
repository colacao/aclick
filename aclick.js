(function ($) {
        jQuery.event.special.aclick = {
                /**
                 * 初始化事件处理器 - this指向元素
                 * @param 附加的数据
                 * @param 事件类型命名空间
                 * @param 回调函数
                 */
                setup: function (data, namespaces, eventHandle) {
                        var elem = this;
                        $.event.add(elem, 'touchend', function (e) {
                                var el = e.target;
                                if(jQuery.event.special.aclick.tag){
                                        $.event.trigger('touchend', null, el);  
                                }
                                jQuery.event.special.aclick.tag = null;     
                        });
                },
                /**
                 * 卸载事件处理器 - this指向元素
                 * @param 事件类型命名空间
                 */
                teardown: function (namespaces) {
                        var elem = this;
                        $.event.remove(elem, 'touchend');
                },
                tag:null
        };
        document.body.addEventListener('touchstart', function(e) {
                jQuery.event.special.aclick.tag = e.target;
        }, false);
        document.body.addEventListener('touchmove', function(e) {
                jQuery.event.special.aclick.tag = null;
        }, false);
        $.fn.aclick = function (callback) {
                return this.bind('input', callback);
        };
})(jQuery);