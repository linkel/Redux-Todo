import { ADD } from '../actions';

const initialState = {
  todos: [
    {
      value : "Eat chicken",
      completed : false
    },
    {
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
            value: action.text,
            completed: false
          }
        ]
      })
    default:
      return state;
  }
};
