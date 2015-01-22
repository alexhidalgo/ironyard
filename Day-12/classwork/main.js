$(document).ready(onReady);
function onReady() {

	var box = document.getElementById('movingBox');
	console.log(box);

	var rightCounter = 0;
	var topCounter = 0;
	var leftCounter = 0;
	var bottomCounter = 0;

	$(document).keydown(function upArrow(e){
		if(e.keyCode == 39) {
			leftCounter++;
			$('#movingBox').css('left', leftCounter);
			console.log('39 rightCounter left, leftCounter');
		}

		if(e.keyCode == 40) {
			topCounter++;
			$('#movingBox').css('top', topCounter);
		}

		if(e.keyCode == 37) {
			leftCounter--;
			$('#movingBox').css('left', leftCounter);
			console.log('37 leftCounter-- left, leftCounter');
		}

		if(e.keyCode == 38) {
			topCounter--;
			$('#movingBox').css('top', topCounter);
		}

	});

	var clickCounter = topCounter;
	$('#movingBox').click(function(e){
		$('#movingBox').css('top', clickCounter);
	});

}
