import React, { Component } from 'react';
import styled from 'styled-components';

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

class TodoAddnew extends Component {

  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    if(this.textInput.value){
      this.props.addTodo(this.textInput.value);
    }
    this.textInput.value = '';
  }

  render() {
    return (
      <AddForm>
        <form action="" onSubmit={ this.submitHandler }>
          <input type="text" ref={(input) => { this.textInput = input }} />
          <button type="submit">Add</button>
        </form>
      </AddForm>
    )
  }
}


export default TodoAddnew;
