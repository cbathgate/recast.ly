class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: exampleVideoData[0],
      videoList: exampleVideoData,
      search: ''
    };
  }

  youTubeSearchCallback(items) {
    this.setState({
      video: items[0],
      videoList: items
    });
  }

  createOptions () {
    return {
      query: this.state.search,
      max: 5,
      key: YOUTUBE_API_KEY
    };
  }

  componentDidMount() {
    var boundCreateOptions = this.createOptions.bind(this);
    let options = boundCreateOptions();
    this.props.searchYouTube(options, this.youTubeSearchCallback.bind(this));
    setInterval(() => {
      let options = boundCreateOptions();
      return this.props.searchYouTube(options, this.youTubeSearchCallback.bind(this));
    }, 500);
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
      <div>
        <Nav search={this.state.search} updateSearch={this.updateSearch.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.video} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} onVideoClick={this.onVideoClick.bind(this)}/>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
