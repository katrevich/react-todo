export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const SET_FILTER = 'SET_FILTER';

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';
export const SHOW_DISABLED = 'SHOW_DISABLED';

export const addTodo = function(text) {
  return {
    type: ADD_TODO,
    payload: {
      text
    }
  }
}

export const removeTodo = function(id) {
  return {
    type: REMOVE_TODO,
    payload: {
      id
    }
  }
}

export const toggleTodo = function(id) {
  return {
    type: TOGGLE_TODO,
    payload: {
      id
    }
  }
}

export const setFilter = function(filter) {
  return {
    type: SET_FILTER,
    payload: {
      filter
    }
  }
}
