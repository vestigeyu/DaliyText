$(function(){
			var i=0;
			var len=$("#scroll ul li").length-1;

			$(".subl").click(function(){
				if(i==len){
					i=-1;
				}
				i++;.
				// alert(i);
				$("#scroll ul li").eq(i).fadeIn().siblings().hide();
				// alert(i);
			});
			// alert(i);

			//到这里分开！上面的是上一张点击的效果代码，下面的是下一张点击的效果代码．
		
			$(".subr").click(function(){//获取类名的点击事件．
				// alert(len);

				if(i==0){
					i=len+1;
					// alert(len); 
				}
				i--;
				alert(i);
				$("#scroll ul li").eq(i).fadeIn().siblings().hide();
			});
		});