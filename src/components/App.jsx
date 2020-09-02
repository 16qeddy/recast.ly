import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: undefined,
      videos: exampleVideoData
      // unclicked: false
      // 1. video state, 2. video list state
    };
  }

  onListItemClick(objectthatwasclicked) {
    this.setState({
      clicked: objectthatwasclicked,
    });
  }

  componentDidMount() {
    this.getVideos('simple plan');
  }

  getVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query,
    };

    this.props.searchYouTube(options, (videos) => {
      this.setState({
        clicked: videos[0],
        videos: videos
      });
    });
  }

  render() {
    // var style = {
    //   textDecoration: this.state.done ? 'line-through' : 'none'
    // };

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em><Search whenChange ={this.getVideos.bind(this)}/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> <VideoPlayer
              video = {this.state.clicked || exampleVideoData[0]}/> </h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em> <VideoList videos = {this.state.videos} onTitleClick = {this.onListItemClick.bind(this)}/> </h5></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
