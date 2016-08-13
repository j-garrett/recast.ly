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
  }

  render () {
    console.log(this.props);
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={exampleVideoData[3]}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={exampleVideoData}/>
        </div>
      </div>
    );
  }

  playVideo (event) {
    console.log('gonna play the video now ', event);
    <VideoPlayer video={props.video} />;
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
