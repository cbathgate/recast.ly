class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: exampleVideoData[0],
      videoList: exampleVideoData,
      search: ''
    };
  }

  onVideoClick(video) {
    this.setState({
      video: video
    });
  }

  updateSearch(newSearch) {
    console.log(newSearch);
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
          <VideoList videos={this.state.videoList} state={this.state} onVideoClick={this.onVideoClick.bind(this)}/>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
