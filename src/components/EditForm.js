import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editTracker } from '../actions';
import { CompactPicker } from 'react-color';

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.tracker.title,
      colour: props.tracker.colour,
    };
    this.tracker = props.tracker;
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name] : value
    });
  }

  handleColourChange = colour => {
    this.setState({colour: colour.hex});
  }

  render() {
    return (
      <form id="edit-form" onSubmit={e => {
        e.preventDefault;
        this.tracker.title = this.state.title;
        this.tracker.colour = this.state.colour;
        this.props.dispatch(editTracker(this.tracker.id, this.tracker.title, this.tracker.colour));
      }} >
        <div>
          <h1>Edit Tracker</h1>
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input name="title" id="title" type="text" required value={this.state.title} onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="colour">Colour:</label>
          <CompactPicker 
            color={this.state.colour}
            onChangeComplete={this.handleColourChange}
          />
        </div>
        <div>
          <input value="Submit" id="submit" type="submit" />
          <input value="Cancel" id="cancel" type="button" onClick={this.props.handleAddFormCancel} />
        </div>
      </form>
    );
  }
}

export default connect()(EditForm);