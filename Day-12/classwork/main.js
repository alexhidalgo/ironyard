$(document).ready(onReady);
function onReady() {
	//Build moving box function that depends on arrow keys for positioning.

	//Create a div

	//create a event.keydown function for the div
	// $('#movBox').keydown(function(e){
	// 	$('#movBox')
	// });

	$(window).keyup(onKeyUp);
	function onKeyUp(e) {
		if(e.which === 27) {
			$('#movBox').css('padding-left', '10px');
		}
	}
	// console.log(e.which);
	// console.log($(window).width());
	// }

// 	var vanillaSelector = document.getElementById('movBox');
// 	vanillaSelector.addEventListener('click', onDivArrow);

// 	function onDivArrow() {
// 	console.log('the box was clicked');

// }

// 	$('#movBox').keydown(onDivArrow);

	// $("#movBox").keyup(function(){
	// 	$("movBox").css("padding-left", "10px");
	// });

	// var movDiv = document.getElementById('movBox');
	// movDiv.addEventListener('keyup');

}
