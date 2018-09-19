import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateLapse, deleteTracker } from '../actions';
import EditForm from '../components/EditForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Tracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    };
    this.tracker = props.trackerDetails;
    this.running = false;
    this.interval = null;
  }

  handlePlayToggle() {
    this.running = !this.running;
    if (this.running) {
      const startTime = Date.now() - tracker.lapse;
      this.interval = setInterval(() => {
        const newLapse = Date.now() - startTime;
        this.props.dispatch(updateLapse(this.tracker.id, newLapse));
      }, 250)
    } else {
      clearInterval(this.interval);
    }
  }

  handleEditToggle() {
    this.setState({
      editMode: !this.state.editMode,
    });
  }

  handleDelete() {
    this.props.dispatch(deleteTracker(this.tracker.id));
  }

  handleEditFormCancel = () => {
    this.setState({
      editMode: false
    });
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
      <div className="tracker">
        <button 
          className="play-pause" 
          onClick={this.handlePlayToggle}>
          {this.tracker.running ? <FontAwesomeIcon icon="pause" /> : <FontAwesomeIcon icon="play" />}
        </button>
        <span>{this.tracker.title}</span>
        <span>{this.formatTime(this.tracker.lapse/1000)}</span>
        <button 
          className="edit" 
          onClick={this.handleEdit}>
          <FontAwesomeIcon icon="edit" />
        </button>
        <button 
          className="delete" 
          onClick={this.handleDelete}>
          <FontAwesomeIcon icon="trash-alt" />
        </button>
        {this.state.editMode ? 
          <div>
            <EditForm tracker={this.tracker} handleEditFormCancel={this.handleEditFormCancel} />
            <div id="cover-div" />
          </div> 
        : ""}
      </div>
    );
  }
}

export default connect()(Tracker);