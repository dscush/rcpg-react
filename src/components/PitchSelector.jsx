import React, { Component } from 'react';
import FilteredMultiSelect from 'react-filtered-multiselect'

const BOOTSTRAP_CLASSES = {
  filter: 'form-control',
  select: 'form-control',
  button: 'btn btn btn-block btn-default',
  buttonActive: 'btn btn btn-block btn-primary',
}

class Pitch {
  pitchClasses = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];
  constructor(midiNumber) {
    this.midiNumber = midiNumber;
    this.class = this.pitchClasses[midiNumber % 12];
    this.octave = Math.floor(midiNumber / 12) - 1;
    this.name = this.class + ' ' + this.octave;
  }
}

class PitchSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedPitches: []};
    this.pitches = [];
    for (let midiNumber = 0; midiNumber < 128; midiNumber++) {
      this.pitches.push(new Pitch(midiNumber));
    }
    this.pitchOptions = this.pitches.map(pitch => {return {id: pitch.midiNumber, name: pitch.name}});

    this.handleDeselect = this.handleDeselect.bind(this);
    this.handleSelectionChange = this.handleSelectionChange.bind(this);
  }

  handleDeselect(index) {
    var selectedPitches = this.state.selectedPitches.slice()
    selectedPitches.splice(index, 1)
    this.setState({selectedPitches})
  }

  handleSelectionChange = (selectedPitches) => {
    selectedPitches.sort((a, b) => a.id - b.id)
    this.setState({selectedPitches})
  }

  render() {
    var {selectedPitches} = this.state
    return (
      <div>
        <FilteredMultiSelect
          classNames={BOOTSTRAP_CLASSES}
          onChange={this.handleSelectionChange}
          options={this.pitchOptions}
          selectedOptions={selectedPitches}
          textProp="name"
          valueProp="id"
        />
        {selectedPitches.length === 0 && <p>(nothing selected yet)</p>}
        {selectedPitches.length > 0 && <ul className="list-group">
          {selectedPitches.map((pitch, i) => <li key={pitch.id} className="list-group-item">
            {`${pitch.name} `}
            <span className="close" style={{cursor: 'pointer'}} onClick={() => this.handleDeselect(i)}>
              &times;
            </span>
          </li>)}
        </ul>}
      </div>
    );
  }
}

export default PitchSelector;
