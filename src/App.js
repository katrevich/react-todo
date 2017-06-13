import React from 'react';
import { injectGlobal } from 'styled-components';

import Todo from './Todo';
import appState from './Todo/store/index';

injectGlobal`
  body{
    font-size: 14px;
    font-family: sans-serif;
  }
`

const App = () => {
    return (
      <Todo appState={appState} />
    );
}

export default App;
