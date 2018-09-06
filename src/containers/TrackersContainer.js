import React, { Component } from 'react';
import Tracker from "../components/Tracker";

class TrackersContainer extends Component {
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
      <div className={"trackersContainer"}>
        {trackersHTML}
        <div>
          <button 
            id={"add-tracker"}
            onClick={() => this.props.handleAdd()}
            >add tracker
          </button>
        </div>
      </div>
    );
  }
}

export default TrackersContainer;