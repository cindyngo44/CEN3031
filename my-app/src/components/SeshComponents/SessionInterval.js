import React from 'react';
import './SessionInterval.css';

function SessionInterval(props) {

  function increaseCounter() {
    const currentInterval = props.sessionInterval;

    if (currentInterval >= 60) {
      return;
    }
    props.onSessionIntervalChange(props.sessionInterval + 1);
  }

  function decreaseCounter() {
    const currentInterval = props.sessionInterval;

    if (currentInterval === 0) {
      return;
    }

    props.onSessionIntervalChange(currentInterval - 1);
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