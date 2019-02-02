import { ADD } from '../actions';
import { TOGGLE } from '../actions';
import { DELETE } from '../actions';

// let initialState;

// initialState = {
//   todos: [
//     {
//       id : 123456,
//       value : "Eat chicken",
//       completed : false
//     },
//     {
//       id: 123457,
//       value : "Feel at one with the world",
//       completed : false
//     },
//     {
//       id: 123357,
//       value : "Exterminate the wasps",
//       completed : false
//     },
//   ]
// }


export default (state = {}, action) => { 
  switch (action.type) {
    case ADD:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            id : action.id,
            value: action.text,
            completed: false
          }
        ]
      })
    case TOGGLE:
      return Object.assign({}, state, {
        todos: state.todos.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )})
    case DELETE:
    return Object.assign({}, state, {
      todos: state.todos.filter(todo => todo.id !== action.id)
    })
    default:
      return state;
  }
};
