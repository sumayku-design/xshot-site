$(document).ready(function() {
// slider
	var revapi = $('.tp-banner').revolution(
		{	
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
// Owl Update : News, Event, Promo, Update, E-sport
	var upDate = $("#owl-update").owlCarousel({
			navigation : true
		});


});	