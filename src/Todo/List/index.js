import React from 'react';
import TodoListItem from './Item';
import styled from 'styled-components';

const TodoAppList = styled.ul`
  margin: 0 0 20px;
  padding: 0;
  list-style: none;
`

const TodoList = (props) => (
  <TodoAppList>
    {props.todos.map((todo, i) => <TodoListItem remove={props.remove} toggle={props.toggle} key={i} id={i} todo={todo}></TodoListItem>)}
  </TodoAppList>
)

export default TodoList;
