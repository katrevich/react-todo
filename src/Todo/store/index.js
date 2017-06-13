import { observable, action, autorun } from 'mobx';

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';
export const SHOW_DISABLED = 'SHOW_DISABLED';

const initialState = localStorage.getItem('appState') ? JSON.parse(localStorage.getItem('appState')) : {todos: [], filter: SHOW_ALL};

const appState = observable(initialState);

appState.addTodo = action(text => {
  if(text.trim() !== ''){
    appState.todos.push({
      id: appState.todos[appState.todos.length - 1] ? appState.todos[appState.todos.length - 1].id + 1 : 1,
      text,
      check: false
    })
  }
})

appState.toggle = action(id => {
  appState.todos.map(item => {
    if(item.id === id){
      item.check = !item.check;
    }
  })
})

appState.remove = action(id => {
  appState.todos.splice(appState.todos.findIndex(item => item.id === id), 1);
})

appState.setFilter = action(filter => {
  appState.filter = filter;
})

autorun(() => {
  localStorage.setItem('appState', JSON.stringify(appState));
})

export default appState;
