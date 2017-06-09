import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/index';

const AddForm = styled.div`
  box-shadow: 2px 2px 15px 1px rgba(0,0,0, .2);
  padding: 15px;
  border: 1px solid #efefef;
  margin: 0 0 20px;

  form{
    width: 100%;
    display: flex;
  }

  input{
    width: 100%;
    padding: 10px;
  }

  button{
    padding: 10px;
  }
`

let TodoAddNew = ({onSubmit}) => {
    return (
      <AddForm>
        <form action="" onSubmit={ (e) => {
            e.preventDefault();
            let text = e.target.elements.namedItem('text');
            onSubmit(text.value)
            text.value = '';
          } }>
          <input type="text" id="text"  />
          <button type="submit">Add</button>
        </form>
      </AddForm>
    )
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (text) => {
    if(text.trim()){
      dispatch(addTodo(text));
    }
  }
})


TodoAddNew = connect(null, mapDispatchToProps)(TodoAddNew);


export default TodoAddNew;
