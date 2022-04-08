import React from 'react';
import './SessionActions.css';
import './Timer.css';


class Timer extends React.Component {
  constructor() {
    super()

    this.state = {
      timerSeconds: 0,
      intervalId: '',
      isSessionInterval: true

      /* the functionality of the seconds hand will be written here */
    }

    this.playStopTimer = this.playStopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  playStopTimer(event) {
    const action = event.target.dataset.type;

    switch (action) {
      case 'play':
        this.props.onPlayChange(true);
        this.decreaseTimer();
        break;
      case 'stop':
        this.props.onPlayChange(false);
        clearInterval(this.state.intervalId);
        /* interval id is required, because when user presses stop, interval has to be cleared */
        break;
      default:
        break;
    }
  }

  decreaseTimer() {
    let intervalId = setInterval(() => {
      switch(this.state.timerSeconds) {
        case 0:
          if (this.props.timerMinute === 0) {
            if (this.state.isSessionInterval) {
              // if timerMinute is at 0 && timerSeconds is at 0, it means it is time to start break timer
              this.setState({
                isSessionInterval: false
              })

              if(this.state.isSessionInterval === false){
                alert("You have finished a Sesh! Congrats!");
              }

              this.props.onTimerMinuteChange(this.props.breakInterval);
            } else {
              // start session timer
              this.setState({
                isSessionInterval: true
              })

              if(this.state.isSessionInterval === true){
                alert("You have finished a Break! Back to work!");
              }

              this.props.onTimerMinuteChange(this.props.sessionInterval);
            }
          } else {
            /* time is running, so we decrement by one minute. ex: 3:00 to 2:59 */
            this.props.onTimerMinuteChange(this.props.timerMinute - 1);
            this.setState({
              timerSeconds: 59
            })
          }
          break;
        default:
        this.setState({
          /*decrementing the seconds hand, every second */
          timerSeconds: this.state.timerSeconds - 1
        })
          break;
      }
    }, 1000);

    this.setState({
      intervalId: intervalId
    });
  }

  resetTimer() {
    clearInterval(this.state.intervalId);

    this.props.resetTimer();
    this.props.onPlayChange(false);

    this.setState({
      timerSeconds: 0
    })
  }

  render() {
    /*displays the actual timer in the timer component */
    let timerClass = this.props.timerMinute === 0 ? "timer-alert" : "";
    timerClass += " session-timer";
    return (
      <section>
        <section id="session-container">
          <div className='session-header'>
          <div className="sesh-timer-header">{this.state.isSessionInterval ? 'Study Sesh' : 'Break'}</div>
          </div>
          <span
          className={timerClass}>
          {this.props.timerMinute}</span>
          <span
          className={timerClass}
          id="colon">:</span>
          <span
          className={timerClass}>{this.state.timerSeconds === 0 ? '00' : this.state.timerSeconds < 10 ? '0' + this.state.timerSeconds : this.state.timerSeconds}</span>
          {/* if timerSecond is at 0, then we display 00. If it's not at 0 and less than 10, we display 0 and whatever number its at. ex: 2.07  */}
        </section>
        <section id="actions-container">
          <button 
          disabled = {this.props.isPlay ? "disabled" : ""}
          data-type="play" onClick = {this.playStopTimer}>Start</button>
          <button data-type="stop" onClick = {this.playStopTimer}>Stop</button>
          <button onClick = {this.resetTimer}>Refresh</button>
        </section>
      </section>
    )
  }
}

export default Timer;