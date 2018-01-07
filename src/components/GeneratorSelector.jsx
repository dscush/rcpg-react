import React, { Component } from 'react';
import CreationForm from './CreationForm';
import SelectionForm from './SelectionForm';

class GeneratorSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedGenerator: null};
  }

  render() {
    return (
      <div>
        <div>
          <h3>Create a Generator</h3>
          <CreationForm create={this.props.createGenerator}/>
        </div>
        {this.props.generators.length !== 0 &&
          <div>
            <h3>Select a Generator</h3>
            <SelectionForm
              options={this.props.generators.map((generator) => ({
                key: generator.name,
                value: generator.name,
                label: generator.name
              }))}
              select={this.props.selectGenerator}
              label='Generators'
            />
          </div>
        }
      </div>
    );
  }
}

export default GeneratorSelector;
