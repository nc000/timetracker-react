import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Tracker from "./Tracker";
import AddForm from '../components/AddForm';

const AddTracker = styled.button`
  width: 100%;
  text-decoration: none;
  background: transparent;
  color: rgb(107, 107, 107);
  border: 2px solid rgb(219, 219, 219);
  border-radius: 5px;
  font-size: 40px;
  padding: 5px;
  margin: 10px 0 60px 0;
  transition: all 0.2s;
  outline: none;

  :hover {
    color: black;
    border-color: black;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;


class TrackersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addMode: false,
    };
  }

  handleAdd = () => {
    this.setState({
      addMode: !this.state.addMode,
    });
  }

  handleCancel = () => {
    this.setState({
      addMode: false
    });
  } 

  render() {
    let trackersHTML = "";
    if (this.props.trackers.length > 0) {
      trackersHTML = this.props.trackers.map((tracker) => {
      return <Tracker 
                key={tracker.id}
                tracker={tracker}
                trackerLapse={tracker.lapse}
             />
      });
    }
    return (
      <div>
        {trackersHTML}
        <AddTracker onClick={this.handleAdd}>add tracker</AddTracker>
        {this.state.addMode ? <AddForm handleCancel={this.handleCancel} /> : <React.Fragment></React.Fragment>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trackers: state,
})

export default connect(mapStateToProps)(TrackersList);