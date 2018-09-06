import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Tracker extends Component {
  constructor(props) {
    super(props);
    this.tracker = props.trackerDetails;
  }

  componentWillUnmount() {
    clearInterval(this.tracker.intervalId);
  }

  formatTime(totalSeconds) {
    let hours = Math.floor(totalSeconds / 60 / 60);
    let minutes = Math.floor((totalSeconds/60) - (hours*60));
    let seconds = Math.floor(totalSeconds - (hours*60*60) - (minutes*60));
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`;
  }

  render() {
    return (
      <div>
        <div className="tracker">
          <button 
            className="play-pause" 
            onClick={() => this.props.handlePlayPause(this.tracker.id)}>
            {this.tracker.running ? <FontAwesomeIcon icon="pause" /> : <FontAwesomeIcon icon="play" />}
          </button>
          <span>{this.tracker.title}</span>
          <span>{this.formatTime(this.tracker.lapse/1000)}</span>
          <button 
            className="edit" 
            onClick={() => this.props.handleEdit(this.tracker.id)}>
            <FontAwesomeIcon icon="edit" />
          </button>
          <button 
            className="delete" 
            onClick={() => this.props.handleDelete(this.tracker.id)}>
            <FontAwesomeIcon icon="trash-alt" />
          </button>
        </div>
      </div>
    );
  }
}

export default Tracker;