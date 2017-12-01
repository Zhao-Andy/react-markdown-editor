import React, { Component } from 'react';
import 'milligram';

import Sidebar from './components/Sidebar'
import Editor from './components/Editor'

class App extends Component {
  constructor() {
    super();
    this.change = this.change.bind(this);
    this.newNote = this.newNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.state = {
      notes: [],
      currentNote: ''
    }
  }

  change(e) {
    this.setState({ currentNote: e });
  }

  newNote() {
    if(this.state.currentNote !== '') {
      this.state.notes.push(this.state.currentNote);
      this.setState({ currentNote: '' });
    }
  }

  editNote(index) {
    console.log(index)
  }

  render() {
    return (
      <div className="App container">
      <h1>Markdown Note Manager</h1>
        <div className="row">
          <Sidebar newNote={this.newNote} notes={this.state.notes} editNote={this.editNote}/>
          <Editor change={this.change}/>
        </div>
      </div>
    );
  }
}

export default App;
