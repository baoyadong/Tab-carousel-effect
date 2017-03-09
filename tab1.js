;$(function(){
	var timer=null;
    var num = 0;
    $('#title li').hover(function(){
    	var index = $(this).index();
    	if (timer) {clearTimeout(timer);}
    	change(index);
    	
    },function(){
    	timer = setInterval(autoplay,1000)

    });
    timer = setInterval(autoplay,1000);
    function autoplay(){
    	num ++;
    	if (num >= $('#title li').length) {num =0;}
        change(num);
    }

    function change(curindex){
    	$('#title li').eq(curindex).addClass('here').siblings().removeClass('here');
    	$('#item .item').eq(curindex).css('display','block').siblings().css('display','none');
    	num = curindex;
    }
 
})