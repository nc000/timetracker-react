import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editTracker } from '../actions';
import { CompactPicker } from 'react-color';
import CoverDiv from './shared/forms/CoverDiv';
import Div from './shared/forms/Div';
import Form from './shared/forms/Form';
import Header from './shared/forms/Header';
import Input from './shared/forms/Input';


class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      colour: props.colour,
    };
    this.id = props.id;
  }

  handleChange = e => {
    this.setState( {title : e.target.value} );
  }

  handleColourChange = colour => {
    this.setState( {colour: colour.hex} );
  }

  render() {
    return (
      <React.Fragment>
        <Form onSubmit={e => {
          e.preventDefault();
          this.props.dispatch(editTracker(this.id, this.state.title, this.state.colour));
          this.props.handleCancel();
        }} >
          <Div>
            <Header>Edit Tracker</Header>
          </Div>
          <Div>
            <label htmlFor="title">Title:</label>
            <Input name="title" type="text" required value={this.state.title} onChange={this.handleChange} />
          </Div>
          <Div>
            <label htmlFor="colour">Colour:</label>
            <CompactPicker 
              color={this.state.colour}
              onChangeComplete={this.handleColourChange}
            />
          </Div>
          <Div>
            <Input value="Submit" type="submit" />
            <Input value="Cancel" type="button" onClick={this.props.handleCancel} />
          </Div>
        </Form>
        <CoverDiv />
      </React.Fragment>
    );
  }
}

export default connect()(EditForm);