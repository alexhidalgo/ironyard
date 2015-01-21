/* jshint devel:true */
'use strict';
$( document ).ready(function() {

	// $( '#arrow-up' ).click(function() {
 //  	var scrolPos = $('#header').scrollTop();
 //  	$('#arrow-up').scrollTop(scrolPos + 100);
 //  	console.log(scrolPos);
	// });

	$('#arrow-up').click(function(){
    $("html, .nav-pills").animate({ scrollTop: 0 }, 600);
    return false;
});

});
