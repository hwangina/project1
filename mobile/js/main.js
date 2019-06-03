$(function(){
	var w; // window width
	var h; // windoh height
	
	w=$(window).width();
	h=$(window).height();
	
	// css as-set
	$(".keyvisual").css({"width":w});
	$(".keyvisual").css({"height":h});
	$(".gallery li").css({"width":w});
	$(".gallery li").css({"height":h});
	// base set-up
	if(w > h){
		$(".gallery li:first-child").css({"background":"url(images/main_visual_wrap_landscape_01.jpg) no-repeat center center"});
		$(".gallery li:nth-child(2)").css({"background":"url(images/main_visual_wrap_landscape_02.jpg) no-repeat center center"});
		$(".gallery li:last-child").css({"background":"url(images/main_visual_wrap_landscape_03.jpg) no-repeat center center"});
		$(".gallery li").css({"background-size":"cover"});
		$(".scroll").hide();
	}else{
		$(".gallery li:first-child").css({"background":"url(images/main_visual_wrap_01.jpg) no-repeat center center"});
		$(".gallery li:nth-child(2)").css({"background":"url(images/main_visual_wrap_02.jpg) no-repeat center center"});
		$(".gallery li:last-child").css({"background":"url(images/main_visual_wrap_03.jpg) no-repeat center center"});
		$(".gallery li").css({"background-size":"cover"});
	}
	$(window).resize(function(){ // keyvisual landscape
		if(w > h){
			$(".keyvisual .image li:first-child").css({"background":"url(images/main_visual_wrap_landscape_01.jpg) no-repeat center center"});
			$(".keyvisual .image li:nth-child(2)").css({"background":"url(images/main_visual_wrap_landscape_02.jpg) no-repeat center center"});
			$(".keyvisual .image li:last-child").css({"background":"url(images/main_visual_wrap_landscape_03.jpg) no-repeat center center"});
			$(".gallery li").css({"background-size":"cover"});
		}else{
			$(".keyvisual .image li:first-child").css({"background":"url(images/main_visual_wrap_01.jpg) no-repeat center center"});
			$(".keyvisual .image li:nth-child(2)").css({"background":"url(images/main_visual_wrap_02.jpg) no-repeat center center"});
			$(".keyvisual .image li:last-child").css({"background":"url(images/main_visual_wrap_03.jpg) no-repeat center center"});
			$(".gallery li").css({"background-size":"cover"});
		}
		location.reload();
	});
	
	$("a").click(function(e){
		if($(this).attr("href") == ""){
			e.preventDefault();
		}
	});
	
	// MENU
	// tab menu OPEN
	$(".tab").click(function(){
		$("#GNB").addClass("active");
		$(".dim").fadeIn(300);
		$(".header_base").hide();
		$("body").addClass("static");
		// search
		if($(".search_focus").hasClass("active")){
			$(".dim").css({"top":0});
			$(".search_focus").removeClass("active");
			$(".search").removeClass("active");
		}
	});
	// tab menu CLOSE
	$(".menu_close").click(function(){
		$("#GNB").removeClass("active");
		$(".dim").fadeOut(300);
		$(".header_base").show();
		$("body").removeClass("static");
		// depth recover
		$(".menu li").removeClass("active");
		$(".menu li ul").hide();
	});
	$(".dim").click(function(){
		$(".menu_close").trigger("click");
	});
	// 2depth show
	$(".menu > li").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(this).children("ul").slideUp(300);
		}else{
			$(".menu > li").removeClass("active");
			$(this).addClass("active");
			$(".menu ul").slideUp(300);
			$(this).children("ul").slideDown(300);
		}
	});
	// MENU
	//-----------------------------------------//
	// SEARCH
	// search OPEN
	$(".search").click(function(){
		$(".search_focus").addClass("active");
		$(this).addClass("active");
		$(".dim").css({"top":"122px"});
		$(".dim").fadeIn(300);
	});
	//search close
	$(".search_close").click(function(){
		$(".search").removeClass("active");
		$(this).parent("div").removeClass("active");
		$(".dim").css({"top":0});
		$(".dim").fadeOut(300);
		$(".search_focus input").val(""); // input 초기화
	});
	$(".dim").click(function(){
		$(".search_close").trigger("click");
	});
	//-----------------------------------------//
	// SELECT
	$("#footer .select dt a").click(function(){
		$(this).toggleClass("open");
		$(this).parent().next().slideToggle(200);
	});
	var txt="";
	var n;
	$("#footer .select dd a").click(function(){
		txt=$(this).text();
		$(".select dd").slideUp(200);
		$("#footer .select dt a").text(txt);
		$("#footer .select dt a").removeClass("open");
		n=$(this).parent().index();
		$("select option").eq(n).prop({"selected" : true});
	});
	//-----------------------------------------//
	// TO TOP
	$(".to_top a").click(function(){
		$("html, body").stop().animate({scrollTop:0}, 500)
	});
});