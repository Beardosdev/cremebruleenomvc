$(function()
{	

	var count = 0;

	//Mobile Menu Code
	$(".menu-icon").click(function()
	{
	    if (count == 0)
        {
	        $(".my-nav").animate({ right: 0 }, 300);

	        $(".close").fadeIn(400);
		
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
		    $("body").css({ "overflow": "hidden" });

		    count++;
	    }
	    else
	    {
	        $(".my-nav").animate({ right: -320 }, 300);

	        $(".close").fadeOut(300);

	        $(".menu-icon").css({ "background-color": "#1d1d1d" });
	        $(".menu-icon").css({ "box-shadow": "-5px 0 5px 5px rgba(0,0,0,0.5)" });
	        $(".menu-icon").css({ "-webkit-box-shadow:": "-5px 0 5px 5px rgba(0,0,0,0.5)" });
	        $(".menu-icon").css({ "border": "solid 1px #c5b358" });
	        $(".bar").css({ "background-color": "#fafafa" });


	        // Rotate first bar
	        $(".bar1").css({ "-webkit-transform": "rotate(0deg) translate(0, 0)" });
	        $(".bar1").css({ "transform": "rotate(0deg) translate(0, 0)" });

	        // Rotate third bar
	        $(".bar3").css({ "-webkit-transform": "rotate(0deg) translate(0, 0)" });
	        $(".bar3").css({ "transform": "rotate(0deg) translate(0, 0)" });

	        //Fade second bar
	        $(".bar2").css({ "opacity": "1" });

	        //Disable Scroll
	        $("body").css({ "overflow": "hidden" });

	        count = 0;
	    }
	});
});