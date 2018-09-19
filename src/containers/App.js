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
        />
        <DoughnutChart id="canvas-container" />
      </div>
    );
  }
}

export default App;
