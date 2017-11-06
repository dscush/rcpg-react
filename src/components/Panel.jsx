import React, { Component } from 'react';
import PitchSelector from './PitchSelector'

function Panel(props) {
  return (
    <div className="panel panel-default">
      {props.title ? (
        <div className="panel-heading">
          {props.title}
        </div>
      ) : (
        ''
      )}
      <div className="panel-body">
        {props.children}
      </div>
    </div>
  );
}

class PanelAddChord extends Component {
  render() {
    return (
    <Panel title="Add a Chord">
      <PitchSelector />
    </Panel>
  )}
}

export default PanelAddChord;
