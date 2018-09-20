import React from 'react';
import TrackersList from "./TrackersList";
import DoughnutChart from "../components/DoughnutChart";

const App = () => (
  <div id="trackers-and-chart-container">
    <TrackersList />
    <DoughnutChart />
  </div>
);

export default App;
