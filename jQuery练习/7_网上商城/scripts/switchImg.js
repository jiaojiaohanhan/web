/* 点击左侧产品小图片切换大图 */
$(function(){
	$(".imgList li a").bind("click",function(){
		  var imgSrc = $(this).find("img").attr("src");
		  var i = imgSrc.lastIndexOf(".");
		  var unit = imgSrc.substring(i);
		  imgSrc = imgSrc.substring(0,i);
		  var imgSrc_big = imgSrc + "_big"+ unit;
		  var imgSrc_small = imgSrc + "_small"+ unit;
		  $("#thickImg").attr("href" , imgSrc_big);
		  $("#bigImg").attr("src", imgSrc_small);
	});
    // $('.imgList li img').on('click',function(){
    //     //images/pro_img/yellow_two.jpg  ==> images/pro_img/yellow_two_small.jpg
    //     var $src = $(this).attr('src');//images/pro_img/yellow_two.jpg
    //     var i = $src.indexOf('.');
    //     var $path = $src.substring(0,i)//images/pro_img/yellow_two
    //     var format = $src.substring(i);//.jpg
    //     $('#bigImg').attr('src',$path+'_small'+format);
    // });
});