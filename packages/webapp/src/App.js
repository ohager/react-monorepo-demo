import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Headline} from "@acme/atoms";
import {ButtonSet} from "@acme/molecules";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Headline>Test</Headline>
        <ButtonSet>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </ButtonSet>
      </header>
    </div>
  );
}

export default App;
