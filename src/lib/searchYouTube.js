var searchYouTube = (options, callback) => {
  // TODO
  console.log(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${options.max}&q=${options.query}&key=${options.key}&type=video&videoembeddable=true`);
  return $.ajax({
    type: 'GET',
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${options.max}&q=${options.query}&key=${options.key}&type=video&videoembeddable=true`,
    contentType: 'application/json',
    success: function(results) {
      console.log(results);
      console.log(results.items);
      callback(results.items);
    },
    error: function(error, response) {
      console.error('This is an error', error);
    },

  }); 
};

window.searchYouTube = searchYouTube;
