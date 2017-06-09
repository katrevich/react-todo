import { combineReducers } from 'redux';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_FILTER, SHOW_ALL } from '../actions/index';

const todos = (todos = [], action) => {
  switch(action.type){
    case ADD_TODO:
      return [
        ...todos,
        {
          id: todos[todos.length - 1] ? todos[todos.length-1].id + 1 : 1,
          text: action.payload.text,
          check: false
        }
      ];
    case REMOVE_TODO:
      return todos.filter(item => item.id !== action.payload.id);
    case TOGGLE_TODO:
      return todos.map(item => {
        if(item.id === action.payload.id){
          item.check = !item.check
        }
        return item;
      })
    default:
      return todos;
  }
}

const filter = (filter = SHOW_ALL, action) => {
  switch(action.type) {
    case SET_FILTER:
      return action.payload.filter
    default:
      return filter;
  }
}

export const todoApp = combineReducers({
  todos,
  filter
})
