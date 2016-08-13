var searchYouTube = (options, callback) => {

  var params = `part=snippet&maxResults=${options.max || 5}&q=${options.query || 'cats'}&type=video&key=${options.key || YOUTUBE_API_KEY}`;

  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search?' + params,
    contentType: 'json',
    success: function (data) {
      console.log('success', data.items);
      callback(data.items);
      return {currentlyPlaying: data.items[0], currentList: data.items};
    },
    error: function(error) {
      console.error('failer', error);
    }
  });

};

window.searchYouTube = searchYouTube;
