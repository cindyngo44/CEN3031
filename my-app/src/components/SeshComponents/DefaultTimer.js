import React from 'react';
import './DefaultTimer.css';
import BreakInterval from './BreakInterval';
import SessionInterval from './SessionInterval';
import Timer from './Timer';

class DefaultTimer extends React.Component {
  constructor() {
    super();

    this.state = {
      breakInterval: 5,
      sessionInterval: 25,
      timerMinute: 25,
      isPlay: false,

      /*this.state sets the default 
    (the default values are based on the original pomodoro timer -> 25 minutes of work, 5 min of break) */
    }

    this.onBreakIntervalChange = this.onBreakIntervalChange.bind(this);
    this.onSessionIntervalChange = this.onSessionIntervalChange.bind(this);
    this.onTimerMinuteChange = this.onTimerMinuteChange.bind(this);
    this.onPlayChange = this.onPlayChange.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);

    /*The bind() is an inbuilt method in React that is used to pass the data 
    as an argument to the function of a class based component */
  }

  onPlayChange(isPlay) {
    this.setState({
      isPlay: isPlay
    })

    /* setting state of timer. if start is pressed, timer is in "play" mode */
  }

  onBreakIntervalChange(newBreakLength) {
    this.setState({
      breakInterval: newBreakLength
    })
    /* setting new break length */
  }

  onSessionIntervalChange(newSessionLength) {
    this.setState({
      sessionInterval: newSessionLength,
      timerMinute: newSessionLength
    })
    /* when new session length is set, we are setting the sesh interval to that new time */
  }

  onTimerMinuteChange(minuteChange) {
    this.setState({
      timerMinute: minuteChange
    })

    /* setting the timer minute hand */
  }

  onResetTimer() {
    this.setState({
      sessionInterval: 25,
      timerMinute: 25,
      breakInterval: 5
    })
       /*sets it back to the default settings
    (the default values are based on the original pomodoro timer -> 25 minutes of work, 5 min of break) */
  }

  render() {
    return (
      <main className="App">
        <div className="timer-wrapper">

          <section>
            <div className="app-title">
              <h2>Start A Sesh!</h2>
              </div>
          <section id="interval-container">
            <BreakInterval
            onBreakIntervalChange = {this.onBreakIntervalChange}
            breakInterval = {this.state.breakInterval}
            isPlay = {this.state.isPlay}
            />
            <SessionInterval
            onSessionIntervalChange = {this.onSessionIntervalChange} sessionInterval = {this.state.sessionInterval}
            isPlay = {this.state.isPlay}
            />
          </section>
          <Timer
          sessionInterval = {this.state.sessionInterval}
          timerMinute = {this.state.timerMinute}
          onTimerMinuteChange = {this.onTimerMinuteChange}
          breakInterval = {this.state.breakInterval}
          onPlayChange = {this.onPlayChange}
          resetTimer = {this.onResetTimer}
          isPlay = {this.state.isPlay}
          />
        </section>
        
        </div>
        
        
      </main>
    )
  }
}

export default DefaultTimer;