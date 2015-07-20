$(document).ready(function() {

// slider
	$('.tp-banner').revolution({	
			navigationType:"none",
			navigationArrows:"solo",
			navigationStyle:"preview1",

			delay:2000,
			startwidth:1170,
			startheight:500,
			hideThumbs:10,
			fullWidth:"off",
			fullScreen:"on",
			fullScreenOffsetContainer: ""

		});
// Owl Hover Effect
	$('.post img').addClass('image-fade hover')
	

// Owl Update : News, Event, Promo, Update, E-sport
	$("#owl-news, #owl-event, #owl-promo, #owl-update, #owl-Esport").owlCarousel({
		navigation:true,
		items:5,
	    loop:true,
	    autoplay:true,
	    autoplayTimeout:900,
	    autoplayHoverPause:true
	});


});	