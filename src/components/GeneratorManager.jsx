import React, { Component } from 'react';
import Panel from './Panel'
import GeneratorSelector from './GeneratorSelector'

class GeneratorManager extends Component {
  render() {
    return (
    <Panel title="Select or Create a Generator">
      <GeneratorSelector
        createGenerator={this.props.createGenerator}
        selectGenerator={this.props.selectGenerator}
        generators={this.props.generators}
      />
    </Panel>
  )}
}

export default GeneratorManager;
