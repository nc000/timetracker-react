import React, { Component } from "react";
import { CompactPicker } from 'react-color';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      colour: "#000000",
    };
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name] : value
    });
  }

  handleColourChange = (colour, event) => {
    this.setState({colour: colour.hex});
  }

  render() {
    return (
      <form id="add-form" onSubmit={() => {
        this.props.handleAddSubmit(this.state);
        return false;
      }} >
        <div>
          <h1>Add Tracker</h1>
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input name="title" id="title" type="text" onChange={this.handleChange} required />
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
          <input value="Cancel" id="cancel" type="button" onClick={() => this.props.handleAddCancel()} />
        </div>
      </form>
    );
  }
}

export default AddForm;