import React, { Component } from 'react';

class SelectionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.options.length === 0 ? '' : this.props.options[0]};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.select(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {this.props.label}:
          <select value={this.state.value} onChange={this.handleChange}>
            {this.props.options.map((option) => <option key={option.key} value={option.value}>{option.label}</option>)}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SelectionForm;
