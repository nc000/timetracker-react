import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class DoughnutChart extends Component {
  render() {
    const trackers = this.props.trackers;
    const chartData = {
      labels: trackers.map(tracker => tracker.title),
      datasets: [{
        data: trackers.map(tracker => tracker.lapse),
        backgroundColor: trackers.map(tracker => tracker.colour),
      }]
    };
    const options =  {
      responsive: true,
      cutoutPercentage: 80,
      tooltips: {enabled: false},
      hover: {mode: null}
    }

    return <Doughnut data={chartData} options={options} />;
  }
}

export default DoughnutChart;