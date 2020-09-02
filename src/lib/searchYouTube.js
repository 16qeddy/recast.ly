var searchYouTube = ({key, query, max = 5}, callback) => {
  // TODO
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    maxResults: max,
    q: query,
    type: 'video',
    videoEmbeddable: true,
    key: key
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) => console.error(err));
    });
};

export default searchYouTube;
