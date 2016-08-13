class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentlyPlaying: undefined,
      currentList: undefined
    };
    this.sendSearch = _.debounce(this.search, 500);
  }

  search(input) {
    console.log('search event heard', input);
    this.props.searchYouTube({query: input}, this.updateResults.bind(this));
  }

  componentDidMount () {
    this.props.searchYouTube({}, this.updateResults.bind(this));
  }

  render () {
    if (this.state.currentList !== undefined) {
      return (
        <div>
          <Nav search={this.sendSearch.bind(this)}/>
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentlyPlaying}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.currentList} play={this.playVideo.bind(this)}/>
          </div>
        </div>
      );
    } else {
      return (<h1>Loading!!!!!!!!!</h1>);
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