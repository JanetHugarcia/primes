
$(document).ready(function(){
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 100){
			$('.menu').addClass('menu-fixed');
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	});
 
});