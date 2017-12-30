import React, { Component } from 'react';
import Panel from './Panel'
import PitchSelector from './PitchSelector'

class PanelAddChord extends Component {
  render() {
    return (
    <Panel title="Add a Chord">
      <form>
        <label for="chord-name">Name</label>
        <input type="text" id="chord-name" name="chord-name" />
        <PitchSelector />
      </form>
    </Panel>
  )}
}

export default PanelAddChord;
