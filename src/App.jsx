import React, { Component } from 'react';
import './App.css';
import ChordEditor from './components/ChordEditor';
import GeneratorManager from './components/GeneratorManager';

class App extends Component {
  constructor() {
    super();
    this.state = {
      generators: [],
      currentGenerator: null,
    };
  }

  createGenerator(name) {
    this.setState(prevState => ({
        generators: [...prevState.generators, {name: name, chords: []}]
    }));
  }

  selectGenerator(name) {
    this.setState({currentGenerator: name});
  }
  
  renderCurrentPanel = () => {
    if (this.state.currentGenerator) {
      return this.renderGeneratorEditor();
    } else {
      return this.renderGeneratorManager();
    }
  }

  renderGeneratorManager = () => {
    return (
      <GeneratorManager
        createGenerator={this.createGenerator.bind(this)}
        selectGenerator={this.selectGenerator.bind(this)}
        generators={this.state.generators}
      />
    );
  }

  renderGeneratorEditor = () => {
    return (
      // TODO: create PanelEditGenerator and load it with the selected generator
      null
    );
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
              {this.renderCurrentPanel()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
