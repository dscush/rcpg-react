import React, { Component } from 'react';
import './App.css';
import PanelAddChord from './components/Panel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Random Chord Progression Generator</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <PanelAddChord />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
