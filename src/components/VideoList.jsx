var VideoList = (props) => (
    <ul className="card video-list media list-group">
      {props.videos.map((video) => <VideoListEntry onVideoClick={props.onVideoClick} video={video}/>)}
    </ul>
);
// <VideoListEntry />

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
