(function($){
    $.fn.setScrollAnim=function(upOrDown,verOffset){//upOrdown true:pageDown false:pageUp inOrOut true:in
        var self;
        self=this;
        if(verOffset>2){//代表是以px做scroll位置的判斷
            if(upOrDown){//加入元素動畫
                $(window).scroll(function(){//由上往下滑頁面進入元素
                    if($(window).scrollTop()+$(window).height()-verOffset>self.offset().top &&  $(window).scrollTop()<self.offset().top)
                    self.addClass('animEndOrigin');//由下往上滑頁面進入元素
                    else if($(window).scrollTop()-verOffset<self.offset().top && $(window).scrollTop()+$(window).height()>self.offset().top)
                    self.addClass('animEndOrigin');
                });
            }
            else{//移除元素動畫
                $(window).scroll(function(){
                    if($(window).scrollTop()+$(window).height()-verOffset<self.offset().top &&  $(window).scrollTop()<self.offset().top)
                    self.removeClass('animEndOrigin');
                    else if($(window).scrollTop()+verOffset>self.offset().top && $(window).scrollTop()+$(window).height()>self.offset().top)
                    self.removeClass('animEndOrigin');
                });
            }
        }
        else{//以%數做判斷
            if(upOrDown){
                $(window).scroll(function(){
                    if($(window).scrollTop()+$(window).height()*(1-verOffset)>self.offset().top &&  $(window).scrollTop()<self.offset().top)
                    self.addClass('animEndOrigin');
                    else if($(window).scrollTop()<self.offset().top && $(window).scrollTop()+$(window).height()>self.offset().top)
                    self.addClass('animEndOrigin');
                });
            }
            else{
                $(window).scroll(function(){
                    if($(window).scrollTop()+$(window).height()*(1-verOffset)<self.offset().top &&  $(window).scrollTop()<self.offset().top)
                    self.removeClass('animEndOrigin');
                    else if($(window).scrollTop()>self.offset().top && $(window).scrollTop()+$(window).height()>self.offset().top)
                    self.removeClass('animEndOrigin');
                });
            }
        }
    }
    $.fn.disableSelection = function() {
        return this
            .attr('unselectable', 'on')
            .css('user-select', 'none')
            .on('selectstart', false);
    }
})(jQuery);

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready(function(){
    $('body').disableSelection();
    //畫面載入時就要出現的動畫
    setTimeout(function(){
        $('.main-image').addClass('animEndOrigin');
    },500);
    for(var i=1;i<5;i++)
    $('.section3-col'+i).setScrollAnim(true,0.2);
    var self=$('#user');
    $(window).scroll(function(){
       if($(window).scrollTop()+$(window).height()*(1-0.1)>self.offset().top &&  $(window).scrollTop()<self.offset().top && !self.hasClass('active')){
            new CountUp("val1",0,804).start();
            new CountUp("val2",0,706).start();
            new CountUp("val3",0,34).start();
       }
       setTimeout(function(){
        self.addClass('active');
       },2000)
    });

});
