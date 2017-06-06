import React, { Component } from 'react';
import Todo from './Todo';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body{
    font-size: 14px;
    font-family: sans-serif;
  }
`

class App extends Component {

  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}

export default App;
