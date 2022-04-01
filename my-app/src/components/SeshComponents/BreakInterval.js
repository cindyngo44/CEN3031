import React from 'react';
import './BreakInterval.css';

function BreakInterval(props) {
  function increaseCounter() {

    const currentInterval = props.breakInterval;

    if (currentInterval >= 60) {
      return;
      /* won't let counter go above 60 */
    }


    props.onBreakIntervalChange(currentInterval + 1);

    /* function meant to increment counter on the Break Interval section */
  }

  function decreaseCounter() {
    const currentInterval = props.breakInterval;

    if (currentInterval === 0) {
      return;
      /* won't let counter go below 0 */
    }

    props.onBreakIntervalChange(currentInterval - 1);

    /* function meant to decrement counter on the Break Interval Section */
  }

  return (
    <section id="break-interval-container">
      <div className="sesh-title">
        <h4>Break Length</h4>
      </div>
      <section id="break-time-interval">
        <button
        disabled = {props.isPlay ? "disabled" : ""}
        onClick = {decreaseCounter}
        className='counter-btn'
        >-</button>
        <p className="break-time">{props.breakInterval}</p>
        <button
        disabled = {props.isPlay ? "disabled" : ""}
        onClick = {increaseCounter}
        className="counter-btn">+</button>
      </section>
    </section>
  )
}

export default BreakInterval;