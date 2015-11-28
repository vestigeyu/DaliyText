// 轮播图效果 
jQuery(".fullSlide").hover(function() {
    jQuery(this).find(".prev,.next").stop(true, true).fadeTo("show", 0.5)
},
function() {
    jQuery(this).find(".prev,.next").fadeOut()
});
jQuery(".fullSlide").slide({
    titCell: ".hd ul",
    mainCell: ".bd ul",
    effect: "fold",
    autoPlay: true,
    autoPage: true,
    trigger: "click",
    startFun: function(i) {
        var curLi = jQuery(".fullSlide .bd li").eq(i);
        if ( !! curLi.attr("_src")) {
            curLi.css("background-image", curLi.attr("_src")).removeAttr("_src")
        }
    }
});
// 轮播图效果 

// 公告通知效果
(function (win){
    var callboarTimer;
    var callboard = $('#callboard');
    var callboardUl = callboard.find('ul');
    var callboardLi = callboard.find('li');
    var liLen = callboard.find('li').length;
    var initHeight = callboardLi.first().outerHeight(true);
    win.autoAnimation = function (){
    if (liLen <= 1) return;
        var self = arguments.callee;
        var callboardLiFirst = callboard.find('li').first();
        callboardLiFirst.animate({
        marginTop:-initHeight
        }, 500, function (){
            clearTimeout(callboarTimer);
            callboardLiFirst.appendTo(callboardUl).css({marginTop:0});
            callboarTimer = setTimeout(self, 5000);
        });
    }
    callboard.mouseenter(
    function (){
        clearTimeout(callboarTimer);
    }).mouseleave(function (){
        callboarTimer = setTimeout(win.autoAnimation, 5000);
    });
}(window));
setTimeout(window.autoAnimation, 5000); 
// 公告通知效果