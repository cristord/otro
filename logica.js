$( document ).bind( "pageinit", function() {
	$.support.cors = true;
	$.mobile.buttonMarkup.hoverDelay = true;
	$( ".gotop" ).click(function() {
		$.mobile.silentScroll(0);
	});
	miid = "home";
	$("#principal").html($("#div-"+miid).html());
	$("#"+miid).css("background","#153F23");
	$( ".menues" ).click(function() {
		if(miid!=this.id) {
			$.mobile.silentScroll(0);
			$("#"+miid).css("background","");
			miid = this.id;
			$("#"+miid).css("background","#153F23");
			$("#principal").slideUp(400,function(){ 
				$("#principal").html($("#div-"+miid).html());
			}).slideDown();
		}
	});

	$( ".opciones" ).click(function() {
		$.mobile.silentScroll($(document).height())

	});
});
