class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentlyPlaying: undefined,
      currentList: props.searchYouTube,
    };
  }

  render () {
    console.log(this.props);this.state.done ? 'bold' : 'none'
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentlyPlaying ? this.state.currentlyPlaying : exampleVideoData[0]}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={exampleVideoData} play={this.playVideo.bind(this)}/>
        </div>
      </div>
    );
  }

  playVideo (video) {
    //set the state of the video player with the video that was clicked on
    this.setState({currentlyPlaying: video});
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
