import React from 'react';
import TodoListItem from './Item';
import styled from 'styled-components';
import { observer } from 'mobx-react';

const TodoAppList = styled.ul`
  margin: 0 0 20px;
  padding: 0;
  list-style: none;
`

let TodoList = observer(({toggle, remove, todos}) => (
  <TodoAppList>
    {todos.map(todo => <TodoListItem remove={() => remove(todo.id)} toggle={() => toggle(todo.id)} key={todo.id} todo={todo} />)}
  </TodoAppList>
))


export default TodoList;
