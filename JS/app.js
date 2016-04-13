$(document).ready(function () {
	
	$('#userSearch').submit(function(event) {
		event.preventDefault();
		var searchPhrase = $('#searchInput').val();
	
		$.getJSON('https://www.googleapis.com/youtube/v3/search', 
			{key: "AIzaSyAitXKVR92IKLca15azobSZz7L9bL0Pt44", 
			part: "snippet",
			q: searchPhrase,



//  "https://www.googleapis.com/youtube/v3/videos?id=" +videoID+ "&key=" + 
// YOUR KEY HERE + 
// "&fields=items(id,snippet(channelId,title,categoryId),statistics)&part=snippet,statistics";

			}, function(data) {
				console.log(data);
				displayResults(data);
			});

	});

	var displayResults = function(resluts) {
		var html = "";
		$.each(resluts.items, function(index, value) {
			html += '<p class="videoTitle">' + value.snippet.title + 
			'</p><a href="https://www.youtube.com/watch?v=' + 
			value.id.videoId + '"><img class="thumbnails" src="' + 
			value.snippet.thumbnails.high.url + '"/></a>';
			// html += '<img src="' + value.snippet.thumbnails.default.url + '">';
		});
		$('#searchResults').html(html);
	};


});