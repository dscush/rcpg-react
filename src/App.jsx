import React, { Component } from 'react';
import './App.css';
import ChordEditor from './components/ChordEditor';
import GeneratorManager from './components/GeneratorManager';

class App extends Component {
  constructor(props) {
    super(props);
    let generators = [];
    this.state = {
      generators: generators,
      currentPanel: <GeneratorManager
        createGenerator={this.createGenerator}
        selectGenerator={this.selectGenerator}
        generators={generators.map((generator) => generator.name)}
      />
    };

    this.createGenerator = this.createGenerator.bind(this);
    this.selectGenerator = this.selectGenerator.bind(this);
  }

  createGenerator(name) {
    this.setState(function(state) {
      state.generators.push({name: name, chords: []});
      return {generators: state.generators};
    });
  }

  selectGenerator(name) {
    // TODO: create PanelEditGenerator and load it with the selected generator
    console.log(name);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Random Chord Progression Generator</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
              {this.state.currentPanel}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
