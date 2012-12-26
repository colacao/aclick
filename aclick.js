/*
手机端html5里的click事件响应在2-300ms，该js为加快click的响应时间，以jquery的事件机制状封装
 */
;(function ($) {
        jQuery.event.special.aclick= {
                setup: function (data, namespaces, eventHandle) {
                        var elem = this;
                        $.event.add(elem, 'touchend', function (e) {
                                var el = e.target;
                                if(jQuery.event.special.aclick.tag){
                                        jQuery.event.trigger('aclick', null, el);  
                                }
                                jQuery.event.special.aclick.tag = null;     
                        });
                },
                teardown: function (namespaces) {
                        var elem = this;
                        jQuery.event.remove(elem, 'aclick');
                },
                tag:null
        };
        jQuery(function(){
                document.documentElement.addEventListener('touchstart', function(e) {
                        jQuery.event.special.aclick.tag = e.target;
                }, false);
                document.documentElement.addEventListener('touchmove', function(e) {
                        jQuery.event.special.aclick.tag = null;
                }, false);            
        })
        
        jQuery.fn.aclick = function (callback) {
                return this.bind('aclick', callback);
        };
})(jQuery);