import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoForm extends Component {
  state = {
    title: '',
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({ title: '' });
    this.props.addTodo(this.state.title);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
        <button className="button" type="submit">
          Add
        </button>
      </form>
    );
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
