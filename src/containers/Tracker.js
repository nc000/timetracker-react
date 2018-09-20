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
      running: false,
    };
    // this.tracker = props.tracker;
    this.interval = null;
  }

  handlePlayToggle = () => {
    if (this.state.running) {
      clearInterval(this.interval);
    } else {
      const startTime = Date.now() - this.props.tracker.lapse;
      this.interval = setInterval(() => {
        const newLapse = Date.now() - startTime;
        this.props.dispatch(updateLapse(this.props.tracker.id, newLapse));
      }, 250)
    }
    this.setState(state => ({
      running: !state.running,
    }));
  }

  handleEditToggle = () => {
    this.setState({
      editMode: !this.state.editMode,
    });
  }

  handleDelete = () => {
    clearInterval(this.interval);
    this.props.dispatch(deleteTracker(this.props.tracker.id));
  }

  handleCancel = () => {
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
          {this.state.running ? <FontAwesomeIcon icon="pause" /> : <FontAwesomeIcon icon="play" />}
        </button>
        <span>{this.props.tracker.title}</span>
        <span>{this.formatTime(this.props.tracker.lapse/1000)}</span>
        <button 
          className="edit" 
          onClick={this.handleEditToggle}>
          <FontAwesomeIcon icon="edit" />
        </button>
        <button 
          className="delete" 
          onClick={this.handleDelete}>
          <FontAwesomeIcon icon="trash-alt" />
        </button>
        {this.state.editMode ? 
          <div>
            <EditForm tracker={this.props.tracker} handleCancel={this.handleCancel} />
            <div id="cover-div" />
          </div> 
        : ""}
      </div>
    );
  }
}

export default connect()(Tracker);