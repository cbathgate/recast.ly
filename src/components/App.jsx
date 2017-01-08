class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: exampleVideoData[0],
      videoList: exampleVideoData,
      search: 'cute kittens'
    };
  }

  youTubeSearchCallback(items) {
    this.setState({
      video: items[0],
      videoList: items
    });
  }

  createOptions() {
    return {
      query: this.state.search,
      max: 5,
      key: YOUTUBE_API_KEY
    };
  }

  searchYouTube() {
    let options = this.createOptions();
    this.props.searchYouTube(options, this.youTubeSearchCallback.bind(this));
  }

  componentDidMount() {
    this.searchYouTube();
  }

  onVideoClick(video) {
    this.setState({
      video: video
    });
  }

  updateSearch(newSearch) {
    this.setState({
      search: newSearch
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <Nav search={this.state.search} searchYouTube={this.searchYouTube.bind(this)} updateSearch={this.updateSearch.bind(this)}/>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} onVideoClick={this.onVideoClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
