class App extends React.Component {
  constructor() {
    super();
    this.state = {
      video: {
        id: {
          videoId: '4ZAEBxGipoA'
        },
        snippet: {
          thumbnails: {
            default: {
              url: ''
            }
          },
          title: 'Hello',
          description: 'Awful video'
        }
      },
      videoList: exampleVideoData
    };
  }

  onVideoClick(video) {
    console.log('video clicked');
    this.setState({
      video: video
    });
  }

  render() {
    return (
      <div>
        <Nav />
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
