var searchYouTube = (options, callback) => {
  // TODO
<<<<<<< HEAD
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
=======
  
>>>>>>> a86632f70542d4dca96a89c8dbfde91d9a1abb58
};

window.searchYouTube = searchYouTube;
