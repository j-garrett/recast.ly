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
    this.state = {currentlyPlaying: exampleVideoData[0], currentList: exampleVideoData};
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
    this.setState({currentlyPlaying: video});
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;