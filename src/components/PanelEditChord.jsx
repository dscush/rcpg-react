import React, { Component } from 'react';
import Panel from './Panel'
import PitchSelector from './PitchSelector'

class PanelEditChord extends Component {
  render() {
    return (
    <Panel title="Edit a Chord">
      <form>
        <label htmlFor="chord-name">Name</label>
        <input type="text" id="chord-name" name="chord-name" />
        <PitchSelector />
      </form>
    </Panel>
  )}
}

export default PanelEditChord;
