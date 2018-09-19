import React, { Component } from 'react';
import TrackersList from "./TrackersList";
import DoughnutChart from "../components/DoughnutChart";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="trackers-and-chart-container">
        <TrackersList
          id="trackers-list"
          trackers={[...this.state.trackers.values()]}
          handlePlayPause={this.handlePlayPause}
          handleAdd={this.handleAdd}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
        <DoughnutChart id="canvas-container" />
      </div>
    );
  }
}

export default App;
