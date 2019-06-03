$(function(){
	/* accessibillity */
	/* skip nav */
	$(".skip_nav").focusin(function(){
		$(this).animate({top:0}, 200);
	});
	$(".skip_nav").focusout(function(){
		$(this).animate({top:-36}, 200);
	});
	$(".skip_nav").click(function(e){
		e.preventDefault();
		$("#event_zone .title a").focus();
	});
	
	/* header */
		// start: language --> header active add
		// end: GNB last li --> header nonactive
	$("#header").hover(
		function(){
			$(this).addClass("active");
		},
		function(){
			$(this).removeClass("active");
		}
	);
	// focus in
	$(".language dt a").focusin(function(){
		$("#header").addClass("active");
	});
	// focus out
	$("#GNB > ul > li:last-child").find("li").last().focusout(function(){
		$("#header").removeClass("active");
	});
	
	/* event */
	$("#event_zone .title a").click(function(e){
		e.preventDefault();
	});
	$("#event_zone .title a").focusout(function(){
		$(".ev_contents .cont.first").addClass("active");
		$(".ev_contents .cont.first a").focus();
	});
	
	$(".ev_contents .cont a").click(function(e){
		e.preventDefault();
	});
	$(".ev_contents .cont a").focusout(function(){
		if($(this).hasClass("last") == true){
			$(".delivery .banner a").focus();
		}
		else{
			$(this).parent().parent().removeClass("active");
			$(this).parent().parent().next().addClass("active");
			$(this).parent().parent().next().find("a").focus();
		}
	});
	$(".ev_contents .cont").hover(
		function(){
			$(this).addClass("active");
		},
		function(){
			$(this).removeClass("active");
		}
	);
	
	/* join hire */
	$("#join_hire .content").hover(
		function(){
			$(this).addClass("active");
		},
		function(){
			$(this).removeClass("active");
		}	
	);
	$("#join_hire .content a").focusin(function(){
		$(this).parent().addClass("active");
	});
	$("#join_hire .content a").focusout(function(){
		$(this).parent().removeClass("active");
	});
	
	// LNB language
	var txt="KOR"; /* basic */
	
	$(".language dt a").click(function(e){
		e.preventDefault();
		
		if($(".language dd").hasClass("active") == true){
			$(".language dd").removeClass("active");
			$(".language dd").slideUp(300);
			$(".language dt a").text(txt+" ▼");
		}
		else {
			$(".language dd").addClass("active");
			$(".language dd").slideDown(300);
			$(".language dt a").text(txt+" ▲");
		}
	});
	$(".language dl").mouseleave(function(){
		if($(this).find("dd").hasClass("active") == true){
			$(".language dd").removeClass("active");
			$(".language dd").slideUp(300);
			$(".language dt a").text(txt+" ▼");
		}
	});
	$(".language dd a").click(function(e){
		e.preventDefault();
		txt=$(this).text();
		$(".language dt a").text(txt+" ▼");
		$(".language dd").removeClass("active");
		$(".language dd").slideUp(300);
		var n=$(this).parent().index();
		$(".language select option").eq(n).prop({"selected":true});
	});
	
	
	// GNB
	$("#header li").hover(
		function(){
			$("#header li").removeClass("active");
			$(this).addClass("active");
		},
		function(){
			$(this).removeClass("active");
		}
	);
	$("#header li").focusin(function(){
		$(this).addClass("active");
	});
	$("#header li").focusout(function(){
		$(this).removeClass("active");
	});
	
	$("#header li").children().focusin(function(){
		$(this).addClass("active");
	});
	
	$("#header li a").hover(
		function(){
			$(this).addClass("active");
		},
		function(){
			$(this).removeClass("active");
		}
	);
	
	$("#header li a").focusin(function(){
		$(this).addClass("active");
	});
	$("#header li a").focusout(function(){
		$(this).removeClass("active");
	});
	
});