var pages = new SpaAni(".section", ".ani", 300);

$(".section").eq(3).mousemove(function(e){
    var delta=50;
    var cX=e.clientX;
    var cY=e.clientY;
    var iX=$(this).find(".chair").width()/2;
    var iY=$(this).find(".chair").height()/2;

    var mX=(iX - cX)/delta;
    var mY=(iY - cY)/delta;
    $(this).find(".chair").css("transform", "translate("+ mX +"px, "+mY+"px)");
});