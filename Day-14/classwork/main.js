$(document).ready(onReady);

function onReady() {
	// // 1. Event listener
	// $('#search-button').on('click', onSearchButtonClick);

	// function onSearchButtonClick() {
	// 	// 1. Input value
	// 	console.log($('#search-box').val());
	// }


	// var myName = 'Aaron';
	// var myNewHtml = 'Hi there, <strong>'+myName+'</strong>. How\'s your day going?';
	// $('#results').html(myNewHtml);

	// var myButton = document.getElementById('search-button');
	// myButton.addEventListener('click', onSearchButtonClick);

	// function onSearchButtonClick() {
	// 	console.log('hey my search button was clicked');
	// }


	function imdbSearch(query) {

		$.get(
			'http://www.omdbapi.com',
			{
				s: query
				// y: year,
				// type: type,
				// tomatoes: tomatoes
			},
			onSearchResults,
			'json'
		);
	}

	function tomatoMeter(x) {

		$.get(
			'http://www.omdbapi.com',
			{
				i: x,
				tomatoes: true
			},
			onTomatoResults,
			'json'
		);
	}

	function onSearchResults(data) {

		console.log(data);
		console.log(data.Search[0].imdbID);
		// $('#title').html(data.Search[0].Title);
		// $('#year').html(data.Search[0].Year);
		// $('#title1').html(data.Search[1].Title);
		// $('#year1').html(data.Search[1].Year);
		// $('#title2').html(data.Search[2].Title);
		// $('#year2').html(data.Search[2].Year);
		// $('#title3').html(data.Search[3].Title);
		// $('#year3').html(data.Search[3].Year);
		// $('#title4').html(data.Search[4].Title);
		// $('#year4').html(data.Search[4].Year);
		// $('#title5').html(data.Search[5].Title);
		// $('#year5').html(data.Search[5].Year);
		// $('#title6').html(data.Search[6].Title);
		// $('#year6').html(data.Search[6].Year);
		// $('#title7').html(data.Search[7].Title);
		// $('#year7').html(data.Search[7].Year);
		// $('#title8').html(data.Search[8].Title);
		// $('#year8').html(data.Search[8].Year);
		// $('#title9').html(data.Search[9].Title);
		// $('#year9').html(data.Search[9].Year);
		// tomatoMeter(data.Search[0].imdbID);
		counter = 0;
		for (var i in data) {

			$('table-data').append("<th>" + data.Search[counter].Title + "</th>");
			counter = i++;
		}
	}

	// function onTomatoResults(data) {
	// 	console.log('onTomatoResults');
	// 	console.log(data);
	// 	console.log(data.Genre);
	// }

	// var searchTerm = $('#search-box').val();
	// var year = 1972;
	// var type = 'movie';
	// var tomatoes = true;

	// 1. Event listener
	$('#search-button').on('click', onSearchButtonClick);

	function onSearchButtonClick() {
		// 1. Input value
		var searchTerm = $('#search-box').val();
		imdbSearch(searchTerm);
	}

}
