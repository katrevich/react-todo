import React, { Component } from 'react';
import TodoList from './List';
import TodoFooter from './Footer';
import TodoAddNew from './AddNew';
import styled from 'styled-components';

const TodoApp = styled.div`
  max-width: 700px;
  margin: 0 auto;
`

const SHOW_ALL = 'SHOW_ALL';
const SHOW_ACTIVE = 'SHOW_ACTIVE';
const SHOW_DISABLED = 'SHOW_DISABLED';

class Todo extends Component {

  constructor(props){
    super(props);

    if (!localStorage.getItem('state')){
      this.state = {
        todos: [
          {
            check: true,
            text: "text 1"
          },
          {
            check: false,
            text: "text 2"
          },
          {
            check: true,
            text: "text 3"
          }
        ],
        filter: SHOW_ALL
      };
    } else {
      this.state = JSON.parse(localStorage.getItem('state'));
    }

    this.addTodo = this.addTodo.bind(this);
    this.toggle = this.toggle.bind(this);
    this.remove = this.remove.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  addTodo(text){
    this.setState(prevState => prevState.todos.push({
      text,
      check: false
    }));
  }

  toggle(id) {
    this.setState(prevState => prevState.todos[id].check = !prevState.todos[id].check);
  }

  remove(id) {
    this.setState(prevState => prevState.todos.splice(id, 1));
  }

  filteredTodos() {
    switch (this.state.filter){
      case SHOW_ACTIVE:
        return this.state.todos.filter(item => !item.check);
      case SHOW_DISABLED:
        return this.state.todos.filter(item => item.check);
      default:
        return this.state.todos;
    }
  }

  setFilter(option) {
    this.setState(prevState => prevState.filter = option);
  }

  componentDidUpdate(props, state) {
    localStorage.setItem('state', JSON.stringify(state));
  }

  render() {

    let footer = (this.state.todos.length > 0) ? <TodoFooter setFilter={this.setFilter} todos={this.state.todos} filter={this.state.filter} /> : '';

    return (
      <TodoApp>
        <h1>Todo</h1>
        <TodoAddNew addTodo={this.addTodo} />
        <TodoList todos={this.filteredTodos()} toggle={this.toggle} remove={this.remove} />
        {footer}
      </TodoApp>
    )
  }
}

export default Todo;
