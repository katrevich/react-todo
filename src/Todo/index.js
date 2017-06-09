import React from 'react';

import TodoList from './List';
import TodoFooter from './Footer';
import TodoAddNew from './AddNew';
import styled from 'styled-components';

import { connect } from 'react-redux';

const TodoApp = styled.div`
  max-width: 700px;
  margin: 0 auto;
`

let Todo = ({ todos }) => {

    let footer = (todos.length > 0) ? <TodoFooter /> : null;

    return (
      <TodoApp>
        <h1>Todo</h1>
        <TodoAddNew />
        <TodoList />
        {footer}
      </TodoApp>
    )
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

Todo = connect(mapStateToProps)(Todo);

export default Todo;
