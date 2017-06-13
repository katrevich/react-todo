import React from 'react';
import styled from 'styled-components';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_DISABLED } from '../store/index';
import { observer } from 'mobx-react';

const TodoAppFooter = styled.div`
  border-top: 1px solid #ddd;
  padding: 10px 0;
  font-size: 12px;
  text-align: center;

  .info{
    float: left;
  }

  label{

    input[type="radio"]{
      position: absolute;
      left: -9999px;

      + span{
        display: inline-block;
        padding: 4px 10px;
        border: 1px solid #ddd;
        margin:0 10px;
        border-radius: 2px;
        cursor: pointer;
      }

      &:checked + span{
        background: #efefef;
      }
    }
  }
`

let TodoFooter = observer(({setFilter, todos, filter}) => {

  let left = todos.filter(item => !item.check).length;

  return (
    <TodoAppFooter>
      <div className="info">{left} left</div>

      <label><input  type="radio" onChange={() => setFilter(SHOW_ALL)} name="filter" checked={filter === SHOW_ALL} value="SHOW_ALL"/><span>all</span></label>
      <label><input  type="radio" onChange={() => setFilter(SHOW_ACTIVE)} name="filter" checked={filter === SHOW_ACTIVE} value="SHOW_ACTIVE"/><span>active</span></label>
      <label><input  type="radio" onChange={() => setFilter(SHOW_DISABLED)} name="filter" checked={filter === SHOW_DISABLED} value="SHOW_DISABLED"/><span>done</span></label>
    </TodoAppFooter>
  )
})

export default TodoFooter;
