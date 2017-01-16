$(function()
{	

	var count = 0;

	//Mobile Menu Code
	$(".menu-icon").click(function()
	{	
		$(".my-nav").animate({right:0}, 300);
		
		$(".menu-icon").css({"background-color": "#fafafa"});
		$(".menu-icon").css({"box-shadow": "none"});
		$(".menu-icon").css({"-webkit-box-shadow:": "none"});
		$(".menu-icon").css({"border": "none"});  
		$(".bar").css({"background-color": "#5f5f5f"});


		// Rotate first bar
		$(".bar1").css({"-webkit-transform": "rotate(-45deg) translate(-9px, 6px)"});
		$(".bar1").css({"transform": "rotate(-45deg) translate(-9px, 6px)"});

		// Rotate third bar
		$(".bar3").css({"-webkit-transform": "rotate(45deg) translate(-5px, -2px)"});
		$(".bar3").css({"transform": "rotate(45deg) translate(-5px, -2px)"});

		//Fade second bar
		$(".bar2").css({"opacity": "0"});

		//Disable Scroll
		$("body").css({"overflow":"hidden"});
	});
});