$(function() {
	$('.btn').on('click', function() {
		$.getJSON('twitsearch?keywords=obama', '', function(myTweets) {
			$('#_tweets').find('._row1').html('');
			for (var i in myTweets) {
				if (i < 3) {
					var tweet = myTweets[i];
					$('#_tweets').find('._row1').append('<div class="col-md-4">' +
							'<p>' + tweet.full_name + ' @' + tweet.screen_name + '</p>' +
							'<p>' + tweet.text + '</p>' +
							'<p>' + tweet.url + '</p>' +
							'<p>' + tweet.created_at + '</p>' +
						'</div>');
				}
			}
			$('#_tweets').find('._row2').html('');
			for (var i in myTweets) {
				if (i >= 3) {
					var tweet = myTweets[i];
					$('#_tweets').find('._row2').append('<div class="col-md-4">' +
							'<p>' + tweet.full_name + ' @' + tweet.screen_name + '</p>' +
							'<p>' + tweet.text + '</p>' +
							'<p>' + tweet.url + '</p>' +
							'<p>' + tweet.created_at + '</p>' +
						'</div>');
				}
			}
		});
	});
});