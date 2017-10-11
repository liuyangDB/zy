 $(function(){
    $(".baseUI li ul li").css("display","none");//隐藏
    $(".baseUI em").parent().bind("click",function(){
      var li=$(this).siblings().children();
      li.slideDown();//打开
      var lis=$(this).parent().siblings().children("ul").children();
      lis.slideUp();//关闭
     });
    $(".baseUI li ul li").click(function(){//点击变色
      $(this).addClass("current").siblings().removeClass("current");
    });
	
	$(".baseUI li ul li:eq(0)").click(function(){
		$(".right").load("pages/显示题目.html");//显示题目
		})
	$(".baseUI li ul:eq(0) li:eq(0)").trigger('click');
  
  }) 