class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentlyPlaying: undefined,
      currentList: undefined
    };
  }

  componentDidMount () {
    this.props.searchYouTube({}, this.updateResults.bind(this));
  }

  render () {
    if (this.state.currentList !== undefined) {
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
    } else {
      return (<div></div>);
    }
  }

  playVideo (video) {
    this.setState({currentlyPlaying: video});
  }

  updateResults (videoList) {
    if (this.state.currentlyPlaying === undefined) {
      this.setState({currentlyPlaying: videoList[0]});
    }
    this.setState({currentList: videoList});
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;