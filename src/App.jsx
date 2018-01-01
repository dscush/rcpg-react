import React, { Component } from 'react';
import './App.css';
import PanelEditChord from './components/PanelEditChord'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Random Chord Progression Generator</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
              <PanelEditChord />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
