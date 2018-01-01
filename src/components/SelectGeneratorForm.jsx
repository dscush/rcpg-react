import React, { Component } from 'react';

class CreateGeneratorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.generators.length === 0 ? '' : this.props.generators[0]};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.selectGenerator(this.state.value);
  }

  render() {
    const options = this.props.generators.map((generator) => <option key={generator} value={generator}>{generator}</option>);

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Generators:
          <select value={this.state.value} onChange={this.handleChange}>
            {options}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CreateGeneratorForm;
