$(document).ready(function () {
	
	$('#userSearch').submit(function(event) {
		event.preventDefault();
		var searchPhrase = $('#searchInput').val();
		
		$.getJSON('https://www.googleapis.com/youtube/v3/search', 
			{key: "AIzaSyAitXKVR92IKLca15azobSZz7L9bL0Pt44", 
			part: "snippet",
			q: searchPhrase,
		}, function(data) {
			console.log(data);
			displayResults(data);
		});
		$('#searchInput').val('');
	});

	var displayResults = function(resluts) {
		var html = "";
		var source = $('#resultTemplate').html();
		var template = Handlebars.compile(source);
		$.each(resluts.items, function(index, value) {
			html += template(value);
		});
		
		$('#searchResults').html(html);
	};


});