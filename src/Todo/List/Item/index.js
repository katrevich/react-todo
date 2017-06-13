import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

const TodoAppListItem = styled.li`
  text-align: left;
  margin: 15px 0;
  position: relative;
  padding: 0 30px;

  .remove{
    position: absolute;
    right: 0;
    top:0;
    font-size:20px;
    font-weight: bold;
    cursor: pointer;
    color: red;
    opacity: 0;
    transition: opacity .2s ease;
  }

  &:hover{

    .remove{
      opacity: 1;
    }
  }

  > label{
    text-decoration: ${props => props.check ? 'line-through' : ''};
    cursor: pointer;
    font-size: 16px;

    input[type="checkbox"]{
      position: absolute;
      left: -9999px;

      + span{
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 2px;
        border: 1px solid #ccc;
        vertical-align: middle;
        margin: 0 10px 0 0;
        position: absolute;
        top: -2px;
        left: 0;
      }

      &:checked + span{
        background: #efefef;
        box-shadow: inset 0 0 0 2px #fff;
      }
    }
  }
`

let TodoListItem = observer(({toggle, remove, id, todo}) => {
  const { text, check } = todo;
  return (
    <TodoAppListItem check={check}>
      <label><input type="checkbox" checked={check} onChange={() => toggle()}/><span></span>{text}</label>
      <span className="remove" onClick={() => remove()}>x</span>
    </TodoAppListItem>
  )
})


export default TodoListItem;
