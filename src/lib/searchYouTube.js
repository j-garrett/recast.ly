var searchYouTube = (options, callback) => {
  if (!options) {
    console.log('no options');
    return undefined;
  }
  var params = `part=snippet&maxResults=${options.max || 5}&q=${options.query}&type=video&key=${options.key || YOUTUBE_API_KEY}`;

  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search?' + params,
    contentType: 'json',
    success: function (data) {
      console.log('success', data.items);
      callback(data.items);
    },
    error: function(error) {
      console.error('failer', error);
    }
  });

};

window.searchYouTube = searchYouTube;
