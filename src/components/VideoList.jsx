import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';
// console.log(exampleVideoData);
// console.log(videoListEntry);

// var VideoList = () => (
//   <div className="video-list">
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//   </div>
// );

var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(video => <VideoListEntry video = {video}/>)}
  </div>

);

// var VideoListItems = (props) => (
//   {props.videos.map(item => <VideoListEntry item = {item} />}
// );

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
