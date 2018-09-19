import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tracker from "./Tracker";

class TrackersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addMode: false,
    };
  }

  handleAdd() {
    this.setState({
      addMode: !this.state.addMode,
    });
  }

  handleAddFormCancel = () => {
    this.setState({
      addMode: false
    });
  } 

  render() {
    let trackersHTML = "";
    if (this.props.trackers.length > 0) {
      trackersHTML = this.props.trackers.map((tracker) => {
      return <Tracker 
                className="tracker"
                key={tracker.id}
                trackerDetails={tracker}
                handlePlayPause={this.props.handlePlayPause}
                handleEdit={this.props.handleEdit}
                handleDelete={this.props.handleDelete}
             />
      });
    }
    return (
      <div className={"trackers-list"}>
        {trackersHTML}
        <div>
          <button 
            id={"add-tracker"}
            onClick={this.handleAdd}
            >add tracker
          </button>
        </div>
        {this.state.addMode ? 
          <div>
            <AddForm handleAddFormCancel={this.handleAddFormCancel} />
            <div id="cover-div" />
          </div> 
        : ""}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trackers: state,
})

export default connect(mapStateToProps)(TrackersList);