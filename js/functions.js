jQuery(function($){
    $(' .header .icon,.sidebar-parent .mask').click( function (){
        var $sidebar = $('.sidebar-parent:visible');
        $sidebar.toggleClass('active');
        if ($sidebar.hasClass('active')) {
            //侧栏展开
            $('#index,.header').animate({left:'60%','overflow-x':'hidden'});
            $sidebar.animate({left:'0',zIndex:100});
            $('.sidebar-parent .mask').show();
            $('html').css("overflow","hidden");
            //禁止滚动
            $('body').bind('touchmove',function(e) {e.preventDefault(); });
        }else {
            //侧栏折叠
            $('#index,.header').animate({left:'0'});
            $sidebar.animate({left:'-60%',zIndex:-99});
            $('.sidebar-parent .mask').hide();
            $('html').css("overflow","auto");
            //恢复滚动
            $('body').unbind('touchmove');
        }
    });


});