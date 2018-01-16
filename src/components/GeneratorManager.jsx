import React, { Component } from 'react';
import GeneratorSelector from './GeneratorSelector';

class GeneratorManager extends Component {
  render() {
    return (
      <GeneratorSelector
        createGenerator={this.props.createGenerator}
        selectGenerator={this.props.selectGenerator}
        generators={this.props.generators}
      />
  )}
}

export default GeneratorManager;
