(function ($) {
        jQuery.event.special.aclick= {
                /**
                 * 初始化事件处理器 - this指向元素
                 * @param 附加的数据
                 * @param 事件类型命名空间
                 * @param 回调函数
                 */
                setup: function (data, namespaces, eventHandle) {
                        var elem = this;
                        $.event.add(elem, 'touchend', function (event) {
                                $.event.trigger('input', null, this);          
                        });
                },
                /**
                 * 卸载事件处理器 - this指向元素
                 * @param 事件类型命名空间
                 */
                teardown: function (namespaces) {
                        var elem = this;
                        $.event.remove(elem, 'touchend');
                }
        };
        $.fn.aclick = function (callback) {
                return this.bind('input', callback);
        };
})(jQuery);