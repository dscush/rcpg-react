import React, { Component } from 'react';

class CreationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', err: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      err: this.props.existingNames.includes(event.target.value),
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.create(this.state.value);
    this.setState({value: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={"form-group" + (this.state.err ? ' has-error  has-feedback' : '')}>
          <label className="sr-only" htmlFor={this.props.id}>Name:</label>
          <input type="text" className="form-control" id={this.props.id} placeholder="Name" value={this.state.value} onChange={this.handleChange} />
          {this.state.err && <span className="help-block">'{this.state.value}' already exists.</span>}
        </div>
        <button type="submit" className="btn btn-primary" disabled={this.state.err || this.state.value === '' ? 'disabled' : ''}>Create</button>
      </form>
    );
  }
}

export default CreationForm;
