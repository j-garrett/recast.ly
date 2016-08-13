// var App = (props) => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={props.videos[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={props.videos}/>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor (props) {
    super(props);
  var getInitialState = () => {
    return {currentlyPlaying: props.videos[0],
      currentList: props.videos};
  }
    this.state = getInitialState();
    // this.state = {
      // currentlyPlaying: props.videos[0],
      // currentList: props.videos,
    //   searchYouTube: props.searchYouTube

    // };
  }

  render () {
    console.log(this.props);
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentlyPlaying}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.currentList} play={this.playVideo.bind(this)}/>
        </div>
      </div>
    );
  }

  playVideo (video) {
    // debugger;
    console.log('in the app class, gonna play the video now ', this);
    //render videoplayer with video that was clicked on 
    //<VideoPlayer video={props.video} />;
    //set the state of the video player with the video that was clicked on
    this.setState({currentlyPlaying: video});
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
