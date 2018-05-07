import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './modules/search';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">          
        </header>        
        <Search/>
      </div>
    );
  }
}

export default App;
