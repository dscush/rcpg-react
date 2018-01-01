import React, { Component } from 'react';
import CreateGeneratorForm from './CreateGeneratorForm';
import SelectGeneratorForm from './SelectGeneratorForm';

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
          <CreateGeneratorForm createGenerator={this.props.createGenerator}/>
        </div>
        {this.props.generators.length !== 0 &&
          <div>
            <h3>Select a Generator</h3>
            <SelectGeneratorForm
              generators={this.props.generators}
              selectGenerator={this.props.selectGenerator}
            />
          </div>
        }
      </div>
    );
  }
}

export default GeneratorSelector;
