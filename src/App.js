import React from 'react';
import { autorun } from 'mobx';
import { injectGlobal } from 'styled-components';
import { observer } from 'mobx-react';

import Todo from './Todo';
import appState from './Todo/store/index';

injectGlobal`
  body{
    font-size: 14px;
    font-family: sans-serif;
  }
`

const App = observer(() => {
    return (
      <Todo appState={appState} />
    );
})

export default App;
