import React, { Component } from 'react';

class CreationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.create(this.state.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="sr-only" htmlFor={this.props.id}>Name:</label>
          <input type="text" className="form-control" id={this.props.id} placeholder="Name" value={this.state.value} onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    );
  }
}

export default CreationForm;
