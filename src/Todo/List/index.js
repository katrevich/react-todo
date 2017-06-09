import React from 'react';
import TodoListItem from './Item';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo, SHOW_ACTIVE, SHOW_DISABLED } from '../../actions/index';

const TodoAppList = styled.ul`
  margin: 0 0 20px;
  padding: 0;
  list-style: none;
`

const getVisible = (todos, filter) => {
  switch(filter){
    case SHOW_ACTIVE:
      return todos.filter(item => !item.check);
    case SHOW_DISABLED:
      return todos.filter(item => item.check);
    default:
      return todos;
  }
}

const mapStateToProps = (state) => ({
  todos: getVisible(state.todos, state.filter)
})

const mapDispatchToProps = (dispatch) => ({
  toggle: (index) => {
    dispatch(toggleTodo(index));
  },
  remove: (index) => {
    dispatch(removeTodo(index));
  }
})

let TodoList = ({toggle, remove, todos}) => (
  <TodoAppList>
    {todos.map(todo => <TodoListItem remove={() => remove(todo.id)} toggle={() => toggle(todo.id)} key={todo.id} todo={todo} />)}
  </TodoAppList>
)

TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoList;
