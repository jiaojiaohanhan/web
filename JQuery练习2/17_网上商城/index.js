/**
 * Created by l on 2017/12/3.
 */
$(function () {
    //搜索栏
    $("#inputSearch").on("focus",function(){
        $(this).addClass("focus");
        if($(this).val() ==this.defaultValue){
            $(this).val("");
        }
    }).on("blur",function(){
        $(this).removeClass("focus");
        if ($(this).val() == '') {
            $(this).val(this.defaultValue);
        }
    });
    //换肤
    var $skin = $.cookie("mySkin")||"skin_0";
    $("#skin li").on("click",function () {
        $(this).addClass("selected").siblings().removeClass("selected");
        $skin = $(this).attr("id");
        $("#cssfile").attr("href","styles/skin/"+ $skin +".css");
        $.cookie("mySkin",$skin,{expires:7})
    });
    $("#"+$skin).trigger("click");
    //导航
    $("#nav li").on("mouseover",function () {
        $(this).find(".jnNav").show();
    }).on("mouseout",function () {
        $(this).find(".jnNav").hide();
    });
    // $("#nav li").hover(function(){
    //     $(this).find(".jnNav").show();
    // },function(){
    //     $(this).find(".jnNav").hide();
    // });
    //大屏广告
    var prevIdx = -1;
    var timer;
    $("#jnBtn a").on("mouseover",function () {
        $(this).addClass("chos").siblings().removeClass("chos");
        $("#JS_imgWrap img").eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();
        prevIdx = $(this).index();
    });
    run();
    function run() {
        timer = setInterval(function () {
            prevIdx++;
            if (prevIdx == $("#JS_imgWrap img").length){
                prevIdx=0;
            }
            $("#jnBtn a").eq(prevIdx).triggerHandler("mouseover");
        },2000);
    };
    $("#jnImageroll").on("mouseover",function () {
        clearInterval(timer);
    }).on("mouseout",function () {
        run();
    });
    //最新动态
    $(".tooltip").on("mouseover",function (e) {
        this.currTitle = this.title;
        $("<div id='tip'>"+this.currTitle+"</div>").appendTo("body").offset({
            left:e.pageX+20,
            top:e.pageY+20
        });
        $(this).attr("title","");
    }).on("mousemove",function (e) {
        $("#tip").offset({
            left:e.pageX+20,
            top:e.pageY+20
        });
    }).on("mouseout",function () {
        $("#tip").remove();
        $(this).attr("title",this.currTitle);
    });
})
