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
        <div className="form-group">
          <label className="sr-only" htmlFor={this.props.id}>{this.props.label}:</label>
          <select className="form-control" id={this.props.id} value={this.state.value} onChange={this.handleChange}>
            {this.props.options.map((option) => <option key={option.key} value={option.value}>{option.label}</option>)}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Select</button>
      </form>
    );
  }
}

export default SelectionForm;
