(function($){
	$.fn.mobileDragEvent4=function(options){
		options=$.extend({
			total: 3
		}, options);

		return this.each(function(){
			var $keyvisual=$(this); // 이벤트 대상입니다.
			var $total=$(options.total)[0]; // 갤러리의 개수를 지정할 변수입니다.
			var w; // 윈도우의 가로 크기를 지정하는 변수입니다.
			var h; // 윈도우의 세로 크기를 지정하는 변수입니다.
			var previmgw; // 이미지의 원래 가로 크기 변수입니다.
			var previmgh; // 이미지의 원래 세로 크기 변수입니다.
			var imgw; // 윈도우의 세로 크기에 따른 이미지의 가로 크기 변수입니다.
			var n=0; // 갤러리의 변수를 지정할 추가 변수입니다.
			var amount=0; // 갤러리의 메인 번호를 지정할 변수입니다.
			var moving=false; // 현재 움직이고 있는지 아닌지를 점검할 변수입니다. true이면 또 다른 이벤트 동작이 구현되지 않습니다.
			var xDown=null; // 모바일 드래그 이벤트의 가로 지정 변수입니다.
			var yDown=null; // 모바일 드래그 이벤트의 세로 지정 변수입니다.
			var direction=""; // 모바일 드래그 이벤트의 방향 지정 변수입니다.
			$(".controller li").eq(n).addClass("active"); // 추가되는 코드입니다.

			w=$(window).width();
			h=$(window).height();
			previmgw=$(".gallery img").width();
			previmgh=$(".gallery img").height();
			imgw=previmgw*h/previmgh; // 1280:800=imgw:h
			$(".gallery").css({width:w*$total});
			$(".gallery li").css({width:$(".gallery").width()/$total, height:h});
			$(".gallery img").css({width:imgw, height:h, marginLeft:-(imgw/2)});
			descriptionAPI();
			//$(window).trigger("resize");

			$(".left").click(function(e){ // 오른쪽으로 이동합니다.
				e.preventDefault();
				if(moving){
					return;
				}
				amount-=w;
				moving=true;

				if(n > 0){ // 추가되는 코드입니다.
					n--;
				}
				else{
					n=($total-1);
				}
				$(".controller li").removeClass("active");
				$(".controller li").eq(n).addClass("active");
				descriptionAPI();

				$(".gallery").css({left:amount});
				$(".gallery").prepend($(".gallery li").last());
				amount+=w;

				$(".gallery").animate({left:amount}, 500, function(){
					moving=false;
				});
			});
			$(".right").click(function(e){ // 왼쪽으로 이동합니다.
				e.preventDefault();
				if(moving){
					return;
				}
				amount-=w;
				moving=true;

				if(n < ($total-1)){ // 추가되는 코드입니다.
					n++;
				}
				else{
					n=0;
				}
				$(".controller li").removeClass("active");
				$(".controller li").eq(n).addClass("active");
				descriptionAPI();

				$(".gallery").animate({left:amount}, 500, function(){
					moving=false;
					amount+=w;
					$(this).css({left:amount});
					$(this).append($(".gallery li").first());
				});
			});
			$keyvisual.on("touchstart", function(e){
				var evt=e.originalEvent;
				clearInterval(id); // 추가되는 코드입니다.
				xDown=evt.touches[0].clientX;
				yDown=evt.touches[0].clientY;
			});
			$(".keyvisual").on("touchend", function(e){ // 추가되는 코드입니다.
				id=setInterval(function(){
					$(".right").trigger("click");
				}, 6000);
			});
			$keyvisual.on("touchmove", function(e){
				if(moving){
					return;
				}
				var evt=e.originalEvent;
				swipe(evt);

				if(direction == "left"){
					$(".right").trigger("click");
				}
				else if(direction == "right"){
					$(".left").trigger("click");
				}
			});
			var id=setInterval(function(){ // 추가되는 코드입니다.
				$(".right").trigger("click");
			}, 6000);

			// swipe API
			function swipe(evt){
				if(!xDown || !yDown){
					return;
				}
				var xUp=evt.touches[0].clientX;
				var yUp=evt.touches[0].clientY;
				var xDiff=xDown-xUp;
				var yDiff=yDown-yUp;

				if(Math.abs(xDiff) > Math.abs(yDiff)){
					if(xDiff > 0){
						// left swipe
						direction="left";
					}else{
						// right swipe
						direction="right";
					}
				}else{
					if(yDiff > 0){
						// up swipe
					}else{
						// down swipe
					}
				}
				xDown=null;
				yDown=null;
			}

			// description API
			function descriptionAPI(){
				$(".description li").each(function(i){
					if(i == n){
						$(this).addClass("active");
						$(this).find("span").stop().animate({width:"100%"}, 5800);
					}
					else{
						$(this).removeClass("active");
						$(this).find("span").stop().animate({width:0}, 0);
					}
				});
			}
		});
	}
})(jQuery);