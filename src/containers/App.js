import React, { Component } from 'react';
import TrackersContainer from "./TrackersContainer";
import DoughnutChart from "../components/DoughnutChart";
import AddForm from "../components/AddForm";
import EditForm from "../components/EditForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackers: new Map(),
      addMode: false,
      editMode: false,
      editTracker: {},
    };
    this.nextId = 1;
  }

  handlePlayPause = (id) => {
    const tracker = this.state.trackers.get(id); 
    if (tracker.running) {
      clearInterval(tracker.intervalId);
    } else {
      const startTime = Date.now() - tracker.lapse;
      tracker.intervalId = setInterval(() => {
        tracker.lapse = Date.now() - startTime;
        this.setState((state, props) => ({
          trackers: state.trackers.set(id, tracker),
        }));
      }, 1000);
    }
    tracker.running = !tracker.running;
    this.setState((state, props) => ({
      trackers: state.trackers.set(id, tracker),
    }));
  }

  handleAdd = () => {
    this.setState({addMode: true});
  }
  
  handleAddSubmit = (values) => {
    const newTracker = {
      id: this.nextId++,
      title: values.title,
      colour: values.colour,
      lapse: 0,
      running: false,
    };
    this.setState((state, props) => ({
      trackers: state.trackers.set(newTracker.id, newTracker),
      addMode: false,
    }));
  }

  handleAddCancel = () => {
    this.setState({addMode: false});
  }

  handleEdit = (id) => {
    this.setState({
      editMode: true,
      editTracker: this.state.trackers.get(id),
    });
  }

  handleEditSubmit = (id, updatedTracker) => {
    this.setState((state, props) => ({
      trackers: state.trackers.set(id, updatedTracker),
      editMode: false,
      editTracker: {}
    }));
  }

  handleEditCancel = () => {
    this.setState({
      editMode: false,
    })
  }

  handleDelete = (id) => {
    this.setState((state, props) => {
      state.trackers.delete(id);
      return {trackers: state.trackers}
    });
  }

  render() {
    return (
      <div id="trackers-and-chart-container">
        <TrackersContainer
          id="trackers-container"
          trackers={[...this.state.trackers.values()]}
          handlePlayPause={this.handlePlayPause}
          handleAdd={this.handleAdd}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
        <DoughnutChart id="canvas-container" trackers={[...this.state.trackers.values()]} />
        {this.state.addMode ? <AddForm handleAddSubmit={this.handleAddSubmit} handleAddCancel={this.handleAddCancel} /> : ""}
        {this.state.editMode ? <EditForm tracker={this.state.editTracker} handleEditSubmit={this.handleEditSubmit} handleEditCancel={this.handleEditCancel}/> : ""}
        {this.state.addMode || this.state.editMode ? <div id="cover-div" /> : ""}
      </div>
    );
  }
}

export default App;
