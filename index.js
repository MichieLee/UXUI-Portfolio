$(".left-nav-list ul a:first > li").on("mouseover", function() {
	if ($(this).css("color") == "rgb(255, 202, 248)") {
		$(".left-nav-list ul a:first > li").css("font-size", "40px");
	}
});

$(".left-nav-list ul a:first li").on("mouseleave", function() {
	if ($(".work-menu:hover").length == 0) {
		$(this).css("font-size", "30px");
	}
});

$(".work-menu li").on("mouseover", function() {
	$(this).css("font-size", "30px");
});

$(".work-menu li").on("mouseleave", function() {
	$(this).css("font-size", "20px");
});

$(".left-nav-list ul a:first li").on("click", function() {
	if ($(this).css("color") == "rgb(255, 202, 248)") {
		$(this).css({"color": "rgb(156, 232, 238)", "font-size": "30px"});
		$(".work-menu").slideDown("slow");
		$(".work-menu li").on("click", function() {
		    $('html, body').animate({
		        scrollTop: $(".card-1:nth-child(" + ($(this).text()[$(this).text().length - 1]) + ")").offset().top
		    }, 500);
    		$(".left-nav-list ul a:first li").css("color", "rgb(255, 202, 248)");
			$(".work-menu").slideUp("slow");
		});
	} else if ($(this).css("color") == "rgb(156, 232, 238)") {
		$(this).css("color", "rgb(255, 202, 248)");
		$(".work-menu").slideUp("slow");
	}
});

$(".work-menu").on("mouseleave", function() {
	$(this).css("font-size", "30px");
});

$(".hamburger").on("hamburger-menu-display:toggle", function() {
	var image = $(".hamburger-button img");
	var menu = $(".hamburger-menu");
	if (image.attr("src") == "Images\\Hamburger.png") {
		image.attr("src", "Images\\akar-icons_circle-x.png");
		menu.slideDown("slow");
	} else if (image.attr("src") == "Images\\akar-icons_circle-x.png") {
		image.attr("src", "Images\\Hamburger.png");
		menu.slideUp("slow");
		$(".hamburger-menu .project-items li").remove();
	}
});

$(".hamburger-button img").on("click", function() {
	$(".hamburger").trigger("hamburger-menu-display:toggle");
});

$(".hamburger-menu li:first").on("click", function() {
	if ($(".project-items li").length == 0) {
		var projectItems = "<li>proj1</li><li>proj2</li><li>proj3</li>";
		$(".project-items").append(projectItems);
		$(".project-items").slideDown("slow");
	} else if ($(".project-items li").length != 0) {
		$(".hamburger-menu .project-items").slideUp("slow");
		$(".hamburger-menu .project-items li").remove();
	}
});