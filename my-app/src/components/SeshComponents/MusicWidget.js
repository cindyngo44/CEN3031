import '../SeshComponents/MusicWidget.css';
import React  from 'react';
import YouTube from 'react-youtube';

class MusicWidget extends React.Component {
  render() {
    const opts = {
      height: '300',
      width: '350',
      playerVars: {
        autoplay: 1,
      },
    };
    return <YouTube id="youtube" videoId="n61ULEU7CO0" opts={opts} onReady={this._onReady} />;
  }
  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default MusicWidget;
