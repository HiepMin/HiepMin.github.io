
//----------------
//---------------
//JQUERY
//--------------
//--------------
$(function(){

	//XỬ LÍ HIỆU ỨNG KHI CLICK VÀO CÁC NÚT ĐIỀU HƯỚNG
	$(".nav-icon li").click(function(){
		$(".nav-icon li").removeClass("active");
		$(this).toggleClass("active");
		$("header nav").toggleClass('quaylai');
		$(".burger-icon").removeClass("active");
		return false;
	});
	//XỬ LÍ HIỆU ỨNG KHI CLICK VÀO NÚT BURGER
	$(".burger-icon").click(function(){
		$(this).toggleClass("active");
		$(".nav-icon nav").toggleClass("quaylai");
	});



	//XỬ LÍ HIỆU ỨNG KHI CLICK VÀO NÚT CHUYỂN SECTION
	$("i.btn-slider").click(function(){
		$("html,body").animate({scrollTop: $("#about").offset().top - 10}, 2000, "easeInOutExpo");
	});



	//XỬ LÍ HIỆU ỨNG KHI CLICK VÀO CÁC NÚT LINK ĐIỀU HƯỚNG Ở NAVBAR
	$(".nav-icon li a").click(function(){
		event.preventDefault();
		$("html,body").animate({scrollTop: ($(this.hash).offset().top - $(".nav-icon").height() + 20)},2000, "easeInOutExpo");
	});

	//XỬ LÍ HIỆU ỨNG KHI CLICK VÀO CÁC NÚT CONTACT ME Ở PHẦN ABOUT ME
	$(".btn-about").click(function(){
		event.preventDefault();
		$("html,body").animate({scrollTop: $("#contact").offset().top}, 2000, "easeInOutExpo");
	});



	//XỬ LÍ HIỆU ỨNG KHI SCROLL CHUỘT
	var link_dieu_huong = $(".nav-icon li a");
	$(window).scroll(function(){
		var navLocation = $(this).scrollTop() + $("header.nav-icon").height();
		link_dieu_huong.each(function(){
			var sectionOffset = $(this.hash).offset().top;
			if(navLocation >= $("header").height() + 30){
				$("header.nav-icon").addClass("bien_thanh_trang");
				$(".top").addClass("dira");
				if(navLocation >= $("#skill").offset().top -200){
					$(".html").css({width: "91%"});
					$(".css").css({width: "93%"});
					$(".js").css({width: "70%"});
					$(".sass").css({width: "76%"});
					$(".jqu").css({width: "70%"});
					$(".bs").css({width: "80%"});
					$(".progress_value").addClass("sohienra");
				}
			}
			else{
				$(".top").removeClass("dira");
				$("header.nav-icon").removeClass("bien_thanh_trang");
			}
			if ( sectionOffset <= navLocation ) {
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			}
			if(navLocation >= 420){
				$(".title-about").addClass("animated tada");
			}
			if(navLocation >= $("#about").offset().top - 200){
				$(".hinhdaidien").addClass("zoom");
				$(".right h1").addClass("animated fadeInDown");
				$(".right h1 + h3").addClass("animated fadeInDown");
				$(".info li").addClass("animated lightSpeedIn");
				$(".contact li").addClass("animated fadeInUpBig");
				$("a.btn-about").addClass("animated fadeInLeft");
			}
			if(navLocation >= $("#about").offset().top + 300){
				$(".some-detail").addClass("animated lightSpeedIn");
			}
			if(navLocation >= $("#skill").offset().top - 200){
				$(".title-skill").addClass("animated tada");
			}
			if(navLocation >= $("#project").offset().top - 200){
				$(".title-project").addClass("animated tada");
			}
			if(navLocation >= $("#project").offset().top ){
				$(".one-block-project:nth-child(1)").addClass("animated fadeInRight");
				$(".one-block-project:nth-child(2)").addClass("animated fadeInDown");
				$(".one-block-project:nth-child(3)").addClass("animated fadeInRight");
				$(".one-block-project:nth-child(4)").addClass("animated fadeInUp");
			}
			if(navLocation >= $("#contact").offset().top - 200){
				$(".title-contact").addClass("animated tada");
			}
		});
		
	});



	//XỬ LÍ HIỆU ỨNG KHI CLICK VÀO NÚT TOP
	$(".top").click(function(){
		$("html,body").animate({scrollTop: 0}, 2000, "easeInOutExpo");
	});


	//XỬ LÍ HIỆU ỨNG FILTER
	$(".block-btn-filter li.button").click(function(){
		$(".block-btn-filter li.button").removeClass("active");
		$(this).addClass("active");
		var dataFilter =$(this).data("filter");
		var text = $(".block-btn-filter h1").text(dataFilter);
		if(dataFilter == "All"){
			$(".one-block-project").addClass("hidden");
			setTimeout(function(){
				$(".one-block-project").removeClass("hidden");
			}, 500);
		}
		else{
			$(".one-block-project").addClass("hidden");
			setTimeout(function(){
				$("." + dataFilter).removeClass("hidden");
			}, 500);
		}
	});

});


