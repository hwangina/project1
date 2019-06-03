$(function(){
	//키비주얼
	$('.owl-keyvisual').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	$('.owl-keyvisual').trigger("refresh.owl.carousel");
	
	var n=0;
	
	$(".menu_index li").click(function(){
		$(".menu_index li").removeClass("active");
		$(this).addClass("active");
		
		n=$(this).index();
		
		$(".menu_contents li").removeClass("active");
		$(".menu_contents li").eq(n).addClass("active");
	});

	
	//메뉴
	$('.owl-phonoodle').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:4
			},
			1000:{
				items:4
			}
			
		}
	});
	$('.owl-phonoodle').trigger("refresh.owl.carousel");
	
	$('.owl-friedrice').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:4
			},
			1000:{
				items:4
			}
			
		}
	});
	$('.owl-friedrice').trigger("refresh.owl.carousel");
	
	$('.owl-specialmenu').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:4
			},
			1000:{
				items:4
			}
			
		}
	});
	$('.owl-specialmenu').trigger("refresh.owl.carousel");
	
	$('.owl-appetizer').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:4
			},
			1000:{
				items:4
			}
		}
	});
	$('.owl-appetizer').trigger("refresh.owl.carousel");
});