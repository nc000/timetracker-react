import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateLapse, deleteTracker } from '../actions';
import styled from 'styled-components';
import EditForm from '../components/EditForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

const Button = styled.button`
  font-size: 30px;
  flex-basis: 5%;
  border: 0;
  margin: 0;
  cursor: pointer;
  text-decoration: none;
  background: transparent;
  transition: all 0.2s;
  outline: none;

  :hover {
    color: rgb(167, 167, 167);
  }

  ${props => props.delete && `
    margin-right: 5px;

    :hover {
      color: rgb(255, 109, 109);
    }
  `};

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

const Span = styled.span`
  font-size: 30px;
  font-family: 'Roboto', sans-serif;

  :first-of-type {
    flex-basis: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  :last-of-type {
    flex-basis: 20%;
  }

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

class Tracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      running: false,
    };
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
      <Wrapper>
        <Button 
          onClick={this.handlePlayToggle}>
          {this.state.running ? <FontAwesomeIcon icon="pause" /> : <FontAwesomeIcon icon="play" />}
        </Button>
        <Span>{this.props.tracker.title}</Span>
        <Span>{this.formatTime(this.props.tracker.lapse/1000)}</Span>
        <Button 
          onClick={this.handleEditToggle}>
          <FontAwesomeIcon icon="edit" />
        </Button>
        <Button 
          delete
          onClick={this.handleDelete}>
          <FontAwesomeIcon icon="trash-alt" />
        </Button>
        {this.state.editMode ? 
          <EditForm 
            id={this.props.tracker.id}
            title={this.props.tracker.title} 
            colour={this.props.tracker.colour}
            handleCancel={this.handleCancel} 
          /> 
          : <React.Fragment></React.Fragment>
        }
      </Wrapper>
    );
  }
}

export default connect()(Tracker);