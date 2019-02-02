export const ADD = 'ADD';
export const TOGGLE = 'TOGGLE';
export const DELETE = 'DELETE';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

let nextTodoId = Math.floor(10000*Math.random());

export const add = (text) => {
  // Fill in this function
  return {
    type : ADD,
    id : nextTodoId++,
    text : text,
  }
};

export const toggle = (id) => {
  return {
    type : TOGGLE,
    id : id
  }
};

export const deleteTodo = (id) => {
  return {
    type: DELETE,
    id : id
  }
};