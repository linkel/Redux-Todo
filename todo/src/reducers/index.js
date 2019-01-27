import { ADD } from '../actions';
import { TOGGLE } from '../actions';

const initialState = {
  todos: [
    {
      id : 123456,
      value : "Eat chicken",
      completed : false
    },
    {
      id: 123457,
      value : "Feel at one with the world",
      completed : false
    }
  ]
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
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
    default:
      return state;
  }
};
