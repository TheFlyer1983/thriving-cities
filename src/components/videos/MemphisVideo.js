import React, {Component} from 'react';
import './MemphisVideo.css';

class MemphisVideo extends Component {
  render(){
    return(
      <div className="jumbotron">
        <div>
          <p>There is a video below.</p>
        </div>
        <div className="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/1nqTnMweTPE?rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="Memphis"></iframe>
        </div>
      </div>
    )
  }
}

export default MemphisVideo;
