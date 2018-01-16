import React, { Component } from 'react';
import Panel from './Panel';
import CreationForm from './CreationForm';
import SelectionForm from './SelectionForm';

class GeneratorManager extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedGenerator: null};
  }

  render() {
    return (
      <Panel>
        <div>
          <div>
            <h3>Create a Generator</h3>
            <CreationForm
              create={this.props.createGenerator}
              id='generator-create'
              existingNames={this.props.generators.map((generator) => generator.name)}
            />
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
                id='generator-select'
              />
            </div>
          }
        </div>
      </Panel>
    );
  }
}

export default GeneratorManager;
