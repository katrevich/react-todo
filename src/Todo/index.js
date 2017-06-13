import React, { Component } from 'react';
import { extendObservable, computed } from 'mobx';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import TodoList from './List';
import TodoFooter from './Footer';
import TodoAddNew from './AddNew';
import { SHOW_ACTIVE, SHOW_DISABLED } from './store/index';


const TodoApp = styled.div`
  max-width: 700px;
  margin: 0 auto;
`

const Todo = observer(class Todo extends Component {

  constructor(props){
    super(props);

    extendObservable(this, {
      visibleTodos: computed(() => {
        switch (this.props.appState.filter){
          case SHOW_ACTIVE:
            return this.props.appState.todos.filter(item => !item.check)
          case SHOW_DISABLED:
            return this.props.appState.todos.filter(item => item.check)
          default:
            return this.props.appState.todos
        }
      })
    })
  }

  addTodo = (text) => {
    this.props.appState.addTodo(text)
  }

  toggle = (id) => {
    this.props.appState.toggle(id)
  }

  remove = (id) => {
    this.props.appState.remove(id)
  }

  setFilter = (filter) => {
    this.props.appState.setFilter(filter);
  }

  render(){

    let footer = (this.props.appState.todos.length > 0) ? <TodoFooter todos={this.props.appState.todos} filter={this.props.appState.filter} setFilter={this.setFilter} /> : null;

    return (
      <TodoApp>
        <h1>Todo</h1>
        <TodoAddNew onSubmit={this.addTodo} />
        <TodoList todos={this.visibleTodos} toggle={this.toggle} remove={this.remove} />
        {footer}
      </TodoApp>
    )
  }
});

export default Todo;