//----------------
//---------------
//JAVASCRIPT
//--------------
//--------------


document.addEventListener("DOMContentLoaded", function(){
	var burger_icon = document.querySelector(".burger-icon"),
		navbar = document.querySelector("header nav"),
		popup = document.querySelectorAll(".popup"),
		eye = document.querySelectorAll("a.fa-eye"),
		arrow = document.querySelectorAll(".arrow"),
		arrow_right = document.querySelector(".arrow-right"),
		arrow_left = document.querySelector(".arrow-left"),
		nenden_project = document.querySelectorAll(".nenden-project"),
		nenden_popup = document.querySelectorAll(".nenden-popup"),
		exit = document.querySelector(".cross"),
		heart = document.querySelectorAll("a.fa-heart");

	//XỬ LÍ HIỆU ỨNG KHI CLICK VÀO NÚT LIKE(TRÁI TIM)
	for(var i = 0; i < heart.length; i++){
		heart[i].onclick = function(){
			this.classList.toggle("dolen");
			event.preventDefault();
		}
	}

	//XỬ LÍ HIỆU ỨNG KHI CLICK VÀO NỀN ĐEN PROJECT
	for(var i = 0; i < nenden_project.length; i++){
		nenden_project[i].onclick = function(){
			var useData = this.getAttribute("data-dulieu");
			var nd_gan = document.querySelector("." + useData);
			for(var h = 0; h < arrow.length;h++){
				arrow[h].classList.add("popup_active");
			}
			exit.classList.add("popup_active");
			for(var j = 0; j < popup.length; j++){
				popup[j].classList.remove("popup_active");
			}
			nd_gan.classList.add("popup_active");
		}
	}

	//XỬ LÍ HIỆU ỨNG KHI CLICK VÀO NÚT EYE TRÊN PROJECT
	for(var i = 0; i < eye.length; i++){
		eye[i].onclick = function(){
			event.preventDefault();
			var useData = this.getAttribute("data-dulieu");
			var nd_gan = document.querySelector("." + useData);
			exit.classList.add("popup_active");
			for(var h = 0; h < arrow.length;h++){
				arrow[h].classList.add("popup_active");
			}
			for(var j = 0; j < popup.length; j++){
				popup[j].classList.remove("popup_active");
			}
			nd_gan.classList.add("popup_active");
		}
	}


	//XỬ LÍ HIỆU ỨNG KHI CLICK VÀO NÚT EXIT
	exit.onclick = function(){
		this.classList.remove("popup_active");
		for(var j = 0; j < popup.length; j++){
			popup[j].classList.remove("popup_active");
		}
		for(var h = 0; h < arrow.length;h++){
			arrow[h].classList.remove("popup_active");
		}
	}


	//XỬ LÍ HIỆU ỨNG KHI CLICK VÀO NỀN ĐEN PROJECT
	for(var i = 0; i < nenden_popup.length; i++){
		nenden_popup[i].onclick = function(){
			exit.classList.remove("popup_active");
			for(var j = 0; j < popup.length; j++){
				popup[j].classList.remove("popup_active");
			}
			for(var h = 0; h < arrow.length;h++){
				arrow[h].classList.remove("popup_active");
			}
		}
	}
	//XỬ LÍ HIỆU ỨNG KHI CLICK VÀO NÚT ARROW PROJECT
	var chi_so_active = 0;
	arrow_right.onclick = function(){
		var slide_current = popup[chi_so_active];
		if(chi_so_active < popup.length - 1){chi_so_active++}
		else if(chi_so_active == popup.length - 1){chi_so_active = 0}
		var slide_next = popup[chi_so_active];
		for(var i = 0; i < popup.length; i++){
			popup[i].classList.remove("popup_active");
		}
		slide_current.classList.remove("popup_active");
		slide_next.classList.add("popup_active");
	}
	arrow_left.onclick = function(){
		var slide_current = popup[chi_so_active];
		if(chi_so_active > 0){chi_so_active--}
		else if(chi_so_active == 0){chi_so_active = popup.length - 1}
		var slide_next = popup[chi_so_active];
		for(var i = 0; i < popup.length; i++){
			popup[i].classList.remove("popup_active");
		}
		slide_current.classList.remove("popup_active");
		slide_next.classList.add("popup_active");
	}
	
	
	//XỬ LÍ HIỆU ỨNG TYPING
	window.ityped.init(document.querySelector(".type"),{
		strings:["NGUYEN MINH HIEP","A WEB DESIGNER"],
		backDelay: 1000,
		loop: true,
		showCursor: false,
		typeSpeed: 100,
	});
}, false);