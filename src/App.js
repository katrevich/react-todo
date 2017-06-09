import React, { Component } from 'react';
import Todo from './Todo';
import { injectGlobal } from 'styled-components';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { todoApp } from './reducers/index';
import persistState from 'redux-localstorage';

const enhancer = compose(
  persistState()
)

const initialState = localStorage.getItem('redux') ? JSON.parse(localStorage.getItem('redux')) : {};

const store = createStore(todoApp, initialState, enhancer);

injectGlobal`
  body{
    font-size: 14px;
    font-family: sans-serif;
  }
`

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Todo />
      </Provider>
    );
  }
}

export default App;
