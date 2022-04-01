import React from 'react';
import './SessionInterval.css';

function SessionInterval(props) {

  function increaseCounter() {
    const currentInterval = props.sessionInterval;

    if (currentInterval >= 60) {
      return;
       /* won't let counter go above 60 */
    }
    props.onSessionIntervalChange(props.sessionInterval + 1);

    /* function meant to increment counter on the Session Interval section */
  }

  function decreaseCounter() {
    const currentInterval = props.sessionInterval;

    if (currentInterval === 0) {
      return;
        /* won't let counter go below 0 */
    }

    props.onSessionIntervalChange(currentInterval - 1);
    /* function meant to decrement counter on the Session Interval Section */
  }

  return (
    <section id="session-interval-container">
      <div className="sesh-title">
        <h4>Session Length</h4>
      </div>
      <section id="session-interval">
        <button
        disabled = {props.isPlay ? "disabled" : ""}
        onClick = {decreaseCounter}
        className="counter-btn">-</button>
        <p className="session-time">{props.sessionInterval}</p>
        <button
        disabled = {props.isPlay ? "disabled" : ""}
        onClick = {increaseCounter}
        className="counter-btn">+</button>
      </section>
    </section>
  )
}

export default SessionInterval;