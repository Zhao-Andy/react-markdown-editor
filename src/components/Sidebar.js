import React, { Component } from 'react';

class Sidebar extends Component {

  render() {
    var notesList = this.props.notes.map((note, index) => {
      return (
        <li key={index}>
          {note}
          <button className="button button-clear" onClick={this.props.editNote(index)}>
            Edit
          </button>
        </li>
      )
    })
    return (
      <div className="sidebar column column-25">
        <div className="notes">
        <ul>
          { notesList }
        </ul>
        </div>
        <button className="button button-clear" onClick={this.props.newNote}>
          + New Note
        </button>
      </div>
    );
  }
}

export default Sidebar;
