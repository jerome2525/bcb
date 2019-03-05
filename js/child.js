jQuery(document).ready(function($){
	$('.header-row .pp-advanced-menu-mobile-toggle-label').prependTo('.header-row .hamburger-label'); 

	mobile_menu_height();
	mobile_menu_height_click();

	$('.pp-menu-close-btn').click(function(e) {
		$('.header-row, .hero-row').removeClass('overlay-row');
	});

	$('.pp-clear').click(function(e) {
		$('.header-row, .hero-row').removeClass('overlay-row');
	});
  
  	$( window ).resize(function() {
  		mobile_menu_height();
  		mobile_menu_height_click();
  	});

  	$('.pp-announcement-bar-wrap .pp-announcement-bar-close-button .pp-close-button').click(function(e) {
  		e.preventDefault();
  		$('.header-row').addClass('decrease-padding');
  		$('.fl-module-pp-announcement-bar').hide();
  	});

  	function mobile_menu_height_click() {
  		$('.pp-advanced-menu-mobile-toggle').click(function(e) {
			e.preventDefault();
			$('.header-row, .hero-row').addClass('overlay-row');
			$('.pp-off-canvas-menu .social-module').remove();
			$('.social-module').clone().appendTo('.pp-off-canvas-menu');
			var heroHeight  = $('.hero-row').outerHeight();
			var barHeight = $('.fl-module-pp-announcement-bar .pp-announcement-bar-wrap').outerHeight();
			var combineHeight = parseInt(heroHeight) + parseInt(barHeight);
	  		$('.fl-builder .pp-advanced-menu .pp-off-canvas-menu').css( 'height', combineHeight);
		});
  	}

  	function mobile_menu_height() {
		var heroHeight  = $('.hero-row').outerHeight();
		var barHeight = $('.fl-module-pp-announcement-bar .pp-announcement-bar-wrap').outerHeight();
  		var combineHeight = parseInt(heroHeight) + parseInt(barHeight);
  		$('.fl-builder .pp-advanced-menu .pp-off-canvas-menu').css( 'height', combineHeight );
  	}

});


