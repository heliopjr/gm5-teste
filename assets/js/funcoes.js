// JavaScript Document

$(document).ready(function(){				

  // Controles de exibição do menu mobile	
    $("#abremenu").click(function () {
	    $("#abremenu").toggleClass('menu-aberto');
	    $('body').toggleClass('menu-active');
	});	
})